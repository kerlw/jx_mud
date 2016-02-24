# jx_mud
一款武侠Mud，基于nodejs_mudos框架运行。

#目录结构介绍
个目录下各个目录的含义：
fun      自定义公共函数接口
item    公共可扩展/复制物品类，其下按目录进行归类，如钱币类归属在money目录下
npc     公共可扩展/复制NPC类，其下按目录进行归类，如官府NPC类归属在guanfu目录下
skill     游戏技能目录，目录下的js文件实现单一技能，每个目录实现一个带perform功能的技能。子目录下的index.js为该技能的主体实现文件，其他文件为perform功能文件。技能名称为skill目录下的 文件/子目录 名，且在技能实现中使用this.name指定该名称（内外必须一致）

其他子目录名称则定义了一个地区，每个地区目录下存放的是room文件，而地区目录下的npc、item目录则可存放仅用于该地区的npc和物品（理论上framework是支持这些npc或物品也被其他地区使用的，为便于归类管理，请自觉遵循该规则，用于多个地区的请放在根目录下npc目录中实现。）

#如何编写房间
编写房间支持两种格式：json格式和js格式
##json格式ROOM
json格式的ROOM适用于比较标准的ROOM，即没有什么自定义函数的ROOM。
例如：
```
{
	"name":"打谷场",
	"desc":"位于小村落南部地势较高的一处平地，被村民们用作打谷场，晾晒着各种收获，因此也招来山里的老鼠光顾，老鼠活动的痕迹简直随处可见,一些村民正忙着在场地上捕杀这些硕鼠。",
	"exits": {
		"north" : "xinshoucun/cunzhongyang"
	},
	"objs" : {
		"xinshoucun/npc/rat" : 6
	},
	"reset" : {
		"timeout" : 120,
		"repeat" : 1
	},
	"kvs" : {
	   "no_fight": 1
	}
}
```

**exits** 中定义了该ROOM的出口（出口定义是单向的，仅用于定义该出口连接到的目标，并不能将目标ROOM的反向方向出口连接到自身），格式是 
```
"方向" ： "路径"
```

**objs** 中定义了该ROOM中的npc及物品，格式为
```
"路径" : "数量"
```

**reset** 中定义了该房间是否需要定时重置，用于实现刷新房间中的npc和物品
```
timeout  定义刷新时间间隔，单位 s
repeat   定义重置是仅一次，还是持续进行。
```

**kvs** 中定义了该房间的一些标识变量，如no_fight（禁止战斗）等

##js格式ROOM
js格式的ROOM应符合以下模板：
```
var fm = require('framework');

var room = fm.extend(function() {  
    if (!(this instanceof room))
            return new room();
            
    this.name = "ROOM_NAME";
    this.desc = "ROOM_DESCRIPTION";
    ...
    this.setup();
}, fm.ROOM);

//在这里插入room的自定义函数

module.exports = room;
```

然后可以在exports之前可以插入room的自定义函数，比如：
```
room.prototype.lazy_init = function() {  
    //do something
}
```
上例中的lazy_init是一个特殊的接口函数定义，用于房间对象构建后的懒加载初始化，要使得该函数定义生效，需要在room的构造函数中调用
```
this.set_tmp('lazy_init', 1);
```

***lazy_init*** 的特性来自与MObject，即除了房间，npc，item都可以定义该特性和接口函数。

#如何编写NPC
编写NPC其实类似于ROOM也是可以写json格式和js格式，不过目前仅支持了js格式。例如：
```
var fm = require('framework');

var laocunzhang = fm.extend(function() {
	this.name = "老村长";
	this.desc = ""
	this.quests = {
		kill_rat : {
			target : "xinshoucun/npc/rat",
			desc : "村子南边的打谷场上是村民们晒谷子的地方，经常有老鼠光顾，请帮助村民们捕杀$(HIR) $count$ $NOR只老鼠吧。",
			type : "kill",
			count : 2,
			reward : {
 				martial_exp : 10,
				social_exp : 10
			}
		}
	}
	this.add_inquiry("kill_rat", "帮助捕杀老鼠", this.inquiry_kill_rat);
	
	this.set_tmp('lazy_init', 1);
}, fm.NPC);

laocunzhang.prototype.lazy_init = function() {
	_daemons.questd.setup_publisher(this);	
}

laocunzhang.prototype.visiable_inquiry = function(id, who) {
	if (who && who.is_player())
		return 1;
	return 0;
}

laocunzhang.prototype.inquiry_kill_rat = function(who) {
	var quest = this.quests['kill_rat'];
	if (!who.quests[quest.id])
		return _daemons.questd.accept_quest(this, who, quest);
	
	var killed = who.quest_kills[quest.target];
	if (killed && killed.progress == killed.total) {
		FUNCTIONS.message_vision("$N对$n一拱手，十分客气的说道：感谢" + _daemons.rankd.query_respect(who) + 
				"，鼠害虽未根除，却也会越来越少吧。", this, who);
		return _daemons.questd.quest_reward(this, who, quest);
	} else {
		return FUNCTIONS.message_vision("$N对$n笑着说道：" + _daemons.rankd.query_respect(who) + 
				"请速速到南边的打谷场去帮助村民消灭鼠害吧。", this, who);
	}
}

module.exports = laocunzhang;
```
该示例中的npc使用了lazy_init特性，用于初始化特殊的任务，关于任务的定义将在”任务“章节详细定义。

***add_inquiry*** 的使用，使npc能够支持一些询问，调用的参数有三个，第一个是该询问的key，对于同一个npc来说，key必须是唯一的，否则后定义的询问会覆盖先定义的；第二个参数为询问的中文内容，用于界面显示；第三个参数为询问的回调函数，当用户触发该询问时，此处的回调函数会被调用。注意，第三个函数也可以是一个字符串，那么玩家出发该询问时，该字符串会被发送到此房间。

***visiable_inquiry*** 函数用于控制该npc支持的询问消息对用户的可见性。不定义该函数则该npc的所有支持的询问对所有玩家均可见

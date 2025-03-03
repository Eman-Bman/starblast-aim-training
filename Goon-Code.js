// Aim Training mod by The Shadow
//changeable player caps
let a1cap=0;
let a2cap=20;
let a3cap=0;
let a4cap=0;

//code:
let ships=[];

var Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"OI1l1":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}}';
ships.push(Fly_101);

var A_Speedster_609 = '{"name":"A-Speedster","level":6,"model":9,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[45,55]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,65],"acceleration":[90,125]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"recoil":50,"number":1,"error":0}},"OI1l1":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"IIIO0":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"ll0I1":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":9,"code":609,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[45,55]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,65],"acceleration":[90,125]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(A_Speedster_609);

var A_Speedster_NR_620 = '{"name":"A-Speedster-NR","level":6,"model":20,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"recoil":50,"number":1,"error":0}},"OI1l1":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"IIIO0":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"ll0I1":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster-NR","level":6,"model":20,"code":620,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(A_Speedster_NR_620);

var Spectator_623 = '{"name":"Spectator","level":6,"model":23,"size":0.8,"zoom":0.8,"specs":{"shield":{"capacity":[69,69],"reload":[400,400]},"generator":{"capacity":[420,420],"reload":[100,100]},"ship":{"mass":70,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Spectator","level":6,"model":23,"code":623,"specs":{"shield":{"capacity":[69,69],"reload":[400,400]},"generator":{"capacity":[420,420],"reload":[100,100]},"ship":{"mass":70,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[],"radius":2.258}}';
ships.push(Spectator_623);



//game.ships[0].set({type:607,stats:88888888,crystals:719})
let rerem=-1;
let area1=0;
let area2=0;
let area3=0;
let area4=0;
let a1ships=[];
let a3ship=[];
let a4ship=[];
let startTime3=0;
let startTime4=0;
let Next3=-1;
let Next4=-1;
let angle=0;
let alienup=2;
let duelA=2;
let COD=-1;
let tiersize=[1,2,4,6,8,11,4];
let shipnames6=["Advanced Fighter","Scorpion","Marauder","Condor","Rock Tower","H-Mercury","Barracuda","O-Defender","A-Speed (Current)","A-Speed (New)","A-Speed (Legacy)","Advanced Fighter","Scorpion","Marauder","Condor","Rock Tower","H-Mercury","Barracuda","O-Defender","A-Speed (Current)","A-Speed (New)","A-Speed (Legacy)","Spectator"];
let emote1="\u{1F913}";
let emote2="\u{1F928}";
let emote3="\u{1F97A}";
let emote4="\u{1F389}";
let gemcaps=[19,79,179,319,499,719,979];
emote1=String.fromCodePoint((127744+Math.floor(Math.random()*837)).toString(10));
emote2=String.fromCodePoint((127744+Math.floor(Math.random()*837)).toString(10));
emote3=String.fromCodePoint((127744+Math.floor(Math.random()*837)).toString(10));
emote4=String.fromCodePoint((127744+Math.floor(Math.random()*837)).toString(10));
let a3high=[0,"N/A"];
let a4high=[0,"N/A"];

map=
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"     999    9999999    999                            999    9999999    999     \n"+
"     99   999     999   99                            99   999     999   99     \n"+
"     9 9 99         99 9 9                            9 9 99         99 9 9     \n"+
"        99           99                                  99           99        \n"+
"       99             99                                99             99       \n"+
"      99               99                              99               99      \n"+
"      9                 9                              9                 9      \n"+
"     99                 99                            99                 99     \n"+
"     9                   9                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     99                 99                            99                 99     \n"+
"      9                 9                              9                 9      \n"+
"      99               99                              99               99      \n"+
"       99             99                                99             99       \n"+
"        99           99                                  99           99        \n"+
"     9 9 99         99 9 9                            9 9 99         99 9 9     \n"+
"     99   999     999   99                            99   999     999   99     \n"+
"     999    9999999    999                            999    9999999    999     \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                 9999      9999                                 \n"+
"                                 9  999  999  9                                 \n"+
"                                 9    9  9    9                                 \n"+
"                                 99   9999   99                                 \n"+
"                                  9          9                                  \n"+
"                                  999      999                                  \n"+
"                                    9      9                                    \n"+
"                                    9      9                                    \n"+
"                                  999      999                                  \n"+
"                                  9          9                                  \n"+
"                                 99   9999   99                                 \n"+
"                                 9    9  9    9                                 \n"+
"                                 9  999  999  9                                 \n"+
"                                 9999      9999                                 \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"     999    9999999    999                            999    9999999    999     \n"+
"     99   999     999   99                            99   999     999   99     \n"+
"     9 9 99         99 9 9                            9 9 99         99 9 9     \n"+
"        99           99                                  99           99        \n"+
"       99             99                                99             99       \n"+
"      99               99                              99               99      \n"+
"      9                 9                              9                 9      \n"+
"     99                 99                            99                 99     \n"+
"     999999999999999999999                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     9                   9                            9                   9     \n"+
"     999999999999999999999                            9                   9     \n"+
"     99                 99                            99                 99     \n"+
"      9                 9                              9                 9      \n"+
"      99               99                              99               99      \n"+
"       99             99                                99             99       \n"+
"        99           99                                  99           99        \n"+
"     9 9 99         99 9 9                            9 9 99         99 9 9     \n"+
"     99   999     999   99                            99   999     999   99     \n"+
"     999    9999999    999                            999    9999999    999     \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                \n"+
"                                                                                ";
const VOCABULARY = [
    // 1
    {text: "You",       icon: "\u004e", key: "O"},
    {text: "Me",        icon: "\u004f", key: "E"},
    {text: "Hmm",       icon: "\u004b", key: "Q"},
    {text: "Yes",       icon: "\u004c", key: "Y"},
    // 2
    {text: "No",        icon: "\u004d", key: "N"},
    {text: "Hello",     icon: "\u0045", key: "H"},
    {text: "Sorry",     icon: "\u00a1", key: "S"},
    {text: "Attack",    icon: "\u0049", key: "A"},
    // 3
    {text: "Follow Me", icon: "\u0050", key: "F"},
    {text: "Good Game", icon: "\u00a3", key: "G"},
    {text: "thousand", icon: "\u{1D660}", key: "K"},
    {text: "High Score",icon: "\u002e", key: "I"},
    // 4
    {text: "Random#1",    icon: emote1, key: "L"},
    {text: "Discord",    icon: "\u007b", key:"Z"},
    {text: "Random#3",    icon: emote3, key:"X"},
    {text: "Random#4",    icon: emote4, key:"P"},
    // 5
    {text: "Duel Area",     icon: "\u00be", key: "D"},
    {text: "Alien Area",    icon: "\u0030", key: "M"},
    {text: "Tunnel Area",   icon: "\u0062", key: "B"},
    {text: "Circle Area",   icon: "\u23E3", key: "J"},
    // 6
    {text: "",   icon: "\u{1D7CF}", key: "1"},
    {text: "",   icon: "\u{1D7D0}", key: "2"},
    {text: "",   icon: "\u{1D7D1}", key: "3"},
    {text: "",   icon: "\u{1D7D2}", key: "4"},
    // 7
    {text: "",   icon: "\u{1D7D3}", key: "5"},
    {text: "",   icon: "\u{1D7D4}", key: "6"},
    {text: "",   icon: "\u{1D7D5}", key: "7"},
    {text: "",   icon: "\u{1D7D6}", key: "8"},
    // 8
    {text: "",   icon: "\u{1D7D7}", key: "9"},
    {text: "",   icon: "\u{1D7CE}", key: "0"}
];
//Button data
var Regen_button = {
  id: "Regen",
  position: [68, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "U",
  visible: true,
  components: [
    { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"New Alien",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[U]",color:"#CDE"}
    ]
};


var Return_button = {
  id: "Return",
  position: [76, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "W",
  visible: true,
  components: [
    { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"Return",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[W]",color:"#CDE"}
    ]
};

var KillA_button = {
  id: "KillA",
  position: [64, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "V",
  visible: true,
  components: [
    { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"Kill Aliens",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[V]",color:"#CDE"}
    ]
};

var spectate_button = {
  id: "spectate",
  position: [56, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "",
  visible: true,
  components: [
    { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"Spectate",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[(click)]",color:"#CDE"}
    ]
};

//button functions
var Regen = function(ship) {
  if ((((ship.x-250)*(ship.x-250))+((ship.y-250)*(ship.y-250)))<=10000 && ship.type!=623)
  {
  game.addAlien({x:250,y:250,code:19,level:0,points:0,crystal_drop:720});
  }
} ;

var KillA = function(ship) {
  if ((((ship.x-250)*(ship.x-250))+((ship.y-250)*(ship.y-250)))<=10000 && ship.type!=623)
  {
    for (var k=game.aliens.length-1;k>-1;k--)
    {
    // game.aliens[k].set({crystal_drop:0});
    game.aliens[k].set({kill:true});
    }
  }
} ;


var Return = function(ship) {
  if (ship.type>=101 && ship.type!=623)
  {
    ship.set({type:(ship.type-tiersize[ship.type.toString().charAt(0)-1])});
  }
  //ship.set({type:605});
  ship.set({x:0,y:0,vx:0,vy:0,shield:3000,stats:88888888,crystals:gemcaps[ship.type.toString().charAt(0)*1-1]});
  shipCount();
  COD=game.step+30;
};

var Spectate = function(ship) {
  if (ship.type==623)
  {
    ship.set({x:0,y:0,type:609,vx:0,vy:0,shield:999,stats:88888888,crystals:980,collider:true});
  }
  else
  {
    if ((((ship.x)*(ship.x))+((ship.y)*(ship.y)))<=8100)
    {
    ship.set({type:623,shield:69,stats:88888888,crystals:0,collider:false});
    }
  }
};

//custom functions



var shipCount = function() {
  area1=0;
  a1ships=[];
  area2=0;
  area3=0;
  area4=0;
  for (var i=0;i<game.ships.length;i++)
  {
    if (game.ships[i].type!=623)
    {
      if (((((game.ships[i].x-250)*(game.ships[i].x-250))+((game.ships[i].y+250)*(game.ships[i].y+250))))<=10000)
      {
        area4=area4+1;
      }
      else if (((((game.ships[i].x+250)*(game.ships[i].x+250))+((game.ships[i].y+250)*(game.ships[i].y+250))))<=10000)
      {
        area3=area3+1;
      }
      else if (((((game.ships[i].x-250)*(game.ships[i].x-250))+((game.ships[i].y-250)*(game.ships[i].y-250))))<=10000)
      {
        area2=area2+1;
      }
      else if (((((game.ships[i].x+250)*(game.ships[i].x+250))+((game.ships[i].y-250)*(game.ships[i].y-250))))<=40000)
      {
        area1=area1+1;
        a1ships.push(i);
      }
      // else if (((((game.ships[i].x)*(game.ships[i].x))+((game.ships[i].y)*(game.ships[i].y))))<=5100) {
        
      // }
    }
  }
  if (area4===0)
  {
    a4ship=[];
  }
  if (area3===0)
  {
    a3ship=[];
  }
};

var customObj = function()
{
  game.removeObject()
  
  game.setObject({
  id: "center",
  type: center,
  position: {x:0,y:0,z:0},
  rotation: {x:3.141592,y:0,z:0},
  scale: {x:120,y:120,z:1}
  }) ;

  if (true)
  {
    game.setObject({
    id: "blocked1",
    type: blocked,
    position: {x:-50,y:50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:20,y:20,z:1}
    }) ;
  }
  
  if (area2>(a2cap-1))
  {
    game.setObject({
    id: "blocked2",
    type: blocked,
    position: {x:50,y:50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:20,y:20,z:1}
    }) ;
  }
  
  if (true)
  {
    game.setObject({
    id: "blocked3",
    type: blocked,
    position: {x:-50,y:-50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:20,y:20,z:1}
    }) ;
  }

  if (true)
  {
    game.setObject({
    id: "blocked4",
    type: blocked,
    position: {x:50,y:-50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:20,y:20,z:1}
    }) ;
  }
};



//objects

var blocked = {
  id: "blocked",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/PNG2.png"
};


var center = {
  id: "center",
  obj: "https://starblast.data.neuronality.com/mods/objects/plane.obj",
  emissive: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/PNG7.png"
};



this.options = {
  soundtrack: "argon.mp3",
  root_mode: "",
  map_name: "Aim Training Lite",
  custom_map: map,
  vocabulary: VOCABULARY,
  speed_mod: 1.2,
  lives: 5,
  radar_zoom: 1,
  weapons_store: false,
  asteroids_strength: 6,
  starting_ship:800,
  ships: ships,
  reset_tree:true,
  map_size: 80
};

this.tick = function(game) {
  //set initial objects
  if (game.step==60)
  {
    customObj();
    echo(emote1);
    echo(emote2);
    echo(emote3);
    echo(emote4);
  }
  if (game.step%120===0)
  {
    shipCount();
    for (var i=0;i<game.ships.length;i++)       //install buttons
    {
      var ship = game.ships[i] ;
      if (!ship.custom.Regen_button_installed)
      {
        ship.custom.Regen_button_installed = true;
        ship.setUIComponent(Regen_button);
      }
      if (!ship.custom.Return_button_installed)
      {
        ship.custom.Return_button_installed = true;
        ship.setUIComponent(Return_button);
      }
      if (!ship.custom.KillA_button_installed)
      {
        ship.custom.KillA_button_installed = true;
        ship.setUIComponent(KillA_button);
      }
      if (!ship.custom.spectate_button_installed)
      {
        ship.custom.spectate_button_installed = true;
        ship.setUIComponent(spectate_button);
      }                                                 //move from lobby to outside
      if (((((game.ships[i].x-50)*(game.ships[i].x-50))+((game.ships[i].y-50)*(game.ships[i].y-50))))<=100)
      {
        //area2
        if (area2<a2cap) {
        game.ships[i].set({x:250,y:250,invulnerable:300});
        game.aliens[0].set({regen:0,shield:1020,damage:84,laser_speed:205});
        area2=area2+1
        customObj();
        }
      }
    }
  }
  if (game.step%60==15)
  {
    for (var k=0;k<game.aliens.length;k++)        //kill ob aliens
    {
    game.aliens[k].set({regen:0,damage:84,laser_speed:100});
      if (((((game.aliens[k].x-250)*(game.aliens[k].x-250))+((game.aliens[k].y-250)*(game.aliens[k].y-250))))>=10000)
      {
      game.aliens[k].set({kill:true});
      }
    }
  }
  if (game.step%10===0)                           //gem cap
  {
    for (var j=0;j<game.ships.length;j++)
    {
      if (game.ships[j].crystals>gemcaps[game.ships[j].type.toString().charAt(0)*1-1])
      {
        game.ships[j].set({crystals:gemcaps[game.ships[j].type.toString().charAt(0)*1-1]});
      }
    }
  }
  // if (game.step%10===0){
  //   if (((game.ships[0].x-game.aliens[0].x)*(game.ships[0].x-game.aliens[0].x))+((game.ships[0].y-game.aliens[0].y)*(game.ships[0].y-game.aliens[0].y))<100) {
  //     let vx=1
  //     let vy=1
  //   }
  // }
  if (game.step==COD)                             //delayed obj reset
  {
    shipCount();
    customObj();
  }
  if (game.step==rerem)
  {
    remAst4();
  }
};

this.event = function(event,game) {
  let ship = event.ship;
  let killer = event.killer;
  let ast = event.asteroid;
  switch (event.name){
    case "ui_component_clicked":
      var component = event.id ;
      if (component == "Regen")
      {
        Regen(ship);
      }
      if (component == "Return")
      {
        Return(ship);
      }
      if (component == "KillA")
      {
        KillA(ship);
      }
      if (component == "spectate")
      {
        Spectate(ship);
      }
      break ;
    case "ship_spawned":
      echo("new spawn");
      ship.set({x:0,y:0,type:609, stats:88888888, crystals:720, shield: 1000});
      shipCount();
      customObj();
      break ;
  }
} ;

// Aim Training mod by The Shadow
// "DS Clan Only"
//changeable player caps
let a1cap=2;
let a2cap=20;
let a3cap=20;
let a4cap=20;


//code:
let ships=[];

var Fly_101 = '{"name":"Fly","level":1,"model":1,"size":1.05,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"bodies":{"main":{"section_segments":12,"offset":{"x":0,"y":0,"z":10},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-65,-60,-50,-20,10,30,55,75,60],"z":[0,0,0,0,0,0,0,0,0]},"width":[0,8,10,30,25,30,18,15,0],"height":[0,6,8,12,20,20,18,15,0],"propeller":true,"texture":[4,63,10,1,1,1,12,17]},"OI1l1":{"section_segments":12,"offset":{"x":0,"y":0,"z":20},"position":{"x":[0,0,0,0,0,0,0],"y":[-15,0,20,30,60],"z":[0,0,0,0,0]},"width":[0,13,17,10,5],"height":[0,18,25,18,5],"propeller":false,"texture":[7,9,9,4,4]},"cannon":{"section_segments":6,"offset":{"x":0,"y":-15,"z":-10},"position":{"x":[0,0,0,0,0,0],"y":[-40,-50,-20,0,20,30],"z":[0,0,0,0,0,20]},"width":[0,5,8,11,7,0],"height":[0,5,8,11,10,0],"angle":0,"laser":{"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"error":2.5},"propeller":false,"texture":[3,3,10,3]}},"wings":{"main":{"length":[60,20],"width":[100,50,40],"angle":[-10,10],"position":[0,20,10],"doubleside":true,"offset":{"x":0,"y":10,"z":5},"bump":{"position":30,"size":20},"texture":[11,63]}},"typespec":{"name":"Fly","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[75,100],"reload":[2,3]},"generator":{"capacity":[40,60],"reload":[10,15]},"ship":{"mass":60,"speed":[125,145],"rotation":[110,130],"acceleration":[100,120]}},"shape":[1.368,1.368,1.093,0.965,0.883,0.827,0.791,0.767,0.758,0.777,0.847,0.951,1.092,1.667,1.707,1.776,1.856,1.827,1.744,1.687,1.525,1.415,1.335,1.606,1.603,1.578,1.603,1.606,1.335,1.415,1.525,1.687,1.744,1.827,1.856,1.776,1.707,1.667,1.654,0.951,0.847,0.777,0.758,0.767,0.791,0.827,0.883,0.965,1.093,1.368],"lasers":[{"x":0,"y":-1.365,"z":-0.21,"angle":0,"damage":[5,6],"rate":4,"type":1,"speed":[160,180],"number":1,"spread":0,"error":2.5,"recoil":0}],"radius":1.856}}';
ships.push(Fly_101);
var A_Speedster_601 = '{"name":"A-Speedster","level":6,"model":1,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"recoil":50,"number":1,"error":0}},"OI1l1":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"IIIO0":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"ll0I1":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster","level":6,"model":1,"code":601,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(A_Speedster_601);
var A_Speedster_New_602 = '{"name":"A-Speedster-New","level":6,"model":2,"size":1.6,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,130],"rotation":[60,85],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,17,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster-New","level":6,"model":2,"code":602,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,130],"rotation":[60,85],"acceleration":[90,140]}},"shape":[3.2,3.109,2.569,2.082,1.786,1.589,1.439,1.348,1.278,1.24,1.222,1.338,1.372,1.801,2.197,2.375,2.52,2.637,3.021,3.288,3.665,3.862,3.713,2.645,2.28,2.244,2.28,2.645,3.713,3.862,3.665,3.288,3.021,2.637,2.52,2.375,2.197,1.801,1.372,1.338,1.222,1.24,1.278,1.348,1.439,1.589,1.786,2.082,2.569,3.109],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.238,"y":-0.296,"z":1.44,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.238,"y":-0.296,"z":1.44,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.862}}';
ships.push(A_Speedster_New_602);
var Speedster_Legacy_603 = '{"name":"Speedster Legacy","level":6,"model":3,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,15,15,10,0],"height":[0,10,15,12,0],"texture":[4]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"Speedster Legacy","level":6,"model":3,"code":603,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(Speedster_Legacy_603);
var A_Speedster_NR_604 = '{"name":"A-Speedster-NR","level":6,"model":4,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"recoil":50,"number":1,"error":0}},"OI1l1":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"IIIO0":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"ll0I1":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster-NR","level":6,"model":4,"code":604,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":165,"speed":[90,130],"rotation":[40,70],"acceleration":[90,120]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[150,205],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(A_Speedster_NR_604);
var A_Speedster_New_NR_605 = '{"name":"A-Speedster-New-NR","level":6,"model":5,"size":1.6,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,130],"rotation":[60,85],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,17,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-Speedster-New-NR","level":6,"model":5,"code":605,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,130],"rotation":[60,85],"acceleration":[90,140]}},"shape":[3.2,3.109,2.569,2.082,1.786,1.589,1.439,1.348,1.278,1.24,1.222,1.338,1.372,1.801,2.197,2.375,2.52,2.637,3.021,3.288,3.665,3.862,3.713,2.645,2.28,2.244,2.28,2.645,3.713,3.862,3.665,3.288,3.021,2.637,2.52,2.375,2.197,1.801,1.372,1.338,1.222,1.24,1.278,1.348,1.439,1.589,1.786,2.082,2.569,3.109],"lasers":[{"x":0,"y":-3.2,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.238,"y":-0.296,"z":1.44,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.238,"y":-0.296,"z":1.44,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.862}}';
ships.push(A_Speedster_New_NR_605);
var Speedster_Legacy_NR_606 = '{"name":"Speedster Legacy NR","level":6,"model":6,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,63,12],"propeller":true,"laser":{"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,15,15,10,0],"height":[0,10,15,12,0],"texture":[4]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,63,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[63],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"Speedster Legacy NR","level":6,"model":6,"code":606,"specs":{"shield":{"capacity":[200,300],"reload":[0.01,0.01]},"generator":{"capacity":[80,140],"reload":[30,45]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":1,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":2,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(Speedster_Legacy_NR_606);
var Spectator_607 = '{"name":"Spectator","level":6,"model":7,"size":0.8,"zoom":0.8,"specs":{"shield":{"capacity":[69,69],"reload":[400,400]},"generator":{"capacity":[420,420],"reload":[100,100]},"ship":{"mass":70,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,10,20,30,40,20,20,40,40,40,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,63,4,4,63,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[63],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":15},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,13,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":70,"y":10,"z":-20},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,5,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[3,4,10,3],"propeller":true}},"wings":{"top":{"offset":{"x":0,"y":50,"z":5},"length":[30],"width":[70,30],"angle":[90],"position":[0,50],"texture":[4],"bump":{"position":10,"size":15}},"side_joins":{"offset":{"x":0,"y":30,"z":-3},"length":[100],"width":[100,40],"angle":[0],"position":[-50,50],"texture":[4],"bump":{"position":10,"size":10}}},"typespec":{"name":"Spectator","level":6,"model":7,"code":607,"specs":{"shield":{"capacity":[69,69],"reload":[400,400]},"generator":{"capacity":[420,420],"reload":[100,100]},"ship":{"mass":70,"speed":[200,200],"rotation":[200,200],"acceleration":[200,200]}},"shape":[1.6,1.582,1.552,1.313,1.138,1.009,0.919,0.75,0.688,0.708,0.733,1.157,1.297,1.359,1.392,1.431,1.696,1.975,2.192,2.258,1.661,1.429,1.58,1.628,1.705,1.835,1.705,1.628,1.58,1.429,1.661,2.258,2.192,1.975,1.696,1.431,1.392,1.359,1.297,1.157,0.733,0.708,0.688,0.75,0.919,1.009,1.138,1.313,1.552,1.582],"lasers":[],"radius":2.258}}';
ships.push(Spectator_607);
var Shadow_X_4_610 = '{"name":"Shadow X-4","level":6,"model":10,"size":1.1,"zoom":0.7,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[400,750],"reload":[250,350]},"ship":{"mass":125,"speed":[110,250],"rotation":[35,100],"acceleration":[140,250]}},"bodies":{"main":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0,0,0],"y":[-100,-98,-95,-70,-40,0,40,70,80,90,100],"z":[0,0,0,0,0,0,0,0,0,0,0]},"width":[0,5,10,20,30,20,20,30,30,30,20,0],"height":[0,4,4,20,20,10,10,15,15,15,10,10],"texture":[12,5,4,4,4,3,4,4,5]},"back":{"section_segments":10,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0],"y":[90,95,100,105,90],"z":[0,0,0,0,0]},"width":[10,15,18,19,2],"height":[3,5,7,8,2],"texture":[5],"propeller":true},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-25,"z":12},"position":{"x":[0,0,0,0,0,0],"y":[-45,-40,-25,0,5],"z":[0,0,0,0,0,0]},"width":[0,10,15,5,0],"height":[0,10,15,5,0],"texture":[9]},"laser":{"section_segments":10,"offset":{"x":50,"y":10,"z":-13},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-30,-25,0,10,20,25,30,40,70,60],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,10,15,15,15,10,10,15,10,0],"height":[0,10,15,15,15,10,10,15,5,0],"texture":[6,4,10,3,4,3,2],"propeller":true,"laser":{"damage":[50,70],"rate":10,"type":1,"recoil":200,"speed":[160,190],"number":1}}},"wings":{"top":{"doubleside":true,"offset":{"x":10,"y":60,"z":5},"length":[30],"width":[50,30],"angle":[60],"position":[0,50],"texture":[3],"bump":{"position":10,"size":10}},"side":{"doubleside":true,"offset":{"x":10,"y":70,"z":5},"length":[30],"width":[40,20],"angle":[-13],"position":[0,60],"texture":[5],"bump":{"position":10,"size":10}},"wings":{"offset":{"x":0,"y":35,"z":0},"length":[80],"width":[100,70],"angle":[0],"position":[-80,50],"texture":[4],"bump":{"position":10,"size":15}}},"typespec":{"name":"Shadow X-4","level":6,"model":10,"code":610,"specs":{"shield":{"capacity":[150,220],"reload":[5,7]},"generator":{"capacity":[400,750],"reload":[250,350]},"ship":{"mass":125,"speed":[110,250],"rotation":[35,100],"acceleration":[140,250]}},"shape":[2.2,2.141,1.787,1.481,1.272,1.135,1.076,1.035,1.016,1.188,1.343,1.35,1.371,1.416,1.46,1.564,1.887,2.17,2.405,2.753,3.16,2.084,2.79,3.199,2.656,2.315,2.656,3.199,2.79,2.084,3.16,2.753,2.405,2.17,1.887,1.564,1.46,1.416,1.372,1.35,1.343,1.188,1.016,1.035,1.076,1.135,1.272,1.481,1.787,2.141],"lasers":[{"x":1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[50,70],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":200},{"x":-1.1,"y":-0.44,"z":-0.286,"angle":0,"damage":[50,70],"rate":10,"type":1,"speed":[160,190],"number":1,"spread":0,"error":0,"recoil":200}],"radius":3.199}}';
ships.push(Shadow_X_4_610);
var A_OP_611 = '{"name":"A-OP","level":6,"model":11,"size":1.5,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[800,1400],"reload":[380,840]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"bodies":{"main":{"section_segments":8,"offset":{"x":0,"y":0,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-100,-95,0,0,70,65],"z":[0,0,0,0,0,0]},"width":[0,10,40,20,20,0],"height":[0,5,30,30,15,0],"texture":[6,11,5,3,12],"propeller":true,"laser":{"damage":[38,84],"rate":10,"type":2,"speed":[175,230],"recoil":50,"number":1,"error":0}},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-60,"z":15},"position":{"x":[0,0,0,0,0,0,0],"y":[-20,0,20,40,50],"z":[-7,-5,0,0,0]},"width":[0,10,10,10,0],"height":[0,10,15,12,0],"texture":[9]},"side_propulsors":{"section_segments":10,"offset":{"x":50,"y":25,"z":0},"position":{"x":[0,0,0,0,0,0,0,0,0,0],"y":[-20,-15,0,10,20,25,30,40,80,70],"z":[0,0,0,0,0,0,0,0,0,0]},"width":[0,15,20,20,20,15,15,20,10,0],"height":[0,15,20,20,20,15,15,20,10,0],"propeller":true,"texture":[4,4,2,2,5,3,5,4,12]},"cannons":{"section_segments":12,"offset":{"x":30,"y":40,"z":45},"position":{"x":[0,0,0,0,0,0,0],"y":[-50,-45,-20,0,20,30,40],"z":[0,0,0,0,0,0,0]},"width":[0,5,7,10,3,5,0],"height":[0,5,7,8,3,5,0],"angle":-10,"laser":{"damage":[8,12],"rate":10,"type":1,"speed":[100,130],"number":1,"angle":-10,"error":0},"propeller":false,"texture":[6,4,10,4,63,4]}},"wings":{"join":{"offset":{"x":0,"y":0,"z":10},"length":[40,0],"width":[10,20],"angle":[-1],"position":[0,30],"texture":[3],"bump":{"position":0,"size":25}},"winglets":{"offset":{"x":0,"y":-40,"z":10},"doubleside":true,"length":[45,10],"width":[5,20,30],"angle":[50,-10],"position":[90,80,50],"texture":[4],"bump":{"position":10,"size":30}}},"typespec":{"name":"A-OP","level":6,"model":11,"code":611,"specs":{"shield":{"capacity":[200,300],"reload":[6,8]},"generator":{"capacity":[800,1400],"reload":[380,840]},"ship":{"mass":175,"speed":[90,115],"rotation":[60,80],"acceleration":[90,140]}},"shape":[3,2.914,2.408,1.952,1.675,1.49,1.349,1.263,1.198,1.163,1.146,1.254,1.286,1.689,2.06,2.227,2.362,2.472,2.832,3.082,3.436,3.621,3.481,2.48,2.138,2.104,2.138,2.48,3.481,3.621,3.436,3.082,2.832,2.472,2.362,2.227,2.06,1.689,1.286,1.254,1.146,1.163,1.198,1.263,1.349,1.49,1.675,1.952,2.408,2.914],"lasers":[{"x":0,"y":-3,"z":0,"angle":0,"damage":[38,84],"rate":10,"type":2,"speed":[175,230],"number":1,"spread":0,"error":0,"recoil":50},{"x":1.16,"y":-0.277,"z":1.35,"angle":-10,"damage":[8,12],"rate":10,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0},{"x":-1.16,"y":-0.277,"z":1.35,"angle":10,"damage":[8,12],"rate":10,"type":1,"speed":[100,130],"number":1,"spread":-10,"error":0,"recoil":0}],"radius":3.621}}';
ships.push(A_OP_611);
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
let shipnames=["Current","Revamp 3.0","Legacy","Current (NR)","Revamp 3.0 (NR)","Legacy (NR)","Spectating","","","Shadow X-4","A-OP"];
let emote1="\u{1F913}";
let emote2="\u{1F928}";
let emote3="\u{1F97A}";
let emote4="\u{1F389}";
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

var A_Speed_button = {
  id: "A_Speed",
  position: [72, 1, 3.5, 5.5],
  clickable: true,
  shortcut: "T",
  visible: true,
  components: [
    { type:"box",position:[0,0,100,100],fill:"#456",stroke:"#CDE",width:2},
    { type: "text",position:[10,35,80,30],value:"Change Ship",color:"#CDE"},
    { type: "text",position:[20,70,60,20],value:"[T]",color:"#CDE"}
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
  position: [60, 1, 3.5, 5.5],
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
  if ((((ship.x-250)*(ship.x-250))+((ship.y-250)*(ship.y-250)))<=10000 && ship.type!=607)
  {
  game.addAlien({x:250,y:250,code:19,level:0,points:0,crystal_drop:720});
  }
} ;

var KillA = function(ship) {
  if ((((ship.x-250)*(ship.x-250))+((ship.y-250)*(ship.y-250)))<=10000 && ship.type!=607)
  {
    for (var k=game.aliens.length-1;k>-1;k--)
    {
    // game.aliens[k].set({crystal_drop:0});
    game.aliens[k].set({kill:true});
    }
  }
} ;

var A_Speed = function(ship) {
  if (((ship.x*ship.x)+(ship.y*ship.y))<=8100 && ship.type!=607)
  {
    ship.set({type: (ship.type - 600) % 3 + 601});
    ship.set({stats:88888888, crystals:719, shield: 1000});
  }
};

var Return = function(ship) {
  if (ship.type>=604 && ship.type!=607)
  {
    ship.set({type:(ship.type-3)});
  }
  //ship.set({type:605});
  ship.set({x:0,y:0,vx:0,vy:0,shield:3000,stats:88888888,crystals:719});
  shipCount();
  COD=game.step+30;
};

var Spectate = function(ship) {
  if (ship.type==607)
  {
    ship.set({x:0,y:0,type:601,vx:0,vy:0,shield:300,stats:88888888,crystals:719,collider:true});
  }
  else
  {
    if ((((ship.x)*(ship.x))+((ship.y)*(ship.y)))<=8100)
    {
    ship.set({type:607,shield:69,stats:88888888,crystals:0,collider:false});
    }
  }
};
//custom functions

var sendUI = function(ship, UI) {
  if (ship !== null && typeof ship.setUIComponent == "function") {
    if (UI.visible || UI.visible === null) ship.setUIComponent(UI);
    else ship.setUIComponent({id: UI.id, position: [0,0,0,0], visible: false});
  }
};

var shipCount = function() {
  area1=0;
  a1ships=[];
  area2=0;
  area3=0;
  area4=0;
  for (var i=0;i<game.ships.length;i++)
  {
    if (game.ships[i].type!=607)
    {
      if (((((game.ships[i].x-250)*(game.ships[i].x-250))+((game.ships[i].y+250)*(game.ships[i].y+250))))<=10000)
      {
        area4=area4+1;
      }
      if (((((game.ships[i].x+250)*(game.ships[i].x+250))+((game.ships[i].y+250)*(game.ships[i].y+250))))<=10000)
      {
        area3=area3+1;
      }
      if (((((game.ships[i].x-250)*(game.ships[i].x-250))+((game.ships[i].y-250)*(game.ships[i].y-250))))<=10000)
      {
        area2=area2+1;
      }
      if (((((game.ships[i].x+250)*(game.ships[i].x+250))+((game.ships[i].y-250)*(game.ships[i].y-250))))<=14400)
      {
        area1=area1+1;
        a1ships.push(i);
      }
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

var remAst4 = function()
{
  for (var l=game.asteroids.length-1;l>-1;l--)
  {
    echo(l);
    if (((((game.asteroids[l].x-250)*(game.asteroids[l].x-250))+((game.asteroids[l].y+250)*(game.asteroids[l].y+250))))<=10000)
    {
      game.asteroids[l].set({kill:true});
    }
  }
};

var remAst3 = function()
{
  for (var l=game.asteroids.length-1;l>-1;l--)
  {
    echo(l);
    if (((((game.asteroids[l].x+250)*(game.asteroids[l].x+250))+((game.asteroids[l].y+250)*(game.asteroids[l].y+250))))<=10000)
    {
      game.asteroids[l].set({kill:true});
    }
  }
};

var newCircle = function()
{
  echo("newCircle")
  Next4=game.step+Math.floor(1000000/(game.step-startTime4+3333));
  for (var l=0;l<a4ship.length;l++) {
    angle=360*Math.random();
    let vx=0.05*(game.ships[a4ship[l]].x-(85*Math.cos(angle)+245));
    let vy=0.05*(game.ships[a4ship[l]].y-(85*Math.sin(angle)-245));
    let vt=Math.sqrt((vx*vx)+(vy*vy));
    let vg=1.5-(10000/((game.step-startTime4)+9000));
    let size=((game.step-startTime4)/720)+10;
    vx=vx/(vt/vg);
    vy=vy/(vt/vg);
    game.addAsteroid({x:(85*Math.cos(angle)+245),y:(85*Math.sin(angle)-245),size:size,vx:(vx),vy:(vy)});
    game.ships[a4ship[l]].set({score:game.ships[a4ship[l]].score+(Math.floor(1000000/(game.step-startTime4+3333)))});
  }
};

var customObj = function()
{
  game.removeObject()
  
  game.setObject({
  id: "center",
  type: center,
  position: {x:0,y:0,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:1}
  }) ;
  
  game.setObject({
  id: "startArea",
  type: startArea,
  position: {x:-160,y:-245,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:1}
  }) ;
  
  game.setObject({
  id: "endArea",
  type: endArea,
  position: {x:-335,y:-245,z:0},
  rotation: {x:0,y:0,z:0},
  scale: {x:1,y:1,z:1}
  }) ;
  
  game.setObject({
  id: "desc4",
  type: desc4,
  position: {x:30,y:-45,z:-1},
  rotation: {x:0,y:0,z:0},
  scale: {x:0.2,y:0.2,z:0.01}
  }) ;
  
  game.setObject({
  id: "desc3",
  type: desc3,
  position: {x:-30,y:-45,z:-1},
  rotation: {x:0,y:0,z:0},
  scale: {x:0.2,y:0.2,z:0.01}
  }) ;
  
  if (area1>(a1cap-1))
  {
    game.setObject({
    id: "blocked1",
    type: blocked,
    position: {x:-50,y:50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:1,y:1,z:1}
    }) ;
  }
  
  if (area2>(a2cap-1))
  {
    game.setObject({
    id: "blocked2",
    type: blocked,
    position: {x:50,y:50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:1,y:1,z:1}
    }) ;
  }
  
  if (area3>(a3cap-1))
  {
    game.setObject({
    id: "blocked3",
    type: blocked,
    position: {x:-50,y:-50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:1,y:1,z:1}
    }) ;
  }

  if (area4>(a4cap-1))
  {
    game.setObject({
    id: "blocked4",
    type: blocked,
    position: {x:50,y:-50,z:0},
    rotation: {x:0,y:0,z:0},
    scale: {x:1,y:1,z:1}
    }) ;
  }
};

var newLine = function()
{
  Next3=game.step+Math.floor(1000000/(game.step-startTime3+3333));
  for (var l=0;l<a3ship.length;l++) {
    let vg=1.5-(10000/((game.step-startTime3)+9000));
    game.addAsteroid({x:-155,y:(20*Math.random()-255),size:15,vx:(-vg),vy:0});
    game.ships[a3ship[l]].set({score:game.ships[a3ship[l]].score+(Math.floor(1000000/(game.step-startTime3+3333)))});
  }
}

//objects
var redX = {
  id: "redX",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/redX.obj",
  emissiveColor: 0xFF0000
};

var greenY = {
  id: "greenY",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/greenY.obj",
  emissiveColor: 0x00FF00
};
  
var blocked = {
  id: "blocked",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/blocked.obj",
  emissiveColor: 0xF0F0FF
};

var startArea = {
  id: "startArea",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/startArea.obj",
  emissiveColor: 0xFF9900
}

var endArea = {
  id: "endArea",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/endArea.obj",
  emissiveColor: 0xFF0000
}

var center = {
  id: "center",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/Center_Base2.obj",
  emissiveColor: 0xF0F0FF
};

var desc4 = {
  id: "desc4",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/desc4.obj",
  emissiveColor: 0xF0F0FF
}

var desc3 = {
  id: "desc3",
  obj: "https://raw.githubusercontent.com/Eman-Bman/starblast-aim-training/refs/heads/main/desc3.obj",
  emissiveColor: 0xF0F0FF
}



this.options = {
  soundtrack: "argon.mp3",
  root_mode: "",
  map_name: "Aim Training V1.1.2",
  custom_map: map,
  vocabulary: VOCABULARY,
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
  if (game.step%60===0)
  {
    // echo("GameStep:"+game.step)
    // echo("Next3:"+Next3)
    // echo("Next4:"+Next4)
    // echo("rerem:"+rerem)
  }
  if (game.step==60)
  {
    customObj();
    echo(emote1);
    echo(emote2);
    echo(emote3);
    echo(emote4);
  }
  if (game.step>=150 && area4>0 && game.step==Next4)  //create new asteroid in area 4
  {
    newCircle();
  }
  if (game.step>=150 && area3>0 && game.step==Next3)  //create new asteroid in area 3
  {
    newLine();
  }
  if (game.step%120===0)
  {
    shipCount();
    if (duelA==2 && area1==2)                   //start duel
    {
      angle=360*Math.random();
      game.ships[a1ships[0]].set({x:(85*Math.cos(angle)-245),y:(85*Math.sin(angle)+245),invulnerable:60,shield:999,crystals:720});
      game.ships[a1ships[1]].set({x:(85*Math.cos(angle-180)-245),y:(85*Math.sin(angle-180)+245),invulnerable:60,shield:999,crystals:720});
      duelA=3;
    }
    if (duelA==3 && area1!=2)                   //mark duel started
    {
      duelA=2;
    }
    for (var i=0;i<game.ships.length;i++)       //install buttons
    {
      var ship = game.ships[i] ;
      if (!ship.custom.Regen_button_installed)
      {
        ship.custom.Regen_button_installed = true;
        ship.setUIComponent(Regen_button);
      }
      if (!ship.custom.A_Speed_button_installed)
      {
        ship.custom.A_Speed_button_installed = true;
        ship.setUIComponent(A_Speed_button);
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
      if (((((game.ships[i].x+50)*(game.ships[i].x+50))+((game.ships[i].y+50)*(game.ships[i].y+50))))<=100)
      {
        //area 3
        if (area3<a3cap && game.ships[i].type!=607) {
        remAst3();
        game.ships[i].set({x:-250,y:-250,invulnerable:300,score:0,crystals:0,type:(game.ships[i].type+3),stats:88888888,shield:300});
        a3ship=a3ship+[i]
        if (area3===0)
        {
          a3ship=[i];
          startTime3=game.step;
          Next3=game.step+300;
        }
        area3=area3+1
        customObj();
        }
        if (game.ships[i].type==607) {
        game.ships[i].set({x:-250,y:-250});
        }
      }
      if (((((game.ships[i].x+50)*(game.ships[i].x+50))+((game.ships[i].y-50)*(game.ships[i].y-50))))<=100)
      {
        //area1
        if (area1<a1cap) {
        game.ships[i].set({x:-250,y:250,invulnerable:300});
        area1=area1+1
        customObj();
        }
      }
      if (((((game.ships[i].x-50)*(game.ships[i].x-50))+((game.ships[i].y+50)*(game.ships[i].y+50))))<=100)
      {
        //area4
        if (area4<a4cap && game.ships[i].type!=607) {
        remAst4();
        game.ships[i].set({x:250,y:-250,invulnerable:300,score:0,crystals:0,type:(game.ships[i].type+3),stats:88888888,shield:300});
        a4ship=a4ship+[i]
        if (area4===0)
        {
          a4ship=[i];
          startTime4=game.step;
          Next4=game.step+300;
        }
        area4=area4+1
        customObj();
        }
        if (game.ships[i].type==607) {
        game.ships[i].set({x:250,y:-250});
        }
      }
    }
  }
  if (game.step%10===0)                         //check for missed area3 asteroids
  {
    for (var k=0;k<game.asteroids.length;k++)
    {
      if (game.asteroids[k].x<-330)
      {
        game.asteroids[k].set({kill:true})
        if (area3!=0)
        {
          for (var l=0;l<a3ship.length;l++) {
            if (game.ships[a3ship[l]].shield>50)
            {
              game.ships[a3ship[l]].set({shield:game.ships[a3ship[l]].shield-50})
            }
            else
            {
              game.ships[a3ship[l]].set({kill:true})
              Next3=1
            }
          }
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
  if (game.step%60===0)                           //display ship type
  {
    for (var j=0;j<game.ships.length;j++)
    {
      sendUI(game.ships[j], {
      id: "shiptype",
      position: [2.5,28,15,10],
      visible: true,
      components: [
      {type: "text",position:[0,0,100,50],value:(`Current Ship: `+(shipnames[game.ships[j].type-601])),color:"#cde"},
      ]
    });
    }
  }
  if (game.step%10===0)                           //gem cap
  {
    for (var j=0;j<game.ships.length;j++)
    {
      if (game.ships[j].crystals>719)
      {
        game.ships[j].set({crystals:719});
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
      if (component == "A_Speed")
      {
        A_Speed(ship);
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
      ship.set({x:0,y:0,type:601, stats:88888888, crystals:720, shield: 1000});
      shipCount();
      customObj();
      break ;
    case "asteroid_destroyed":
      killer.set({score:killer.score+1000});
      break ;
    case "ship_destroyed":
      echo("new death");
      if ((((ship.x-250)*(ship.x-250))+((ship.y+250)*(ship.y+250)))<=12100)
      {
        area4=area4-1
        Next4=-1
        if (area4===0)
        {
          remAst4();
          rerem=game.step+30
          a4ship=[]
        }
      }
      if ((((ship.x+250)*(ship.x+250))+((ship.y+250)*(ship.y+250)))<=12100)
      {
        area3=area3-1
        Next3=-1
        if (area3===0)
        {
          remAst3();
          a3ship=[]
        }
      }
      shipCount();
      customObj();
      break;
  }
} ;

// Aim Training mod by The Shadow
// "DS Clan Only"
//changeable player caps
let a1cap=2;
let a2cap=20;
let a3cap=20;
let a4cap=20;


//code:

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

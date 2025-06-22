speed = 0.7;
player = document.getElementById("main_char");
mapa = document.getElementById("fondo");
last_dir = player.dataset.last_dir;
fondo_x = "50%";
fondo_y = "50%";

player.style.left="737px";
player.style.top="30px";

var coords = [
  {
    "rango_x":[60,180],
    "rango_y":[425,545],
    "accion":"bus"
  },
    {
    "rango_x":[916,993],
    "rango_y":[100,180],
    "accion":"robot"
  }
];

var tickRate = 3,
    keyDown = {},
    keyMap = {
        65: 'left',
        87: 'up',
        68: 'right',
        83: 'down'
    };

$('body').keydown(function(e){ keyDown[keyMap[e.which]] = true;  });
$('body').keyup(function(e){   keyDown[keyMap[e.which]] = false; });

var tick = function() {
    fondo_x = parseFloat(player.style.left.slice(0, -2));;
    fondo_y = parseFloat(player.style.top.slice(0, -2));;
  if(keyDown['up']) {
    if(fondo_y>3){
        fondo_y=fondo_y-speed;
    }
    if(last_dir!="up"){
        last_dir="up";
        player.setAttribute("src","../resources/mapa/walking_up.gif");
    } 
    player.style="left:"+fondo_x+"px;top:"+fondo_y+"px;";
  } else if (keyDown['down']) {
    if(fondo_y<562){
    fondo_y=fondo_y+speed;
    }
    if(last_dir!="down"){
        last_dir="down";
        player.setAttribute("src","../resources/mapa/walking_down.gif");
    }
    player.style="left:"+fondo_x+"px;top:"+fondo_y+"px;";
  } else if (keyDown['left']) {
    if(fondo_x>30){
        fondo_x=fondo_x-speed;
    }
    if(last_dir!="left"){
        last_dir="left";
        player.setAttribute("src","../resources/mapa/walking_left.gif");
    }
    player.style="left:"+fondo_x+"px;top:"+fondo_y+"px;";
  } else if (keyDown['right']) {
    if(fondo_x<1280){
        fondo_x=fondo_x+speed;
    }
    player.style="left:"+fondo_x+"px;top:"+fondo_y+"px;";
    if(last_dir!="right"){
        last_dir="right";
        player.setAttribute("src","../resources/mapa/walking_right.gif");
    }
  }
  else{
    if(last_dir!="nada"){
        player.setAttribute("src","../resources/mapa/facing_"+last_dir+".png");
        last_dir="nada";
    }
  }

  setTimeout(tick, tickRate);
};

tick();

window.onkeyup = function(k){
  //keycode e
  if(k.key=="e"){
    interactuar();
    //comprobar coordenadas

    //bloquear movimiento

    //mostrar modal

    //cerrar modal

    //restaurar movimiento
  }
}

function dentroDe(coord_x,coord_y,rango_x,rango_y){
  if(coord_x>=rango_x[0]&&coord_x<=rango_x[1]){
    if(coord_y>=rango_y[0]&&coord_y<=rango_y[1]){
      return true;
    }
  }
  return false;
}

function interactuar(){
  coord_x = parseFloat(player.style.left.slice(0, -2));
  coord_y = parseFloat(player.style.top.slice(0, -2));
  for(var i=0;i<coords.length;i++){
    if(dentroDe(coord_x,coord_y,coords[i]["rango_x"],coords[i]["rango_y"])){
      alert(coords[i]["accion"]);
      console.log(coords[i]["accion"]);
    }
  }
}
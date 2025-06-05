// function retry(){
//   console.log("retried");
//   num =  document.getElementById('imagenDiscoA').value;
//   var duracionTotal = document.getElementById("duracionTotal");
//   var segundos = audios[num].duration;
//   var minutos = Math.floor(segundos/60);
//   segundos = Math.floor(segundos%60);

//   if(minutos<10){
//     minutos = "0"+minutos;
//   }
//   if(segundos<10){
//     segundos = "0"+segundos;
//   }
//   duracionTotal.innerHTML = minutos+":"+segundos;
// }



// CANCIONES: Musica Magica de Isadora Juice, DIAMONDS de Princess Princess y TEAM ZISSOU DE SEU JORGE
// MODO OSCURO: The ocean de Linna Olsson, Under a monochromatic sky y FRAGMENTS DE MISHA PANFILOV

// if(document.cookie==""){ si la cookie está vacía document.cookie="";
//   alert("awwaw");
// }

if(document.cookie==""){
  alert("No hay cookies");
}
else{
  alert("Se ha encontrado la cookie "+document.cookie);
}

document.cookie = "cookie=TEXTO COOKIE; expires=Thu, 18 Dec 2040 12:00:00 UTC;";
alert("Se ha guardado la cookie "+document.cookie);

// console.log("COOOKIE = "+document.cookie);

document.getElementById('contenedorLateral').setAttribute("style","height:"+(document.getElementById('contenido').clientHeight-210)+"px");
window.onresize = function() {
    document.getElementById('contenedorLateral').setAttribute("style","height:"+(document.getElementById('contenido').clientHeight-210)+"px");
 }

audios = document.getElementsByClassName("bgm");
audios[0].volume = 0.5;
activarAudio();

async function activarAudio(){
  try{
    audios[0].play();

    if(audios[0].paused){
        setTimeout(activarAudio, 500);
    }
    else{

      document.getElementById('imagenDisco').src = "resources/musica/disco0.png";
      document.getElementById('imagenDiscoA').value = 0;
      // var duracionTotal = document.getElementById("duracionTotal");
      // var segundos = document.getElementsByClassName("bgm")[0].duration;
      // var minutos = Math.floor(segundos/60);
      // segundos = Math.floor(segundos%60);

      // if(minutos<10){
      //   minutos = "0"+minutos;
      // }
      // if(segundos<10){
      //   segundos = "0"+segundos;
      // }
      duracionTotal.innerHTML = "05:19";
      // if(minutos===NaN){
      //   setTimeout(retry, 300);
      // }

      if(document.getElementById('imagenDiscoA').hasAttribute("href")){
        document.getElementById('imagenDiscoA').href ="https://youtu.be/nwjeuR5UEKE";
      }
      else{
        document.getElementById('imagenDiscoA').setAttribute("href", audios[0].dataset.url)
      }

    }
  }
  catch(DOMException){
    setTimeout(activarAudio, 500);
  }
}

function botonPausa(){
  var boton=document.getElementById('botonPausa');
  num =  document.getElementById('imagenDiscoA').value;
  if(audios[num].paused){
      audios[num].play();
      boton.src="resources/reproductor/pausa.png";
    }
    else{
      audios[num].pause();
      boton.src="resources/reproductor/play.png";
    }
  
}

function siguienteCancion(){
  num =  document.getElementById('imagenDiscoA').value;

  audios[num].pause();
  var volT = audios[num].volume;
  num=num+1;
  if(num==audios.length){
    num = 0;
  }
  audios[num].currentTime = 0;
  audios[num].volume = volT;
  audios[num].play();

  var duracionTotal = document.getElementById("duracionTotal");
  var segundos = audios[num].duration;
  var minutos = Math.floor(segundos/60);
  segundos = Math.floor(segundos%60);

  if(minutos<10){
    minutos = "0"+minutos;
  }
  if(segundos<10){
    segundos = "0"+segundos;
  }
  duracionTotal.innerHTML = minutos+":"+segundos;

  document.getElementById('imagenDiscoA').value = num;
  document.getElementById('imagenDiscoA').href =audios[num].dataset.url;
  document.getElementById('imagenDisco').src = "resources/musica/disco"+num+".png";
  document.getElementById('botonPausa').src="resources/reproductor/pausa.png";
}

function minutoCero(){
  num =  document.getElementById('imagenDiscoA').value;
  if(audios[num].currentTime < 2){
    //cancion anterior
    audios[num].pause();
    var volT = audios[num].volume;
    num=num-1;
    if(num<0){
      num = (audios.length-1);
    }
    audios[num].currentTime = 0;
    audios[num].volume = volT;
    audios[num].play();

    var duracionTotal = document.getElementById("duracionTotal");
    var segundos = audios[num].duration;
    var minutos = Math.floor(segundos/60);
    segundos = Math.floor(segundos%60);

    if(minutos<10){
    minutos = "0"+minutos;
    }
    if(segundos<10){
      segundos = "0"+segundos;
    }
    duracionTotal.innerHTML = minutos+":"+segundos;

    document.getElementById('imagenDiscoA').value = num;
    document.getElementById('imagenDiscoA').href =audios[num].dataset.url;
    document.getElementById('imagenDisco').src = "resources/musica/disco"+num+".png";
    document.getElementById('botonPausa').src="resources/reproductor/pausa.png";
  }
  else{
    audios[num].currentTime = 0;
  }
}

function pausar(){
  var boton=document.getElementById('botonPausa');
  num =  document.getElementById('imagenDiscoA').value;
  audios[num].pause();
  boton.src="resources/reproductor/play.png"
}

function cambiarVolumen(valor){
  //' 100%'
  if(valor>0){
    audios[num].volume = valor/100;
    if(valor==100){
      document.getElementById('numeroVolumen').innerHTML="&nbsp;"+valor+"%";
    }
    else if(valor>=10){
      document.getElementById('numeroVolumen').innerHTML="&nbsp;&nbsp"+valor+"%";
    }
    else{
      document.getElementById('numeroVolumen').innerHTML="&nbsp;&nbsp;&nbsp;"+valor+"%";
    }
    return;
  }
    audios[num].volume = 0;
    document.getElementById('numeroVolumen').innerHTML="&nbsp;&nbsp;&nbsp;0%";
}

function irAlSegundo(segundo){
  num =  document.getElementById('imagenDiscoA').value;
  if(segundo == 0){
    audios[num].currentTime = 0;
    return;
  }
  var duracion = audios[num].duration/100;
  audios[num].currentTime = duracion*segundo;
  
}

var sellos= 89; //Estupido javascript no sabe contar ficheros
var contenedorSellos = document.getElementById("divSellos");
for(var i=1;i<=sellos;i++){
    contenedorSellos.innerHTML = contenedorSellos.innerHTML+"<img class=sello src=resources/sellos/"+i+".gif>";
}

chequeos();
async function chequeos(){

  var rangoDuracion = document.getElementById('rangoDuracion');
  var tiempoActual = document.getElementById('tiempoActual');
  num =  document.getElementById('imagenDiscoA').value;

  if(num === undefined){
    setTimeout(chequeos, 300);
    return;
  }

  var segundos = audios[num].currentTime;
  if(audios[num].currentTime == 0){
    var minutos = 0;
    var segundos = 0;
  }
  else{
    var minutos = Math.floor(audios[num].currentTime/60);
    var segundos = Math.floor(audios[num].currentTime%60);
  }
  if(minutos<10){
    minutos = "0"+minutos;
  }
  if(segundos<10){
    segundos = "0"+segundos;
  }
  tiempoActual.innerHTML = minutos+":"+segundos;

  // document.cookie = num+";"+audios[num].currentTime+";";
  // if(audios[num].paused){
  //   document.cookie = document.cookie+"T;"
  // }
  // else{
  //   document.cookie = document.cookie+"F;"
  // }

  rangoDuracion.value=(audios[num].currentTime/audios[num].duration)*100;

  setTimeout(chequeos, 300);
}
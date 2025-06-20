let peces = document.getElementsByClassName("contenedor_pez");
let pez_gay = document.getElementById("contenedor_gay");
let pez_mov = false;
let modal = document.getElementById("modal");
let modal_actual = 0;
let tiempo = 300;
document.getElementById('cuerpo_modal').setAttribute("style","height:"+(modal.clientHeight-document.getElementById("barra_modal").clientHeight-35)+"px");

posInicial(pez_gay);
pez_gay.addEventListener("mousemove",huir);


pecesStart();
kelpStart();
modalHide();
modalShow(6);

function pecesStart(){
    for (let i = 0; i < peces.length; i++) {
        posInicial(peces[i]);
        setTimeout(targetPez,Math.random() * (1000 - 100) +100,peces[i]);
    }    
}

function posInicial(pez){
    //Math.random() * (max - min) + min + "px";
    pez.style.left = (Math.random() * (80 - 15) +15) + "%";
    pez.style.top = (Math.random() * (200-10) + 10) + "px";
    if(pez.style.left <=50){
    //está a la izquierda
    pez.childNodes[1].style.transform = "scaleX(-1)";
    }
}

function moverPez(pez, target_x,target_y,speed){

    let pos_x = parseFloat(pez.style.left.split(".")[0]);
    let pos_y = parseFloat(pez.style.top);
    let distancia_x = target_x - pos_x;
    let distancia_y = target_y - pos_y;
    let suma_x = 0;
    let suma_y = 0;

    if(Math.abs(distancia_x) < 2 && Math.abs(distancia_y) < 10){
        //terminado el movimiento, busca otro
        setTimeout(targetPez,Math.random() * (100 - 20) +20,pez);
    }
    else {
        pos_x = parseFloat(pez.style.left.split(".")[0]);
        pos_y = parseFloat(pez.style.top);
        distancia_x = target_x - pos_x;
        distancia_y = target_y - pos_y;

        suma_x = parseFloat(pez.style.left) +(distancia_x/100);
        suma_y = parseFloat(pez.style.top) + (distancia_y/100);

        pez.style.left = suma_x + "%";
        pez.style.top = suma_y + "px";

        let ran = parseInt((Math.random() * 80 ));
        if(parseInt(ran) == 26){
            targetPez(pez);
            return;
        }
        else{
            setTimeout(moverPez,speed,pez,target_x,target_y,speed);
        }
    }

}

function targetPez(pez){

    let pez_x =0;

    if(parseInt(pez.style.left) < 50){
        //está a la izquierda
        pez.childNodes[1].style.transform = "scaleX(-1)";
        pez_x = (Math.random() * (90 - 80) +80);
    }
    else{
        pez.childNodes[1].style.transform = "scaleX(1)";
        pez_x = (Math.random() * (20 - 15) +15);
    }

    let pez_y = Math.random() * 290;

    moverPez(pez,pez_x, pez_y,Math.random() * (20 - 10) +10);
}

//funciones del pez especial

function huir(){

    if(pez_mov){
        return;
    }
    pez_mov = true;

    pez=document.getElementById("contenedor_gay");
    
    let pez_x =0;

    if(parseInt(pez.style.left) < 50){
        pez_x = (Math.random() * (80 - 50) +50);
    }
    else{
        pez_x = (Math.random() * (50 - 15) +15);
    }

    let pez_y = Math.random() * (230-40) + 40;

    // pez.style.left = pez_x + "%";
    // pez.style.top = pez_y + "px";

    moverPezGay(pez,pez_x, pez_y,1);
}

function moverPezGay(pez,target_x, target_y,speed){
        let pos_x = parseFloat(pez.style.left.split(".")[0]);
    let pos_y = parseFloat(pez.style.top);
    let distancia_x = target_x - pos_x;
    let distancia_y = target_y - pos_y;
    let suma_x = 0;
    let suma_y = 0;

    if(Math.abs(distancia_x) < 2 && Math.abs(distancia_y) < 10){
        //terminado el movimiento, busca otro
        pez_mov = false;
    }
    else {
        pos_x = parseFloat(pez.style.left.split(".")[0]);
        pos_y = parseFloat(pez.style.top);
        distancia_x = target_x - pos_x;
        distancia_y = target_y - pos_y;

        suma_x = parseFloat(pez.style.left) + 10*(distancia_x/100);
        suma_y = parseFloat(pez.style.top) + 10*(distancia_y/100);

        pez.style.left = suma_x + "%";
        pez.style.top = suma_y + "px";

        setTimeout(moverPezGay,speed,pez,target_x,target_y,speed);
    }
}

//funciones de las algas

function kelpStart(){
    // <img src="../resources/peces/kelp1.gif" id="kelp_1" class="kelp" style="left:10%;">
    // <img src="../resources/peces/kelp2.gif" id="kelp_3" class="kelp" style="left:74%;">

    var c = document.getElementById("contenedor_kelp");

    for(var i=3;i<=67;i=i+(Math.random()*(10-4)+4)){
        if(Math.random()>=0.3){
            c.innerHTML = c.innerHTML+"<img src='../resources/peces/kelp1.gif' id='kelp_"+(i/3)+"' class='kelp' style='left:"+(10+i-3)+"%;'>";
        }
        else{
            c.innerHTML = c.innerHTML+"<img src='../resources/peces/kelp2.gif' id='kelp_"+(i/3)+"' class='kelp' style='left:"+(10+i-3)+"%;'>";
        }
    }
}

//Funciones del modal
function modalHide(){
    modal.style.visibility="hidden";
    modal.style.pointerEvents="none";
    document.getElementById("cuerpo_modal").innerHTML = "";
}

function modalShow(tipo){
    modalHide();
    modal.style.visibility="visible";
    modal.style.pointerEvents="all";
    switch(tipo) {
        case 0:
            document.getElementById("titulo_modal").innerHTML = "";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="";
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Mi área personal</h1>
            <p>Bienvenide a mi zona de hablar sobre cosas que me gustan, aquí puedes conocerme a través de mis intereses y tal vez llevarte alguna recomendación al respecto.</p>
                `;
            break;
        case 1:
            document.getElementById("titulo_modal").innerHTML = "";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="I believe in you";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1></h1>
            <p></p>
            </div>
                `;
            break;
        case 2:
            document.getElementById("titulo_modal").innerHTML = "Nacido en la época correcta";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="Do what you can with this one";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Tengo sueño</h1>
            <p>Es muy tarde pero tengo que mantenerme despierto hasta las 9</p>
            </div>
                `;
            break;
        case 3:
            document.getElementById("titulo_modal").innerHTML = "I love my silly little creatures";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="Don't give up on that";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Honestamente</h1>
            <p>Pokemon no me vuelve loco. Llevo ya unos cuantos años desconectado de la saga y aunque les tengo mucho cariño a los juegos viejos (hasta la 6a gen aprox) no creo que sea algo que me defina mucho.</p>
            <h1>Dicho esto</h1>
            <p>Pokemon ha superado los 1000 personajes diferentes y esto ha hecho que empiece a surgir la idea de que "todos son el favorito de alguien" y me parece una cosa muy cuca y muy mona. Me gusta saber el pokémon favorito de cada persona porque siempre da sorpresa o ternura, además, todo el mundo tiene un pokemon favorito y no hay opiniones erróneas!</p>
            <p>Cuando digo que me gusta pokemon no me refiero necesariamente a los juegos o al competitivo o al lore. Podría ser analfabeto y me gustaría exactamente lo mismo. Lo que me gusta son los bichines y lo majos que son, así que aquí te pongo mis 32 pokemon favoritos enfrentados en una competición por mi carño.
            <div id="bracket">
            </div>
            <center><button onclick=modalHide();modalShow(3); id=boton_shuffle>shuffle</button>
            <button  onclicK=bracketStart(); id=boton_run>run</button></center>
                `;
            bracketShuffle();
            break;
        case 4:
            document.getElementById("titulo_modal").innerHTML = "";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="I'm proud of you";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1></h1>
            <p></p>
                `;
            break;
        case 5:
            document.getElementById("titulo_modal").innerHTML = "";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="You are deserving of love";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1></h1>
            <p></p>
                `;
            break;
        case 6:
            document.getElementById("titulo_modal").innerHTML = "自動翻訳をご利用いただきありがとうございます";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="You deserve forgiveness";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <p>Hace unos años me encontré un slideshow de tiktok de recomendaciones de anime titulado <b>shows where girls get to be silly!! (no fanservice)</b> y creo que es la categoría que mejor define lo que me gusta, 
            aunque recientemente ha evolucionado a yuri, cosa que casi me destruye hace poco por motivos que verás en la sección de orgullo.
            
            </p>
                `;
            break;
        case 7:
            document.getElementById("titulo_modal").innerHTML = "Old man yells at cloud";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="Your feelings matter";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Cómo es que todo el mundo sabe hablar de música??</h1>
            <p>He escuchado música todos los días de mi vida desde que era un pimpollo, preferiría vivir sin piernas que vivir sin música, es una de las mejores cosas que tiene la vida y sin embargo odio hablar de ella.
            <br>
            ¿Por qué todo el mundo conoce y sabe diferenciar todos los géneros musicales? ¿En qué momento de la vida se aprende eso? Quiero escuchar música, no ponerme a estudiar nomenclaturas, gracias.
            <br><br>
            No me molesta que alguien piense que soy ignorante, tampoco sé diferenciar marcas de coche y soy incapaz de acordarme de los nombres de los actores, pero siempre me ha dado la impresión de que el gusto musical se usa como herramienta para valorar a una persona y eso sí que me fastidia, simplemente hay música que me gusta y música que no me gusta y la música y los gustos son conceptos abstractos difíciles de delimitar. No puedo definir mis gustos con etiquetas y un puñado de artistas y álbumes que me gustan.</p>

            <h1>Un puñado de artistas y álbumes que me gustan</h1>
            <p>Puedo intentarlo</p>



            <br><p>
            Modest Mouse<br>
            Cage The Elephant<br>
            Harley Poe<br>
            Chapell Roan<br>
            Paloma San Basilio<br>

            of Montreal<br>
            Will Wood<br>

            PRINCESS PRINCESS<br>
            Misha Panfilov
            
            

            </p>
                `;
            break;
        case 8:
            document.getElementById("titulo_modal").innerHTML = "HorchataWebDev";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="Press F10 for help";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Tengo una página web!</h1>
            <p>Como desarrollador web titulado que soy, tengo una página web personal que recoge todos mis proyectos e información sobre mi. Falta mucho para que esté terminada, pero me encantaría que le echaras un vistazo!</p>
            <div id="contenedor_iframe">
                <iframe id="web_personal" title="Inline Frame Example" width="98%" height="400px" src="../index.html"></iframe>
            </div>
                `;
            
            break;
        case 9:
            document.getElementById("titulo_modal").innerHTML = "";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="You are not a burden";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1></h1>
            <p></p>
                `;
            break;
        case 10:
            document.getElementById("titulo_modal").innerHTML = "";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="Murder is Ok";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide "+tipo;
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Here's a doozy!</h1>
            <p></p>
                `;
            break;
        case 99:
            document.getElementById("titulo_modal").innerHTML = "EH! FUERA DE AQUÍ!";
            document.getElementsByClassName("status-bar-field")[0].innerHTML="You horny dog";
            document.getElementsByClassName("status-bar-field")[1].innerHTML="Slide 69";
            document.getElementById("cuerpo_modal").innerHTML=`
            <h1>Algunas fotos personales mías</h1>
            <p>Wow has conseguido darle clic? O has usado un teléfono? Bueno, te felicito por tu perseverancia, por tu astucia o por pulsar f12. Lamentablemente lo de las nudes era una broma, no vas a conseguir verme sin ropa sin invitarme antes a unas copas. Pero para que no llores te voy a contar un secreto!<br><br></p>
            <p>Bajo el manto de la tierra y el océano infinito se extiende una superficie eterna a la que no llega la luz o la oscuridad y donde el ayer y el mañana son lo mismo.<br>Desciende hasta el punto más bajo, usa la fuerza de los perseguidores y encuentra el abismo blanco.</p>
            </div>
                `;
            break;
        default:
            document.getElementById("titulo_modal").innerHTML = tipo;
            document.getElementById("cuerpo_modal").innerHTML = "<p>Aquí habrá cosas sobre "+tipo+"</p>";
    }
    document.getElementsByClassName("status-bar-field")[2].innerHTML="CPU Usage: "+(Math.floor((Math.random() * (43 - 30 + 1) ) + 30))+"%";
    modal_actual = tipo;
}

async function bracketShuffle(){
    var retirar = document.getElementsByClassName("participante");
    for(var i=0;i<retirar.length;i++){
        retirar[i].remove();
    }

    var contenedor = document.getElementById("bracket");
    var participantes = [...Array(33).keys()];
    participantes.shift();
    shuffleArray(participantes);
    for(var i=0;i<participantes.length;i++){
        img_t = document.createElement('img');
        img_t.setAttribute("src","../resources/orbita/"+participantes[i]+".png");
        img_t.classList.add("participante");
        img_t.setAttribute("data-puesto",participantes[i]);
        if(i<(16)){
            // img_t.style="top:"+(10+(i*36))+"px;left:"+(-i*48)+"px;"
            img_t.style="top:"+(14+(i*31))+"px;left:"+(-i*42)+"px;"
        }
        else{
            img_t.style="top:"+(-28+((i-16)*31))+"px;left:"+(650-((i-16)*42))+"px;";
        }   
        contenedor.appendChild(img_t);
    }
    var winner = document.createElement("img");
    winner.setAttribute("id","winner");
    winner.setAttribute("src","../resources/orbita/1.png");
    contenedor.appendChild(winner);
    document.getElementById("winner").style.visibility="hidden";
}

function bracketStart(){
    //disable buttons
    var boton_run = document.getElementById("boton_run");
    var participantes = document.getElementsByClassName("participante");
    var shaved = Array.prototype.slice.call(participantes);
    boton_run.disabled=true;

    var shaved2 = ronda(participantes,0,0);
    shaved2 = ronda(shaved2,5,5);
    shaved2 = ronda(shaved2,16,16);
    var winner1;
    var winner2;

    if(parseInt(shaved2[0].dataset.puesto)<parseInt(shaved2[1].dataset.puesto)){
        //gana 0
        largo = parseInt(shaved2[0].style.left.slice(0, -2));
        largo = largo+58;
        shaved2[0].style = "left:"+largo+"px;top:47%;";
        winner1 = shaved2[0];
    }
    else{
        //gana 1
        largo = parseInt(shaved2[1].style.left.slice(0, -2));
        largo = largo+58;
        shaved2[1].style = "left:"+largo+"px;top:47%;";
        winner1 = shaved2[1];
    }
    if(parseInt(shaved2[2].dataset.puesto)<parseInt(shaved2[3].dataset.puesto)){
        //gana 2
        largo = parseInt(shaved2[2].style.left.slice(0, -2));
        largo = largo-67;
        shaved2[2].style = "left:"+largo+"px;top:39%;";
        winner2 = shaved2[2];
    }
    else{
        //gana 3
        largo = parseInt(shaved2[3].style.left.slice(0, -2));
        largo = largo-67;
        shaved2[3].style = "left:"+largo+"px;top:39%;";
        winner2 = shaved2[3];
    }
    document.getElementById("winner").style.visibility="visible";

}
function ronda(lista,offset_i,offset_d){
    var devolver = [];
    var ratio = 100/(lista.length/4)*0.95;
    for(var i=0;i<lista.length;i=i+2){
        //izquierda
        if(i<lista.length/2){
            //gana el primero
            if(parseInt(lista[i].dataset.puesto)<parseInt(lista[i+1].dataset.puesto)){
                //mover el sprite 15 pixeles hacia abajo y 80 hacia la derecha
                largo = parseInt(lista[i].style.left.slice(0, -2));
                alto = offset_i+6.5+((ratio*i)/2);
                largo = largo+73;
                lista[i].style = "left:"+largo+"px;top:"+alto+"%;";
                devolver.push(lista[i]);
            }
            //gana el siguiente
            else{
                //mover el sprite 15 pixeles hacia arriba y 80 hacia la derecha
                largo = parseInt(lista[i+1].style.left.slice(0, -2));
                alto = offset_i+6.5+((ratio*i)/2);

                largo = largo+73;

                lista[i+1].style = "left:"+largo+"px;top:"+alto+"%;";
                devolver.push(lista[i+1]);
            }
        }
        //derecha
        else{
            //gana el primero
            if(parseInt(lista[i].dataset.puesto)<parseInt(lista[i+1].dataset.puesto)){
                //mover el sprite 15 pixeles hacia abajo y 80 hacia la izquierda
                largo = parseInt(lista[i].style.left.slice(0, -2));
                alto = offset_d-2+((ratio*(i-(lista.length/2)))/2);

                largo = largo-68;

                lista[i].style = "left:"+largo+"px;top:"+alto+"%;";
                devolver.push(lista[i]);
            }
            //gana el siguiente
            else{
                //mover el sprite 15 pixeles hacia arriba y 80 hacia la izquierda
                largo = parseInt(lista[i+1].style.left.slice(0, -2));
                alto = offset_d-2+((ratio*(i-(lista.length/2)))/2);

                largo = largo-68;

                lista[i+1].style = "left:"+largo+"px;top:"+alto+"%;";
                devolver.push(lista[i+1]);
            }
        }
    }
    return devolver
}

function ronda2(lista){
    var devolver = [];
    for(var i=0;i<lista.length;i=i+2){
        //izquierda
        if(i<lista.length/2){
            
            //gana el primero
            if(parseInt(lista[i].dataset.puesto)<parseInt(lista[i+1].dataset.puesto)){
                //mover el sprite 15 pixeles hacia abajo y 80 hacia la derecha
                alto = parseInt(lista[i].style.top.slice(0, -2));
                largo = parseInt(lista[i].style.left.slice(0, -2));

                alto = alto+15;
                largo = largo+80;

                lista[i].style = "left:"+largo+"px;top:"+alto+"px;";
                devolver.push(lista[i+1]);
            }
            //gana el siguiente
            else{
                //mover el sprite 15 pixeles hacia arriba y 80 hacia la derecha

                alto = parseInt(lista[i+1].style.top.slice(0, -2));
                largo = parseInt(lista[i+1].style.left.slice(0, -2));

                alto = alto-11;
                largo = largo+80;

                lista[i+1].style = "left:"+largo+"px;top:"+alto+"px;";
                devolver.push(lista[i+1]);
            }
        }
        //derecha
        else{
            //gana el primero
            if(parseInt(lista[i].dataset.puesto)<parseInt(lista[i+1].dataset.puesto)){
                //mover el sprite 15 pixeles hacia abajo y 80 hacia la izquierda
                alto = parseInt(lista[i].style.top.slice(0, -2));
                largo = parseInt(lista[i].style.left.slice(0, -2));

                alto = alto+15;
                largo = largo-68;

                lista[i].style = "left:"+largo+"px;top:"+alto+"px;";
                devolver.push(lista[i+1]);
            }
            //gana el siguiente
            else{
                //mover el sprite 15 pixeles hacia arriba y 80 hacia la izquierda

                alto = parseInt(lista[i+1].style.top.slice(0, -2));
                largo = parseInt(lista[i+1].style.left.slice(0, -2));

                alto = alto-11;
                largo = largo-68;

                lista[i+1].style = "left:"+largo+"px;top:"+alto+"px;";
                devolver.push(lista[i+1]);
            }
        }
    }
    return devolver
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    boton_run.disabled=false;
}

window.onresize = function() {
    var suma = modal.clientHeight-document.getElementById("barra_modal").clientHeight-35;
    document.getElementById('cuerpo_modal').setAttribute("style","height:"+suma+"px");
}

window.onkeydown = function(k){
    if(modal_actual == 8 && k.key == "F10" && modal.style.visibility == "visible"){//cambiar a 4
        alert("Rescue personnel will arrive shortly to help you. Do not leave this area.");
        coords = [
        [4,8,10,12],
        [1,2,4,6,8,10,12,13,14],
        [4,6,8,12],
        [1,2,4,6,8,9,10,12,13,14],
        [4,8,9,10,12]
    ];
        for(var i=0;i<5;i++){
            for(var j=1;j<=15;j++){
                if(!coords[i].includes(j)){
                    console.log("i: "+i+" j: "+j);
                    div_t = document.createElement('div');
                    div_t.style="position: absolute;height: 3%;aspect-ratio: 1/1;z-index: -1;background-color: black;top:"+(35+(i*4))+"%;left:"+(20+(j*2))+"%;";
                    document.body.appendChild(div_t);
                }
            }
        }
    }
}
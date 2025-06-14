let peces = document.getElementsByClassName("contenedor_pez");
let pez_gay = document.getElementById("contenedor_gay");
let pez_mov = false;
let modal = document.getElementById("modal");

posInicial(pez_gay);
pez_gay.addEventListener("mousemove",huir);

//con timeout
pecesStart();
kelpStart();
modalHide();

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

        setTimeout(moverPez,speed,pez,target_x,target_y,speed);
    }
}

function targetPez(pez){

    let pez_x =0;

    if(parseInt(pez.style.left) < 50){
        //está a la izquierda
        pez.childNodes[1].style.transform = "scaleX(-1)";
        pez_x = (Math.random() * (80 - 50) +50);
    }
    else{
        pez.childNodes[1].style.transform = "scaleX(1)";
        pez_x = (Math.random() * (50 - 15) +15);
    }

    let pez_y = Math.random() * (275-40) + 40;

    moverPez(pez,pez_x, pez_y,Math.random() * (30 - 10) +10);
}

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

function modalHide(){
    modal.style.visibility="hidden";
    modal.style.pointerEvents="none";
    document.getElementById("cuerpo_modal").innerHTML = "";
}

function modalShow(tipo){
    console.log( modal.childNodes);
    modalHide();
    modal.style.visibility="visible";
    modal.style.pointerEvents="all";
    document.getElementById("titulo_modal").innerHTML = tipo;
    document.getElementById("cuerpo_modal").innerHTML = "<p>Aquí habrá cosas sobre "+tipo+"</p>";
}
















































//codigo para el funcionamiento de 1 pez

// pecesStart();

// function pecesStart(){
//     for (let i = 0; i < peces.length; i++) {
//         posInicial(peces[i]);
//         targetPez(peces[i]);
//     }    
// }


// function posInicial(pez){
//     //Math.random() * (max - min) + min + "px";
//     pez.style.left = (Math.random() * (80 - 15) +15) + "%";
//     pez.style.top = (Math.random() * (430-80) + 80) + "px";
//     if(pez.style.left <=50){
//     //está a la izquierda
//     pez.style.scale = -1;
//     }
// }

// function moverPez(pez, target_x,target_y){

//     let pos_x = parseFloat(pez.style.left.split(".")[0]);
//     let pos_y = parseFloat(pez.style.top);
//     let distancia_x = target_x - pos_x;
//     let distancia_y = target_y - pos_y;
//     let suma_x = 0;
//     let suma_y = 0;

//     id = setInterval(frame, 20);
//     console.log(id);

//     function frame() {
//         clearInterval(id-peces.length);
//         if(Math.abs(distancia_x) < 2 && Math.abs(distancia_y) < 10){
//             console.log("UEPA");
//             //terminado el movimiento, busca otro
//             clearInterval(id);
//             targetPez(pez);
//         }
//         else {
//             pos_x = parseFloat(pez.style.left.split(".")[0]);
//             pos_y = parseFloat(pez.style.top);
//             distancia_x = target_x - pos_x;
//             distancia_y = target_y - pos_y;

//             suma_x = parseFloat(pez.style.left) +(distancia_x/100);
//             suma_y = parseFloat(pez.style.top) + (distancia_y/100);

//             pez.style.left = suma_x + "%";
//             pez.style.top = suma_y + "px";
//         }
//     }
// }

// function targetPez(pez){

//     let pez_x =0;

//     if(parseInt(pez.style.left) < 50){
//         //está a la izquierda
//         pez.style.transform = "scaleX(-1)";
//         pez_x = (Math.random() * (80 - 50) +50);
//     }
//     else{
//         pez.style.transform = "scaleX(1)";
//         pez_x = (Math.random() * (50 - 15) +15);
//     }

//     let pez_y = Math.random() * (430-80) + 80;

//     console.log("Nuevas coords: "+pez_x+" "+pez_y);

//     moverPez(pez,pez_x, pez_y);
// }







// con objeto

// for (let i = 0; i < peces.length; i++) {
//     // posInicial(peces[i]);
//     // targetPez(peces[i]);
//     let pez1 = new pez();
//     pez1.id = peces[i].id;
// }    

// const pez = {
//   id: 0,
//   target_x: 0,
//   target_y: 0,
//   posInicial: function() {
//     //Math.random() * (max - min) + min + "px";
//     p = document.getElementById(this.id);
//     p.style.left = (Math.random() * (80 - 15) +15) + "%";
//     p.style.top = (Math.random() * (430-80) + 80) + "px";
//   },
//   targetPez: function(){
//     p = document.getElementById(this.id)
//     if(parseInt(p.style.left) < 50){
//         //está a la izquierda
//         p.style.transform = "scaleX(-1)";
//         this.target_x = (Math.random() * (80 - 50) +50);
//     }
//     else{
//         p.style.transform = "scaleX(1)";
//         this.target_x = (Math.random() * (50 - 15) +15);
//     }

//     this.target_y = Math.random() * (430-80) + 80;    
//   },
//   moverPez: function(){
//     p = document.getElementById(this.id);

//     let pos_x = parseFloat(p.style.left.split(".")[0]);
//     let pos_y = parseFloat(p.style.top);
//     let distancia_x = target_x - pos_x;
//     let distancia_y = target_y - pos_y;
//     let suma_x = 0;
//     let suma_y = 0;

//     id = setInterval(frame, 20);
//     console.log(id);

//     function frame() {
//         clearInterval(id-peces.length);
//         if(Math.abs(distancia_x) < 2 && Math.abs(distancia_y) < 10){
//             console.log("UEPA");
//             //terminado el movimiento, busca otro
//             clearInterval(id);
//             // targetPez(pez);
//         }
//         else {
//             pos_x = parseFloat(pez.style.left.split(".")[0]);
//             pos_y = parseFloat(pez.style.top);
//             distancia_x = target_x - pos_x;
//             distancia_y = target_y - pos_y;

//             suma_x = parseFloat(pez.style.left) +(distancia_x/100);
//             suma_y = parseFloat(pez.style.top) + (distancia_y/100);

//             pez.style.left = suma_x + "%";
//             pez.style.top = suma_y + "px";
//         }
//     }  
//   }
// };
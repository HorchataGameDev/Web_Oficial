// Make the DIV element draggable:
// dragElement(document.getElementById("mydiv"));

var cartas = document.getElementsByClassName("carta");
for(var i=0;i<cartas.length;i++){
    dragElement(cartas[i])
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    //Flip
    flip(this);
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }

  function flip(elemento){
    if(elemento.classList[0]=="flipable"){
        elemento.style.transform = 'scaleX(-1)';
        setTimeout(function(){
            elemento.style.backgroundColor = "white";
            elemento.style.backgroundImage = "None";
            elemento.style.transition = "transform 0";
            elemento.style.transform = 'scaleX(1)';
            elemento.style.top = (elemento.offsetTop - 244) + "px";
            elemento.style.left = (elemento.offsetLeft - 171) + "px";
            elemento.firstChild.style.display="initial";
        },50)
        elemento.classList.remove("flipable");
    }

  }
}
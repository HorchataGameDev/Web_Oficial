const caracteres = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz1234567890 ¿?¡!,.áéíóúÁÉÍÓÚüÜ-'%_".split('');
const max = caracteres.length-1;

var url = location.href;
var pin = parseInt(url.split("&pin=")[1]);
url = url.split("&pin=")[0];
var cargo = url.split("&cargo=")[1];
url = url.split("&cargo=")[0];
var nombre = url.split("nombre=")[1];

nombre = nombre.toLowerCase();
cargo = cargo.toLowerCase();

arr_nombre = nombre.split('');
arr_cargo = cargo.split('');

cod_nombre = "";
cod_cargo = "";

for(var i=0;i<arr_nombre.length;i++){
    cod_nombre = cod_nombre + arr_nombre[i].charCodeAt(0);
}

for(var i=0;i<arr_cargo.length;i++){
    cod_cargo = cod_cargo + arr_cargo[i].charCodeAt(0);
}
var computo = Math.floor(parseInt(cod_nombre)/parseInt(cod_cargo));
computo = computo * pin;

console.log(computo);

if(computo == 34775404){//cipher
    document.body.innerHTML="";
    document.title = "Que así sea";
    //cmd
}

console.log(encode("abc","esto|es|una|prueba|para|ver|una|cosa."));
console.log(decode("abc","o57z|p6|6yn|148onn|1m5l|8q3|7zl|ñ24m-"));

function encode(key,text){
    resultado = [];
    if(key.length<1){
        return 'no hay clave.';
    }
    if(text.length<1){
        return 'no hay texto.'
    }
    key = key.toLowerCase();
    key = key.split('');
    text = text.split('');
    var i = 0;
    for (var j =0;j<text.length;j++){
        var existe = false;
        for (var k=0;k<max;k++){
            if(text[j]==caracteres[k]){
                my_index = (k+(key[i].charCodeAt(0)%max))%max;
                i++
                i=i%key.length
                resultado.push(caracteres[my_index]);
                existe = true;
                break;
            }
        }
        if(!existe){
            resultado.push(text[j]); //ignora caracteres si no existen en la secuencia
        }
    }
    return resultado.join("");
}

function decode(key,text){
        resultado = [];
    if(key.length<1){
        return 'no hay clave.';
    }
    if(text.length<1){
        return 'no hay texto.'
    }
    key = key.toLowerCase();
    key = key.split('');
    text = text.split('');
    var i = 0;
    for (var j =0;j<text.length;j++){
        var existe = false;
        for (var k=0;k<max;k++){
            if(text[j]==caracteres[k]){
                my_index = (k-(key[i].charCodeAt(0)%max))%max;
                i++
                i=i%key.length
                resultado.push(caracteres[my_index]);
                existe = true;
                break;
            }
        }
        if(!existe){
            resultado.push(text[j]); //ignora caracteres si no existen en la secuencia
        }
    }
    return resultado.join("");
}
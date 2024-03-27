//encriptador---
//descencriptador---
//solo encripta vocales
// todo en lower case
//no se debe admitir caracteres especiales pero en el js se lo voy a pasar para evitar exeption
//2 variables globales encriptado, desencriptado que deben interactuar con los textareas o inputs
//maracar las funciones en codigo puro y los que interactuas con un color
//alert("control")


// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/****
 * Requisitos:
-Debe funcionar solo con letras minúsculas -------
-No deben ser utilizados letras con acentos ni caracteres especiales---------
-Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.
Por ejemplo: "gato" => "gaitober"   //  gaitober" => "gato"---

La página debe tener campos para-----
inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.
El resultado debe ser mostrado en la pantalla.
Extras:
Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones.
 * ** */
// ---------------------------------------------------------------------------------------------

//aqui llega la parte cuando se llama el texto del text area y lelga aca
var imagen = document.getElementById('01');

function decirHola() {
    // Obtener el elemento textarea por su ID
    var textArea = document.getElementById("01");
    
    // Agregar el texto "Hola Mundo" al contenido del textarea
    textArea.value = "Hola Mundo";
}

imagen.addEventListener('click', function() {
    // Aquí puedes colocar la acción que deseas que ocurra al hacer clic en la imagen
    alert('Haz hecho clic en la imagen');
    // Puedes ejecutar cualquier función, cambiar el contenido de la página, etc.
  });


//! Encriptador
function encriptador(){
    eliminar()
    var texto = document.getElementById("01").value.toLowerCase();

   // var texto=(document.getElementById("01")).toLowerCase()  //convierte todo en lowercase y cumplir las condiciones
    let ency=""

  
    for (var letra=0 ; letra< texto.length ;letra++){

        console.log(texto[letra])
        if (texto[letra]=="a"){
            ency=ency+"ai"
        }else if (texto[letra]=="e"){
            ency=ency+"enter"
        }else if (texto[letra]=="i"){
            ency=ency+"imes"
        }else if (texto[letra]=="o"){
            ency=ency+"ober"
        }else if (texto[letra]=="u"){
            ency=ency+"ufat"
        }else {
            ency=ency+texto[letra]
        }
    }

    //console.log(ency)
    var result = document.getElementById("02");
    result.value = ency;
    return ency  // esta debe ir al text area 2

}

//! Desncriptar

function descencriptador( ){
    eliminar()
    var ency = document.getElementById("01").value.toLowerCase();
   // let ency=delTextArea.toLowerCase() 
    let decy=""
    for (var i=0; i < ency.length;i++){
        //no le sumes todo el valor de i (ejemplo en el caso de ai debe ser solo +1) porque al dar la vuelta suma el valor faltante
        if ((ency[i]+ency[i+1])=="ai"){
            decy=decy+"a"
            i=i+1
        }else if (ency[i]+ency[i+1]+ency[i+2]+ency[i+3]+ency[i+4]=="enter"){
            decy=decy+"e"
            i=i+4
        }else if (ency[i]+ency[i+1]+ency[i+2]+ency[i+3]=="imes"){
            decy=decy+"i"
            i=i+3
        }else if (ency[i]+ency[i+1]+ency[i+2]+ency[i+3]=="ober"){
            decy=decy+"o"
            i=i+3
        }else if (ency[i]+ency[i+1]+ency[i+2]+ency[i+3]=="ufat"){
            decy=decy+"u"
            i=i+3
        }else {
            decy=decy+ency[i]
        }
    }
    //console.log(decy)
    var result = document.getElementById("02");
    result.value = decy;
    return decy  // esta debe ir al text area 2

}


//eliminar
function eliminar(){
    
    const imagen = document.querySelector('.overlay-image');
    imagen.style.display = 'none';

}

function borrar() {
    // Borrar el texto del campo de entrada cuando se hace clic
    var result = document.getElementById("01");
    result.value = "";
}











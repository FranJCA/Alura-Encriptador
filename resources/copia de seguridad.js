//encriptador
//descencriptador
//solo encripta vocales
// todo en lower case
//no se debe admitir caracteres especiales pero en el js se lo voy a pasar para evitar exeption
//2 variables globales encriptado, desencriptado que deben interactuar con los textareas o inputs
//maracar las funciones en codigo puro y los que interactuas con un color



// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"
// ---------------------------------------------------------------------------------------------

//aqui va la parte en que lee el text are
var texto="aeiouffff"
let ency=""

//encriptador 
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

console.log(ency)

let decy=""

ency="fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
//desncriptar
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
console.log(decy)
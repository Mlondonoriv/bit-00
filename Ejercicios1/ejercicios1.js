"use strict";




// Ejercicio 1 - leer nombre y apellido, y saludar por nombre y apellido

// let nombre = prompt("Por favor ingresa tu nombre");
// let apellido = prompt("Por favor ingresa tu  apellido");
// let edad = prompt("ingresa tu edad");

let rol = prompt("cual es tu rol ?");

let resp = rol;

switch(resp){

    case "admin":
    document.write("acceso"," ",resp)
    break;

    case "ventas":
        document.write ("acceso"," ",resp);
        break;

        case "cliente":
            document.write("acceso"," ",resp)

            default:
            document.write("rol no valido")

}

// if (parseInt(edad) >= 18){

// document.write("eres mayor de edad")

// }
// else if(parseInt(edad) < 18){

//     document.write("eres menor de edad")
// }

// document.write( "hola"," ", nombre, " ", apellido );

// let confirmar = confirm( "deseas continuar?");

// if(confirmar === true){
// document.write(" ","bienvenida")}

// else if(confirmar === false){
//     document.write(" ","chao")}

// let numero = prompt("ingresa un numero");

// document.write("el doble de este numero es igual a"," ",(numero * 2));
// document.write("el triple de este numero es igual a"," ",(numero * 3));
// document.write("la mitad de este numero es igual a"," ",(numero / 2));
// document.write("la tercera parte  de este numero es igual a"," ",(numero * 3));
// document.write("el cuadrado de este numero es igual a"," ",(numero ** 2));

// let numero1 = prompt("imgrese un numero")
// let numero2 = prompt("ingrese segundo numero")

// if(numero1 > 0){
//     document.write("el numero  es positivo", "    ")

// }
// else if(numero1 === "0"){
//     document.write("el numero  es 0", "    ")
// }
// else if(numero1 < 0){
//     document.write("el numero  es negativo", "    ")
// }

// if(numero1%2 != 0){
//     document.write("el numero"," ",numero1," ", "es impar", "    " )
// }
// else{
// document.write("el numero"," ",numero1," ", "es par", "    ")
// }

// if(numero1 > numero2){
//     document.write("el numero mayor es ", " ", numero1)
// }
// else{
//     document.write("el numero mayor es ", " ", numero2)
// }




// ========================================================== EJERCICIO 1 ======================================================

const $getForm1 = document.querySelector("#get_form1");
const $getForm2 = document.querySelector("#get_form2");
const $getForm3 = document.querySelector("#get_form3");
const $btnHola = document.querySelector("#btnHola");

function saludar() {
  $getForm1.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let getName = document.querySelector("#get_name").value || 0;
  let getLastName = document.querySelector("#get_lastName").value || 0;
  if (getName !== 0 && getLastName !== 0 ) {
    let addSalute = document.querySelector("#add_salute");
    addSalute.innerHTML = ` hola  ${getName} ${getLastName}`;
  } else {
    alert("valor ingresado no valido ");
  }
}

// =========================================================== EJERCICIO 2 =======================================================
$getForm2.addEventListener(`submit`, (event) => {
  event.preventDefault();
});
function hola() {
  let cont = document.querySelector("#continuar");
  cont.innerHTML = `Hola, Bienvenido`;
}
function adios() {
  let cont = document.querySelector("#continuar");
  cont.innerHTML = `Chao, que vuelvas pronto`;
}
//   ======================================================== EJERCICIO 3 =======================================================

function plus18() {
  $getForm3.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let getName3 = document.querySelector("#get_name3").value || 0;
  let getAge = document.querySelector("#get_age").value || 0;
  getAge.value = parseInt(getAge);

  if (getName3 !== 0 ) {
    if (getAge >= 18) {
      let mayor_menor = document.querySelector("#mayor_menor");
      mayor_menor.innerHTML = ` hola  ${getName3} eres mayor de edad`;
    } else {
      let mayor_menor = document.querySelector("#mayor_menor");
      mayor_menor.innerHTML = ` hola  ${getName3} eres menor de edad`;
    }
  } else {
    alert("Error, revisa los campos ingresados  ");
  }
}


//   ======================================================== EJERCICIO 4 =======================================================

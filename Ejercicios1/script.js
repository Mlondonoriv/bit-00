// ========================================================== EJERCICIO 1 ======================================================
const d = document;
const $getForm1 = d.querySelector("#get_form1");
const $getForm2 = d.querySelector("#get_form2");
const $getForm3 = d.querySelector("#get_form3");
const $getForm4 = d.querySelector("#get_form4");
const $getForm5 = d.querySelector("#get_form5");
const $getForm6 = d.querySelector("#get_form6");
const $btnHola = d.querySelector("#btnHola");

function saludar() {
  $getForm1.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let getName = d.querySelector("#get_name").value || 0;
  let getLastName = d.querySelector("#get_lastName").value || 0;
  if (getName !== 0 && getLastName !== 0) {
    let addSalute = d.querySelector("#add_salute");
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
  let cont = d.querySelector("#continuar");
  cont.innerHTML = `Hola, Bienvenido`;
}
function adios() {
  let cont = d.querySelector("#continuar");
  cont.innerHTML = `Chao, que vuelvas pronto`;
}
//   ======================================================== EJERCICIO 3 =======================================================

function plus18() {
  $getForm3.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let getName3 = d.querySelector("#get_name3").value || 0;
  let getAge = d.querySelector("#get_age").value || 0;
  getAge.value = parseInt(getAge);

  if (getName3 !== 0) {
    if (getAge >= 18) {
      let mayor_menor = d.querySelector("#mayor_menor");
      mayor_menor.innerHTML = ` hola  ${getName3} eres mayor de edad`;
    } else {
      let mayor_menor = d.querySelector("#mayor_menor");
      mayor_menor.innerHTML = ` hola  ${getName3} eres menor de edad`;
    }
  } else {
    alert("Error, revisa los campos ingresados  ");
  }
}

//   ======================================================== EJERCICIO 4 =======================================================

function rol() {
  $getForm4.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let newRol = d.getElementsByName("selection");
  console.log(newRol);
  for (i = 0; i < newRol.length; i++) {
    if (newRol[i].checked) {
      // alert(newRol[i].value)
      let addRol = d.getElementById("addRol");
      addRol.innerHTML = ` Acceso Autorizado para: ${newRol[i].value}`;
    }
  }
}

//   ======================================================== EJERCICIO 5 =======================================================

function calc() {
  $getForm5.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let num = d.querySelector("#newNumber").value || 0;
  console.log(num);

  let addNum = d.querySelector("#addNum");
  addNum.innerHTML = ` El doble de  ${num} es : ${num * 2}`;

  let divNum = d.querySelector("#divNum");
  divNum.innerHTML = ` La mitad de  ${num} es : ${num / 2}`;

  let posNeg = d.querySelector("#posNeg");
  if (num < 0) {
    posNeg.innerHTML = `El número ${num} es negativo`;
  } else if (num == 0) {
    posNeg.innerHTML = `El número ${num} es Cero`;
  } else if (num > 0) {
    posNeg.innerHTML = `El número ${num} es Positivo`;
  }

  let evenOdd = d.querySelector("#evenORodd");

  if (num % 2 === 0) {
    evenOdd.innerHTML = ` El número  ${num} es Par`;
  } else {
    evenOdd.innerHTML = ` El número  ${num} es Impar`;
  }
}

//   ======================================================== EJERCICIO 5 =======================================================

function operations() {
  $getForm6.addEventListener(`submit`, (event) => {
    event.preventDefault();
  });

  let num1 = d.querySelector("#num1").value || 0;
  num1 = parseInt(num1);
  let num2 = d.querySelector("#num2").value || 0;
  num2 = parseInt(num2);

  let suma = num1 + num2;
  let resta = num1 - num2;
  let mult = num1 * num2;
  let div = num1 / num2;
  let resto = num1 % num2;

  let sumaOp = d.querySelector("#suma");
  let restaOp = d.querySelector("#resta");
  let multOp = d.querySelector("#mult");
  let divOp = d.querySelector("#div");
  let restOp = d.querySelector("#resto");

  sumaOp.innerHTML = `La operacion de ${num1} + ${num2} = ${suma}`;
  restaOp.innerHTML = `La operacion de ${num1} - ${num2} = ${resta}`;
  multOp.innerHTML = `La operacion de ${num1} x ${num2} = ${mult}`;
  divOp.innerHTML = `La operacion de ${num1} / ${num2} = ${div}`;
  restOp.innerHTML = `La operacion de ${num1} % ${num2} = ${resto}`;
}

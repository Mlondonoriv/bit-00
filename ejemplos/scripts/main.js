"use strict";

import {
  getAdd,
  getSubstract,
  getMultiply,
  getDivide,
  getModule,
  getExponent,
} from "./functions";
// leer dos numeros mostrar operacions basicas
// console.log('prueba');

const d = document;

const $firstNumber = d.getElementById("firstNumber");
const $secondNumber = d.getElementById("secondNumber");
const $basicOperationsForm = d.getElementById("basicOperationsForm");
const $basicOperationsResults = d.getElementById("basicOperationsResults");0

const operands = {
  num1: null,
  num2: null,
};

let $li = d.createElement("li");

d.addEventListener("DOMContentLoaded", () => {
  eventListeners();

  // console.log('listo');
});

//basic operation results
function eventListeners() {
  $basicOperationsForm.addEventListener("submit", (event) => {
    event.preventDefault(); //evita que se recargue la pagina
    $basicOperationsResults.innerHTML = `<li class="list-group-item active" >10 + 100</li>`;
  
const add = getAdd(operands.num1, operands.num2);
$basicOperationsResults.innerHTML = `<li class="list-group-item active" >${operands.num1} +
 ${operands.num2} = ${add}</li>`

const Substract = getSubstract (operands.num1, operands.num2)
const  Multiply = getMultiply(operands.num1, operands.num2)
const  Divide = getDivide(operands.num1, operands.num2)
const  Module = getModule(operands.num1, operands.num2)
const  Exponent = getExponent(operands.num1, operands.num2)




});
  $firstNumber.addEventListener("input", (event) => {
    operands.num1 = event.target.valueAsNumber;
  });
  $secondNumber.addEventListener("input", (event) => {
    operands.num2 = event.target.valueAsNumber;
  });
}



function getFormatedResult(){
    
}
//<li class="list-group-item active" >Operaciones Básicas</li>

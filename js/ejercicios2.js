
// async function consumirApi(){
//     try {
//         let respuesta = await fetch('https://random-d.uk/api/v2/random');
//         respuesta = await respuesta.json();
//         console.log(respuesta);
        
//     } catch (error) {
//         console.log('error');
        
        
//     }
// }


const $btn = document.querySelector('button');
const $img = document.querySelector('img');

$btn.addEventListener('click', obtenerDato);

async function obtenerDato() {
  try {
    let respuesta = await fetch('https://random-d.uk/api/v2/random');
    respuesta = await respuesta.json();
    $img.setAttribute('src', respuesta.url);
  } catch (error) {
    console.log(error);
  }
}
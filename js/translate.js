export function trasleterNumber() {
  //crando elemento html
  const trasleterForm = document.createElement("div");
  //agregando cualquier atributo como el id:
  trasleterForm.setAttribute("id", "input-trasleter");
  //nodo al body
  const body = document.body;
  //hagregando el elemento creado dentro del padre
  body.appendChild(trasleterForm);

  trasleterForm.innerHTML = `
  <form action=# id="js-input-trasleter">
    <label for="text">Text:</label>
    <input
      id="js-inputtrasleter"
      type="text"
      name="text"
      placeholder="escrive aqui..."
    />
  </form>
  <div class="list-container" id="value-container"></div>
    `;
  // añade el elemento creado y su contenido al DOM
  //body.insertBefore(trasleterForm);

  const jsInputValue = document.querySelector("#js-input-trasleter");

  jsInputValue.addEventListener("submit", (event) => {
    event.preventDefault();
    const inputValueTrasleter = document.querySelector("#js-inputtrasleter");
    const containerInputValue = document.querySelector("#value-container");
    let contNewValue = inputValueTrasleter.value;
    containerInputValue.innerHTML = `<span class="task-container">${contNewValue}</span>`;
    inputValueTrasleter.value = "";
    console.log("hola");
  });
  /*stilos css */
  //container
  let divContainer = document.querySelector("#input-trasleter");
  //trasleterForm.setAttribute("style", "border: 2px solid red;padding: 5px;");
  trasleterForm.setAttribute(
    "style",
    "width:500px; height:500px; border-radius:14px; font-family:Verdana,Geneva,Tahoma,sans-serif; background-color:#e77b77; margin-top:100px; display:grid;justify-content:center;place-items:center;"
  );
  jsInputValue.setAttribute(
    "style",
    "width: 400px;margin: 45px auto;text-align: center;"
  );
  let inputValueCss = document.querySelector("#js-inputtrasleter");
  inputValueCss.setAttribute(
    "style",
    "width: 310px;background-color: var(--orange);color: var(--white);border-style: none;font-size: 1.5em;"
  );
}

/*Crear un codificador  de palabras*/

/*Ejercisios para trabajar con array,
  1- crear un alfabeto 
  2-Crear un traductor de letras a numeros y alreves*/

  /*El metodo split(), transforma un string en un array,split("tamaño",cantidad de pociciones que 
  quieres que tenga el array) */

  //Alfabeto
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n',
    'o','p','q','r','s','t','u','v','w','x','y','z'
  ];

  //Displey o lugar donde de resivira el taexto a traducir
  let display = 'hola';


  //combersor de palabras array
  let textLetters = display.split('');


  let trasleter = [];

   textLetters.forEach((element)=>trasleter.push(alphabet.indexOf(element)));
  let imprimeirTrsleter = trasleter.toString();
  
  console.log(imprimeirTrsleter);

  //Operacion contarria combertir numeros en texto

  let displayNumber = '7,14,11,0';
  //14 18 21 0 11 3 14
//crear una funcion que buscara la cantiadad de caracteres 
//para luego craer un array a partir del texto
/*function textToArray(text){
  let textLength = text.length;
  let straingToArray = straingLength.split('',textLength);

  console.log(straingToArray);
}
textToArray(displayNumber);*/
//let textLength = displayNumber.length;
let textArray = displayNumber.split(',');

let numbertTrasleter = [];

textArray.forEach((element)=>numbertTrasleter.push(alphabet[element]));
let numberTrsleter = numbertTrasleter.join('');
console.log(numberTrsleter);
 
//Section trasleterHtml 
/*export function trasleter(){
  const trasleterHtml = document.createElement("section");
  const body = document.body;
  trasleterHtml.innerHTML = `
  <h2 id:'trasleter-title'>Trasleter</h2>
<p id:'trasleter-instruction'>Create a message encoder, the encoder must choose words that will be changed to numbers, simultaneously encrypting and hiding the message.</p>
<div id:'trasleter-number'>
  <div id:'trasleter-container-text'>
    <div id:'trasleter-text-number'>Text</div> 
    <input type="text"  placeholder="write a word...">>   
  </div>
  <button id:'trasleter-change'>change</button>
  <div id:'trasleter-container-number'>
    <div id:'trasleter-number-texr'>Number</div>
    <input type="text"  placeholder="write the numbers...">>   
  </div>
</div>`;
  body.appendChild(trasleterHtml);
}*/

/*
export let trasleterHTML = `
<section id:"trasleter">
<h2 id:'trasleter-title'>Trasleter</h2>
<p id:'trasleter-instruction'>Create a message encoder, the encoder must choose words that will be changed to numbers, simultaneously encrypting and hiding the message.</p>
<div id:'trasleter-number'>
  <div id:'trasleter-container-text'>
    <div id:'trasleter-text-number'>Text</div> 
    <input type="text"  placeholder="write a word...">>   
  </div>
  <button id:'trasleter-change'>change</button>
  <div id:'trasleter-container-number'>
    <div id:'trasleter-number-texr'>Number</div>
    <input type="text"  placeholder="write the numbers...">>   
  </div>
</div>
</section>`;*/



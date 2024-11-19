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

/*
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
</section>*/
export const text = "export";
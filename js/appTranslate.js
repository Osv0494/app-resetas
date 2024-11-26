export function appTranslater(){
    const TranslaterHtml = document.createElement("section");
    const body = document.body;
    TranslaterHtml.innerHTML=`
    <h2 id:'trasleter-title'>Trasleter</h2>
    <p id:'trasleter-instruction'>Create a message encoder, the encoder must choose words that will be changed to numbers, simultaneously encrypting and hiding the message.</p>
    <div class:'trasleter-number'>
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
    body.appendChild(TranslaterHtml);
}
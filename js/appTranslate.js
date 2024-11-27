export function appTranslater(){
    const TranslaterHtml = document.createElement("section");
    const body = document.body;
    TranslaterHtml.innerHTML=`
        <h2 class="trasleter-title">Trasleter</h2>
    <div class="trasleter-number">
      <div class="trasleter-container">
        <label class="trasleter-label" for="Text">Text</label>
        <input type="text" class="trasleter-number-texr" id="text" name="Text"  placeholder="write a word..."/>
      </div>
      <button class="trasleter-change">change</button>
      <div class="trasleter-container">
        <label class="trasleter-label" for="number">Number</label>
        <input type="text" class="trasleter-number-texr" id="number" name="number"  placeholder="write the numbers...">   
      </div>
    </div>`;
    body.appendChild(TranslaterHtml);
}
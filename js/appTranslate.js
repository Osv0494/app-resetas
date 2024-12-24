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
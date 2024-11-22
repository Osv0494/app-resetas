export function footer() {
    const footerHTML = document.createElement("footer");
    const body = document.querySelector("body");
    footerHTML.innerHTML = `<p>
      <p>Clase prcatica de JS con Carlos de <a href="https://youtu.be/lduIpYA66mM">Punto JSON</a></p>    
      </p>`;
  
    body.appendChild(footerHTML);
  };

    /*Footer
    footer {
        width: 100%;
        text-align: center;
        box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.104);
        margin-top: auto;
      }
    */


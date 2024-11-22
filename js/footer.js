export function footer() {
    const footerHTML = document.createElement("footer");
    const body = document.querySelector("body");
    footerHTML.innerHTML = `<p>
      <p>Clase prcatica de JS con Carlos de <a href="https://youtu.be/lduIpYA66mM">Punto JSON</a></p>    
      </p>`;
  
    body.appendChild(footerHTML);
  }
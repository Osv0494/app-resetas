export function footer() {
    const footerHTML = document.createElement("footer");
    const body = document.querySelector("body");
    footerHTML.innerHTML = `<p>
      This site is created in an educational way to reaffirm the knowledge of web development of HTML CSS JS. Created by  <a href="https://osv0494.github.io/">Osvaldo Paz</a></p>
      <style>
        footer {
          width: 100%;
          height: 100px;
          text-align: center;
          box-shadow: 0 -3px 5px rgba(0, 0, 0, 0.104);
          margin-top: auto;
          background-color: antiquewhite;
        }
      </style>`;
    body.appendChild(footerHTML);
  };


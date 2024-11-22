/*Todo el codigo HTML sera escrito desde js*/
import { trasleter } from "./translate.js";
import { footer } from "./footer.js";
const bodyHtml = document.body;
const midudev = "https://youtu.be/YLvT1ELnaX4?si=v2FtQdXzr_HQhP0P";

bodyHtml.innerHTML = ` 
<header>menu</header>
<h1 id:'title'>
  Learning JavaScript with 
    <a href=${midudev}>Midudev</a>
</h1>`;
trasleter();
footer();
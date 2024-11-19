import {text} from "./translate.js";
/*Todo el codigo HTML sera escrito desde js*/
console.log(text);
/*Escriviendo codigo html desde js */
//const app = document.getElementById("root");
const bodyHtml = document.body;
const midudev = 'https://youtu.be/YLvT1ELnaX4?si=v2FtQdXzr_HQhP0P';

bodyHtml.innerHTML = ` 
<header>menu</header>
<h1 id:'title'>
  Learning JavaScript with 
    <a href=${midudev}>Midudev</a>
</h1>
<footer>
  This is an educational program to learn html js react with 
    <a href=${midudev}>Midudev</a></h1>
</footer>
`;

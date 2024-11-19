//console.log('hola osvaldo vienvenido a javaScrip');
/*Comemtarios */
/*Variables de tipo var: soy muy poco utilizada se pueden modifiacr tanto dentro como fuera de {dentro de funcon or objetos} */
var water = 'h2o';
/*Variables  let "name var" = asignar valor este tipo de variable se le puede cambiar o modificar su valor*/
let kitchen = 'It is the place where we will prepare the food';
//console.log(kitchen);
/*varuables de tipo constante or const 'name const" = asignar valor; este tipo de variablaes solo puede recivir un valor 
el cual no se podra cambiar ni modificar.*/
const Stove = 'tool used to cook food on fire';
//console.log(Stove)
/*Dentro de las variables puedes guardar de todo tipo de informacion */

//ovejatodos y arrays

/*Los objetos al igual que las variables podemos guardar informacion y distintos tipos de datos en un mismo objeto
inclulllendo los array,los objetos p[ueden mutar o cambiar y modificarce desde furara o acceder a elementos en especificos dentro de ellos
los array: guardan solo en solo tipo de datos,o solo numero,string exetera.*/
const object = {
    var1: 1,
    var2: 'string',
    cvar3 : false,
    var4 : ['numver','string','boooliano','null','undefine'],
};
/*Los arrays son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un array son variables. Dado que la longitud de un array puede cambiar en cualquier momento*/
const array = ['a','b','c','d','e','f'];

/*Todos los metodos de los array */

/*Los metodos de los array son funciones predeterminadas para los array, estas sirven para 
agregar,recorer, numerar elementos dentro de los array */

/*Metodos .length
 nos debuelve el tamaño del array en nuemero */
let arrayLength = array.length;

/*puedes acceder a todos los elementos dentro del array con nombre del array.[0-... numero o pocicion del elementosiempre empezando desde 0] */
let arrayElemnetSelect = array[0];

/*Recorrer un Array con forEach 
El método forEach() ejecuta la función predeterminada indicada una vez por cada elemento del array.*/
function arrayForEach(arrayName){
    arrayName.forEach((element) => console.log(element))
};
//arrayForEach(array);

/*Imprimiendo el contenido y pocision de un array con un colback */
function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
  }
//array.forEach(logArrayElements)

/*Añadir un elemento al final de un Array */

/*Meteodo push: añade uno o varios elemnetos al final de un array */
array.push('g','h','i','j','k');

/*Le metodo pop elimina el ultimo elemento de un array */
array.push('elemento eliminado con pop');
array.pop();

/*unshift()   añadir un elemento al principio de un Array */
array.unshift('elemento para borrar con sheftr');

/*shift() eliminar el primer elemento de un Array */
array.shift();

/*indexOf Encontrar el índice de un elemento del Array */
let arrayIndexof = array.indexOf('a');
//console.log(arrayIndexof);

/*  .splice( , )
Eliminar un único o varios a la elemento a la ves mediante su posición, tambien puedes hacer una 
copia del array*/
array.push('este elemnto sera eliminado con splice');
array.push('l','m','n');
//encontar elemento a eliminar
let buscandoElementoEliminar = array.indexOf('este elemnto sera eliminado con splice');
array.splice(buscandoElementoEliminar)

/*Copiar un Array */
let ArrayCopy = array;
//console.log(ArrayCopy);



/*El metodo concat ayudara a concatenear cualquier elemento a un array si que el array tenga que mutar
puedes pasarle mas de aun array */
let arrayConcat = array.concat(['l','m','n']);

/*Funciones: las funciones recibiran parametros que van dentro de () realizaran la operacion
que quieras para debolver algo */

const numbers = [0,1,2,3,4,5,6,7,8,9,];

function suamar(a,b){
  return a + b
}
 //console.log(suamar(numbers[2],numbers[4]));

 /*Función Callback:Una función de callback es una función que se pasa a otra función como un argumento, que luego
  se invoca dentro de la función externa para completar algún tipo de rutina o acción. */

  
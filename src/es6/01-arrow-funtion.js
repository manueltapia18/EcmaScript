function square(num) {
  return num*num
};

const squares = num => num*num;


// string

let hello = "hello";
let wolrd = "world";
let epicPhrase = hello + "" + wolrd + "!";

console.log(epicPhrase);

// template literals

let epicPhrase2 =  `${hello} ${wolrd}!`

console.log(epicPhrase2);

// multi-line strings

let lorem = "esto es un string \n" + "esto es otra linea";

let lorem2 = `esta es una frase epica
la continuacion de esa frase epica`;

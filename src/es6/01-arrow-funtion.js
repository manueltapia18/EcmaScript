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

// String

// se pueden colocar valores por defecto en los parametros para evitar el || or

/*function newUser(name , age, country) {
  var name = name || "Oscar";
  var age = age || 32;
  var country = country || "Co";
}
console.log(newUser());

function newAdmin(name="manuel", age =30, country = "colombia") {
  
}*/

// desectructurando
//array

let fruit = ["apple","banana"];
let [a,b] = fruit;
console.log(a,fruit[1]);

// objeto

let user = {username: "manuel",age:29};
let {username,age} = user;

// spread operator

let person = {name:"Esteban",age:28 };
let country = "colombia";

let data = {id: 1,...person, country};

//object literal

function newuser(user,age,country,uid) {
  return {
    user,
    age,
    country,
    id:uid
  }
}

console.log(newuser("manuel",18,"col",1));


//promesas

const anotherFuntion = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("hey!!")
    } else {
      reject("whooops");
    }
  })
}

anotherFuntion()
  .then(Response => console.log(Response))
  .catch(err => console.log(err));


  //clases

  class User {};

  const newUser = new User();


  class user1 {
    greeting(){
      return "hello";
    }
  };

  const mnts = new user1();
  console.log((mnts.greeting()));
  const bebeloper = new user1()
  console.log(bebeloper.greeting());

  // constructor

  class user2 {
    //constructor
    constructor(){
      console.log("nuevo usuario");
    }
    greeting(){
      return "hola"
    }
  }


  const david = new user2();




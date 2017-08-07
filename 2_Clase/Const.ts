/*Ha sido añadido en ES6/TypeScript permitiendonos añadir variables inmutables también conocidas como constantes. El uso de const es una buena práctica de manteniemiento y legibilidad. Las constantes deben ser declaradas y asignadas siempre.*/
const fooo = 123;
//fooo = 456; NO PERMITIDO

//Las constantes también admiten objetos literales como por ejemplo:
const foooo = { bar:123 };
//foooo = { bar: 456}; ERROR no se permite la modificación del objeto

/*
Pero si se puede modificar el contenido de las variables que contiene el objeto literal, ejemplo:
*/
const fooo2 = {bar:123};
fooo2.bar = 456; //PERMITIDO
console.log(fooo2); //{ bar:456 }
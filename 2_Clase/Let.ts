/*En javascript hay dos formas de declarar variables: var y let, var no tiene un ámbito de bloque mientras que let sí */

//var
var foo = 123;
if(true){
    var foo = 456;
}
console.log(foo);//456

//let
let foo2 = 123;
if(true){
    let foo = 456;
}
console.log(foo); //123
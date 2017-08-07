/*
For in es una caracteristica que ya tenia javascript y no ha sido mejorada en TypeScript mediante la cual puedes acceder y recorrer los objetos y arrays y obtener tanto los indices como los valores
*/
//For in accediendo al índice de una variable dentro de un objeto

let list = { a:1, b:2, c:3 };
for ( let i in list ){
    console.log(i); // a, b, c
}
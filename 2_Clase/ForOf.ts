/*
For of es una característica nueva de ES6 con la cual puedes acceder y recorrer arrays y strings obteniendo su valor, es decir no puede recorrer objetos en el caso de que estos fueron creadas por clases que implementan Symbol. iterator.for...of también tiene un peor rendimiento en comparación con el for...in ya que al compilarlo a JS crea más variables y hace más comprobaciones.
*/
let list2 = ["a","b","c"];
for(let b of list2){
    console.log(b); // a,b,c
}
//Genericos
/* Plantillas de código */
function echo(arg:number):number{
    return arg;
}

/*Supongamos que queremos tener esa misma función para strings */
function echo2<T>(arg:T):T{
    return arg;
}
let a = echo2<number>(1);
let b = echo2<string>('hola');
/* 
    ó
let a = echo2(1);
let b = echo2('hola');
*/
console.log(a,b);

/*Se pueden definir distintos tipos genericos */

function echo3<T,U>(arg:T, arg2:U):U{
    return arg2;
}
let c = echo3(1,"string");

/* Se pueden pasar instancias */
class Human{

}

function echo4<T,U>(arg:T,arg2:U):T{
    return arg;
}

let man = new Human();

let d = echo4(man,"string");
let e = echo4("string",man);

/*Podría dar un error 

function echo<T>(arg:T):T{
    console.log(arg.length); Porque no todos los tipos poseen
    el método length
    return arg;
}
*/

function echo5<T>(arg:Array<T>):Array<T>{
    console.log(arg.length);
    return arg;
}

let f = echo5([1,2]);

/*SOLUCIÓN 
Esta sería una forma de implementar o añadir restricciones a genericos creando una interfaz 
*/

interface withLength{
    length: number;
}
//El tipo tiene que implementar la interfaz
function echo6<T extends withLength>(arg: T){
    console.log(arg.length);
    return arg;
}

let g = echo6([1,2]);

/*Clase Generica */
class Generic<T>{
    add:(x:T,y:T)=>T;
}
let myGeneric = new Generic<number>();
myGeneric.add = function (x,y){ return x + y };

let myGenericString = new Generic<string>();
myGenericString.add = function (x,y){ return x + y };


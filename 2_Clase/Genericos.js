//Genericos
/* Plantillas de código */
function echo(arg) {
    return arg;
}
/*Supongamos que queremos tener esa misma función para strings */
function echo2(arg) {
    return arg;
}
var a = echo2(1);
var b = echo2('hola');
/*
    ó
let a = echo2(1);
let b = echo2('hola');
*/
console.log(a, b);
/*Se pueden definir distintos tipos genericos */
function echo3(arg, arg2) {
    return arg2;
}
var c = echo3(1, "string");
/* Se pueden pasar instancias */
var Human = (function () {
    function Human() {
    }
    return Human;
}());
function echo4(arg, arg2) {
    return arg;
}
var man = new Human();
var d = echo4(man, "string");
var e = echo4("string", man);
/*Podría dar un error

function echo<T>(arg:T):T{
    console.log(arg.length); Porque no todos los tipos poseen
    el método length
    return arg;
}
*/
function echo5(arg) {
    console.log(arg.length);
    return arg;
}
var f = echo5([1, 2]);
//El tipo tiene que implementar la interfaz
function echo6(arg) {
    console.log(arg.length);
    return arg;
}
var g = echo6([1, 2]);
/*Clase Generica */
var Generic = (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
myGeneric.add = function (x, y) { return x + y; };
var myGenericString = new Generic();
myGenericString.add = function (x, y) { return x + y; };
//# sourceMappingURL=Genericos.js.map
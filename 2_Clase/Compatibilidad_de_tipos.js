var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p;
p = new Person();
/*Tipos de unión */
function padLeft(value, padding) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
}
padLeft("hello", 1);
function getAnimal() {
    var a;
    return a;
}
/*Solo tendría el método de la unión */
var pet = getAnimal();
pet.layEggs();
if (pet.swim) {
    pet.swim();
}
else if (pet.fly) {
    pet.fly();
}
//# sourceMappingURL=Compatibilidad_de_tipos.js.map
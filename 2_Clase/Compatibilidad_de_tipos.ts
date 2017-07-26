/*
Esta básada en el tipado estructural eso significa que un tipo es compatible con otro si tiene al menos los mismo campos
*/
interface Named{
    name:string;
}

class Person{
    name:string;
}

let p : Named;

p = new Person();

/*Tipos de unión */
function padLeft(value:string, padding:string | number){
    if ( typeof padding === "number" ){
        return Array (padding + 1).join(" ")+ value;
    }
    if(typeof padding === "string"){
        return padding + value;
    }
}

padLeft("hello",1);

interface Bird{
    fly();
    layEggs();
}

interface Fish{
    swim();
    layEggs();
}

function getAnimal (): Fish | Bird{
    var a : Fish;
    return a;
}
/*Solo tendría el método de la unión */
let pet = getAnimal();
pet.layEggs();

if((<Fish>pet).swim){
    (<Fish>pet).swim();
}else if ((<Bird>pet).fly){
    (<Bird>pet).fly();
}
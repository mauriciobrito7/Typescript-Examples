/*Las funciones fat arrow se utilizan para:
*/
//Omitir la palabra function
var inc = (x)=>{
    x+1;
}

//Para capturar el this ya que en javascript se pierde muy rapidanmente el contexto de this como por ejemplo en la siguiente situación:
function Persona(age){
    this.age = age;
    //ejecutandola en el navegador el this es window ya que es quien hace la llamada
    this.growOld = function(){
        this.age++;
    }
}

var person = new Persona(1);

setTimeout(person.growOld, 1000); //Debería incrementar
setTimeout(function(){
    console.log(person.age);
}, 2000);
//Devuelve 1, debería ser 2
/*
Esto es debido a que el this que ejecuta la función growOld en javascript es window y no Persona. Si utilazaramos una function con fat arrow función estaría haciendo el trabajo correctamente.
*/

function Persona2(age){
    this.age = age;
    //Aquí el this es el objeto y no quien hace la llamada
    this.growOld = () =>{
        this.age++;
    }
}

var person2 =  new Persona2(2);
setTimeout(person2.growOld,1000);
setTimeout(function(){
console.log(person2.age);
},1000)

//Para capturar argumentos ¿Cuándo es necesario utilizar una fat arrow? Es necesario utilizarla cuando la función va ha ser llamada por otra clase o por otro método de la siguiente forma:

var growOld = person2.growOld;
//¿Cómo utilizar funciones con herencia?
/*
En caso de que quieras sobreescribir una función de la clase padre siempre deberemos realizar una copia de este, por ejemplo:
*/
class Adder{
    //This function is now safe to pass around
    add = (b:string):string =>{
        return b;
    }
}

class ExtendedAdder extends Adder{
    //Create a copy of parent before creating our own
    private superAdd = this.add;
    //Now create our override
    add = (b:string): string =>{
        return this.superAdd(b);
    }
}

//Cadenas de fat arrow (currying)
/*Es una seria de funciones encadenas el uso es simple y es el siguiente: */

//A curried function
let add = (x:number) =>(y:number)=> x+y;
//Simple usage
add(123)(456);

//partially applied
let add123 = add(123);

//fully apply the function
add123(456);
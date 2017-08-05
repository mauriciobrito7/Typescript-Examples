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
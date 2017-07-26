class Animal{

}

class Snake extends Animal{

}

class Rhino extends Animal{
    
}

class Elephant extends Animal{
    
}
/* Aqui el compilador intuye que x es de tipo Rhino por ser el primero 
let x = [ new Rhino(), new Snake(), new Elephant() ]; */

/* Con la notación de tipo nos especifica que es de tipo Animal */
let x: Animal[] = [new Rhino(), new Elephant(), new Snake()];

/* Como objeto */
let y = {Rhino: new Rhino(), Elephant:new Elephant(),Snake: new Snake() };
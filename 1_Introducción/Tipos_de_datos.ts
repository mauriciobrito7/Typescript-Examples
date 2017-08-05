/*Tipos primitivos */
var a:number;
var b:string;
var c:boolean;
var d:any;

/*Listas */
var e: Array<number> = [1,2,3,4,5];
/*Tuplas */
var f: [number,string] = [0,'Hola'];

/*Enumerables */
enum color{
    Red, Green
};

/* Funciones con tipos*/
function g():number{
    return 9;
}

let h ;
const i = 5;

/*Interface*/
interface Tool{
    toolType: string;
    color:string;
}

class Paint implements Tool{
    toolType:string = 'Pencil';
    color:string = 'red';
}

class Draw{
    toolType:string = 'Hand';
    color:string = 'blue';
}

class Write{
    toolType:string = 'Pen';
    color:string = 'green';
}

/*Clases */

class Human{
    public name: string;
    constructor(name:string){
        this.name = name;
    }
}

class Man extends Human{
    constructor(name:string){
        super(name);
    }
}

var men = new Man('Pepe');
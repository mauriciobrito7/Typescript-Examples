var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*Cosas básicas */
var a;
var b;
var c;
var d;
/*Listas */
var e = [1, 2, 3, 4, 5];
/*Tuplas */
var f = [0, 'Hola'];
/*Enumerables */
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Green"] = 1] = "Green";
})(color || (color = {}));
;
/* Funciones con tipos*/
function g() {
    return 9;
}
var h;
var i = 5;
var Paint = (function () {
    function Paint() {
        this.toolType = 'Pencil';
        this.color = 'red';
    }
    return Paint;
}());
var Draw = (function () {
    function Draw() {
        this.toolType = 'Hand';
        this.color = 'blue';
    }
    return Draw;
}());
var Write = (function () {
    function Write() {
        this.toolType = 'Pen';
        this.color = 'green';
    }
    return Write;
}());
/*Clases */
var Human = (function () {
    function Human(name) {
        this.name = name;
    }
    return Human;
}());
var Men = (function (_super) {
    __extends(Men, _super);
    function Men(name) {
        return _super.call(this, name) || this;
    }
    return Men;
}(Human));
var men = new Men('Pepe');

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
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Snake;
}(Animal));
var Rhino = (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Rhino;
}(Animal));
var Elephant = (function (_super) {
    __extends(Elephant, _super);
    function Elephant() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Elephant;
}(Animal));
/* Aqui el compilador intuye que x es de tipo Rhino por ser el primero
let x = [ new Rhino(), new Snake(), new Elephant() ]; */
/* Con la notación de tipo nos especifica que es de tipo Animal */
var x = [new Rhino(), new Elephant(), new Snake()];
/* Como objeto */
var y = { Rhino: new Rhino(), Elephant: new Elephant(), Snake: new Snake() };
//# sourceMappingURL=Inferencia_de_tipos.js.map
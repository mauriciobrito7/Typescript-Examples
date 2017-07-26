/*
Nos pérmite difinir constantes númericas
*/
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var i = Direction.Up;
var FileAcces;
(function (FileAcces) {
    //constant members
    FileAcces[FileAcces["None"] = 0] = "None";
    FileAcces[FileAcces["Read"] = 2] = "Read";
    FileAcces[FileAcces["Write"] = 4] = "Write";
    FileAcces[FileAcces["ReadWrite"] = 6] = "ReadWrite";
    //computed member
    FileAcces[FileAcces["G"] = "123".length] = "G";
})(FileAcces || (FileAcces = {}));
var j = [FileAcces.None, FileAcces.Read];
//# sourceMappingURL=Enum.js.map
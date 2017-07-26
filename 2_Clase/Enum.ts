/*
Nos pérmite difinir constantes númericas
*/

enum Direction{
    Up=1,
    Down,
    Left,
    Right
}
let i = Direction.Up;

enum FileAcces{
    //constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    //computed member
    G = "123".length
}

var j = [FileAcces.None, FileAcces.Read];
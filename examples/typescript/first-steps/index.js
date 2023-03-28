//let srt = "Hola" // js -> inferencia de tipos ó coerción implicita
var str = "Hola";
var cedula = 5234235235; // unión 
var hello = function (name, age) {
    if (age === void 0) { age = 1; }
    return "Hola soy ".concat(name, " y tengo ").concat(age, " a\u00F1os");
};
console.log(hello('Jhon Doe', 33));

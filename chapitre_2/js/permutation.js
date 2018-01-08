var nombre1 = 5;
var nombre2 = 3;

a = nombre1;
b = nombre2;
nombre1 = b;
nombre2 = a;

console.log(nombre1); // Doit afficher 3
console.log(nombre2); // Doit afficher 5

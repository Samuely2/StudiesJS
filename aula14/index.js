let num1 = 1.32424324324; // number
let num2 = 2.5; //number

//console.log(num1.toString() + um2); // convertendo temporiamente
//num1 = num1.toString();
//console.log(num.toString(2));
//console.log(num1.toFixed(4)); // mostra quantas casas decimais vai ter o número
//console.log(number.isInteger(num1)) // mostra se o número é inteiro, vai retornar verdadeiro ou faslo
//let temp = num1 * 'Ola'; 
//console.log(number.isNaN(temp)); // se for verdadeiro, no caso se não for um numero retornar NaN (NotaNumber)

// padrão IEE 754-2008
num1 += num2; //0.8
num1 += num2; //0.9
num1 += num2; //1.0
num1 += num2; //1.1

num1 = parseFloat(num1.toFixed(2));

num1 = ((num1 * 100) + (num2 * 100)) / 100;  // fazendo com essa fórmula



console.log(Number.isInteger(num1));
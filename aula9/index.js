// ECMAScript
var nome = 'Luiz';
var nome = 'Samuel';

nome = 'joao' // não faça isso, porque ai cria uma variável global podendo afetar outras variáveis do sistema
console.log(nome);


// Com var é possível redaclarar o valor da variável com let não.


//  Tipos de dados primitivos

const nome = 'Samuel'; // string é um tipo de dado primitivo
const sobrenome = 'Vinicius'
const num = 10; // number
const num1 = 12.32; // number
let nomeAluno; //Valor undefined, recebe valor pelo o motor do javascript porém não foi inicializado, não aponta pra local nenhum na memória
let sobrenomeAluno = null; // Não aponta pra local nenhum da memória também
const boolean = true; // só tem duas possibilidades de valores, true ou false.

console.log(typeof sobrenomeAluno, sobrenomeAluno); // para ver o tipo da variável - valor da variável

// esses são os dados primitivos, são strings/number/undefined/null/boolean/symbol

let a = 2;
const b = a;
console.log(a, b) // 2, 2

a = 3;
console.log(a, b) // 3, 2
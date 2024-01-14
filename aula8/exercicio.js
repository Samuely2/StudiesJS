/* 
Samuel vinicius tem 20 anos, pesa 76 kg
Tem 1.78 de altura e seu IMC é de 25.92592592592924
Samuel Vinicius nasceu em 2003
*/

const nome = 'Samuel'
const sobrenome = 'Vinicius';
const idade = 20;
const peso = 76;
const altura = 1.78;
let imc; // peso / (altura * altura)
let anoNascimento;

console.log(nome, sobrenome ,'tem', idade, 'anos', 'pesa,', peso, 'kg', 'tem', altura, 'e seu IMC é de', (peso / (altura * altura), nome, sobrenome, 'nasceu em', (anoNascimento = 2024 - 2003)));

// template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem, ${alturaEmCm}, de ${altura} e seu IMC é de, ${(peso / (altura * altura))}`);

console.log(`${nome} nasceu em ${(anoNascimento = 2024 - 2003)}`);

let varA = 'A'; // B
let varB = 'B'; //C
let varC = 'C'; //A

let subA = varA;
let subC = varC;
let subB = varB;


varA = subB;
varB = subC;
varC = subA;

// ou também mais simples

[varA, varB, varC] = [varB, varC, varA]



















console.log(varA, varB, varC);
~~~js
              123456  
const nome = 'Samuel'
                0           1
const alunos = ['Samuel', 'João', true, null]; // sempre bom manter um array com um tipo de dado

// Para acessar 
console.log(nome[0])


// alterando o array
alunos[0] = 'Samuel'

// para ver o tamanhod o array, adiciona no fim
console.log(alunos.length); 

// colocando um elemento no final do array
alunos.push('Samuel');

// adicionando no começo do array
alunos.unshift('Samuel');

// excluindo o elemento do final do array
alunos.pop();
const removido = alunos.pop();

// excluindo o elemento do começo do array
alunos.shift()
const removido . alunos.shift()

//fatiamento, pegando do elemento 0 até o elemento 2.
// Se eu quero do elemento 0 até o elemento 2, tem que colocar até o 3.
console.log(alunos.slice(0, 3)); 

// Para acessar os elementos excluindo os 2 ultimos
console.log(alunos.slice(0, -2));

// Para ver se o objeto é uma instância de array
console.log(alunos instanceof Array);
~~~

- Ao excluir um elemento do índice, os outros não vão mudar de posição, o Javascript cria um valor padrão para coisas que não existem

## Criando a variável sem inicializar ela

~~~js
let nome; // Só declarou a variável
console.log(nome) // Ela tem um valor que indica pro javascript que essa variável não tem um valor, esse valor se chama undefined
~~~

## Inicializando a variável
~~~js
nome = 'Qualquer valor';
console.log(nome)
nome = 'Otavio';
console.log(nome)
~~~  

- Ela varia de valor, mas redaclarar a variável não pode porque irá dar erro no código porque já foi declarado

- Não se pode criar variáveis também com palavras reservadas
- As variáveis precisam ter nomes significados também 
- Não pode começar o nome de uma variável com número
- Não podem conter espaços ou traços
- Utilizamos camel-case

As variáveis são Case-sensitive

~~~js

let nomeCliente = 'Luiz';
let nomecliente = 'Otávio';

~~~

Não podemos redaclarar a variável com let

- Não utilizar var, e sim utilizar let




                                                
const numero = Number(prompt('Digite um número')) // transformando string em number
const numeroTitulo = document.getElementById('numero-titulo') // window.document é o dom, e ali estamos manipulando o elemnto através do id, a variável numeroTitulo significa aquele e elemento
numeroTitulo.innerHTML = numero; 


texto.innerHTML += `<p>A raiz quadrada é:${Math.sqrt(numero)}. </p>`
texto.innerHTMLL += `<p> ${numero} É inteiro: ${Number.isInteger(numero)}. </p>`
texto.innerHTML += `<p>É NaN ${Number.isNaN(numero)}. </p>`
texto.innerHTML += `<p>Arrendondando para abaixo ${Math.floor(numero)}. </p>`
texto.innerHTML += `<p>Arrendondando para cima ${Math.ceil(numero)}. </p>`
texto.innerHTML += `<p>Com apenas duas casas decimais: ${numero.toFixed(2)}. </p>`


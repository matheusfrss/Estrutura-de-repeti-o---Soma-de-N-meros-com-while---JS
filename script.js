let soma = 0;

while (true) {
  let input = prompt("Digite um número (0 para sair):");
  let numero = Number(input);

  if (numero === 0) {
    break; // sai do loop quando o número é 0
  }

  if (!isNaN(numero)) {
    soma += numero; // adiciona o número à soma se for válido
  } else {
    alert("Por favor, digite um número válido.");
  }
}

console.log("A soma total dos números digitados é: " + soma);

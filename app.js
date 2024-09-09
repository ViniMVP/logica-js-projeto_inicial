alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativa;
let tentativas = 1;

// enquanto tentativa não for igual ao número secreto
while (tentativa != numeroSecreto) {
    tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // se tentativa for igual ao número secreto
    if (tentativa == numeroSecreto) {
       break;
    } else {
        if (tentativa > numeroSecreto) {
            alert(`O número secreto é menor que ${tentativa}`);
        } else {
            alert(`O número secreto é maior que ${tentativa}`);
        }
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns!! você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

// if (tentativas > 1) {
//    alert(`Parabéns!! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
// } else {
//    alert(`Parabéns!! você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
// }
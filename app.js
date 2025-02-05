alert("Seja bem vindo ao jogo do número secreto!");
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt("Escolha um número entre 1 e 30");

    if (chute == numeroSecreto) {
        break;
    }else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        }else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }    
}/*
if (tentativas > 1) {
    alert(`Parabéns! você conseguiu descobrir o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
}else{
    alert(`Parabéns! você conseguiu descobrir o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
}*/
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabéns! você conseguiu descobrir o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
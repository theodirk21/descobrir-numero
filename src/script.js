var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
  var elementoResultado = document.getElementById("resultado");
  var chute = parseInt(document.getElementById("valor").value);
  console.log(chute);
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = "Você acertou";
    //innerHtml é para imprimir na tela de visualização
    console.log("acertou");
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
  } else {
    elementoResultado.innerHTML =
      "Errou, o numero secreto era " + numeroSecreto;
  }
  // var precisa estar antes dos itens que a chamam
  // o = sozinho é para adicionar um valor a algo já o == é uma comparação
}

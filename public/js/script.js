//Declarando variáveis e DOM
const potenciaTotal = document.querySelector("#pTotal"),
  potenciaPainel = document.querySelector("#pPainel"),
  comprimentoModulo = document.querySelector("#comprimento"),
  larguraModulo = document.querySelector("#largura"),
  resultadoTotal = document.querySelector("#resultadoTotal"),
  resultadoPainel = document.querySelector("#resultadoPainel"),
  resultadoPlacas = document.querySelector("#resultadoPlacas"),
  resultadoInversores = document.querySelector("#qtdInversores"),
  resultadoComprimento = document.querySelector("#comprimentoTotal"),
  resultadoLargura = document.querySelector("#larguraTotal"),
  button = document.querySelector("#button"),
  buttonDuvida = document.querySelector("#button-duvida"),
  boxDuvida = document.querySelector(".box-duvida");

//Atribuir os valores para as variáveis ao clicar no botão
button.addEventListener("click", () => {
  const erroTotal = document.querySelector("#erroTotal");
  const erroPainel = document.querySelector("#erroPainel");
  const erroComprimento = document.querySelector("#erroComprimento");
  const erroLargura = document.querySelector("#erroLargura");

  //Se os valores não forem númericos, retornar uma mensagem de erro
  //var pTotal = 4.5
  var pTotal = potenciaTotal.value;
  isNaN(pTotal)
    ? (erroTotal.innerText = "Valor inválido! Digite um número válido!")
    : (erroTotal.innerText = "");

  //var pPainel = 550
  var pPainel = potenciaPainel.value;
  isNaN(pPainel)
    ? (erroPainel.innerText = "Valor inválido! Digite um número válido!")
    : (erroPainel.innerText = "");

  //var comprimento = 1.95
  var comprimento = comprimentoModulo.value;
  isNaN(comprimento)
    ? (erroComprimento.innerText = "Valor inválido! Digite um número válido!")
    : (erroComprimento.innerText = "");

  //var largura = 1.1
  var largura = larguraModulo.value;
  isNaN(largura)
    ? (erroLargura.innerText = "Valor inválido! Digite um número válido!")
    : (erroLargura.innerText = "");

  //Calculos e atribuição dos valores nas div de resposta
  resultadoTotal.innerText = `${pTotal}kW`;

  resultadoPainel.innerText = `${pPainel}W`;

  let qtdPlacas = Math.ceil((pTotal * 10 ** 3) / pPainel);
  resultadoPlacas.innerText = qtdPlacas;

  let qtdInversores = Math.ceil(qtdPlacas / 4);
  resultadoInversores.innerText = qtdInversores;

  let comprimentoTotal = comprimento * qtdPlacas;
  resultadoComprimento.innerText = `${comprimentoTotal}m`;

  let areaTotal = (comprimento * largura) * qtdPlacas;
  resultadoLargura.innerText = `${areaTotal.toFixed(2)}m²`;
});

buttonDuvida.addEventListener('click', () => {
  boxDuvida.classList.toggle('hidden')
  boxDuvida.classList.toggle('show')
})

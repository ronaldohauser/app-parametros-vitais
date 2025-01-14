function fecharPopup() {
  document.getElementById("popup").style.display = "none";
}

function calcularFrequencias() {
  const batimentos = document.getElementById("batimentos").value;
  const respiracoes = document.getElementById("respiracoes").value;
  const animal = document.getElementById("animal").value;

  if (batimentos && respiracoes) {
    const batimentosCardiaco = batimentos * 4;
    const respiracaoCardiaca = respiracoes * 4;

    document.getElementById("resultadoCardiaco").innerText = `Frequência cardíaca: ${batimentosCardiaco} bpm`;
    document.getElementById("resultadoRespiratorio").innerText = `Frequência respiratória: ${respiracaoCardiaca} mrpm`;

    if (animal === "cachorro") {
      if (batimentosCardiaco < 60 || batimentosCardiaco > 160) {
        document.getElementById("resultadoCardiaco").style.color = "red";
      } else {
        document.getElementById("resultadoCardiaco").style.color = "green";
      }
      if (respiracaoCardiaca < 18 || respiracaoCardiaca > 36) {
        document.getElementById("resultadoRespiratorio").style.color = "red";
      } else {
        document.getElementById("resultadoRespiratorio").style.color = "green";
      }
    } else {
      if (batimentosCardiaco < 120 || batimentosCardiaco > 240) {
        document.getElementById("resultadoCardiaco").style.color = "red";
      } else {
        document.getElementById("resultadoCardiaco").style.color = "green";
      }
      if (respiracaoCardiaca < 20 || respiracaoCardiaca > 240) {
        document.getElementById("resultadoRespiratorio").style.color = "red";
      } else {
        document.getElementById("resultadoRespiratorio").style.color = "green";
      }
    }
  } else {
    alert("Por favor, preencha todos os campos!");
  }
}

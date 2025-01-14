function fecharPopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  function calcularFrequencias() {
    const batimentos = parseInt(document.getElementById('batimentos').value);
    const respiracoes = parseInt(document.getElementById('respiracoes').value);
    const animal = document.getElementById('animal').value;
  
    if (isNaN(batimentos) || batimentos <= 0 || isNaN(respiracoes) || respiracoes <= 0) {
      document.getElementById('resultadoCardiaco').textContent = 'Por favor, insira valores válidos.';
      document.getElementById('resultadoRespiratorio').textContent = '';
      document.getElementById('resultadoCardiaco').className = 'result';
      document.getElementById('resultadoRespiratorio').className = 'result';
      return;
    }
  
    const frequenciaCardiaca = batimentos * 4;
    const frequenciaRespiratoria = respiracoes * 4;
  
    const resultadoCardiaco = verificarFrequenciaCardiaca(animal, frequenciaCardiaca);
    const resultadoRespiratorio = verificarFrequenciaRespiratoria(animal, frequenciaRespiratoria);
  
    const resultadoCardiacoDiv = document.getElementById('resultadoCardiaco');
    resultadoCardiacoDiv.textContent = `A frequência cardíaca é: ${frequenciaCardiaca} bpm. ${resultadoCardiaco.text}`;
    resultadoCardiacoDiv.className = `result ${resultadoCardiaco.class}`;
  
    const resultadoRespiratorioDiv = document.getElementById('resultadoRespiratorio');
    resultadoRespiratorioDiv.textContent = `A frequência respiratória é: ${frequenciaRespiratoria} mpm. ${resultadoRespiratorio.text}`;
    resultadoRespiratorioDiv.className = `result ${resultadoRespiratorio.class}`;
  }
  
  function verificarFrequenciaCardiaca(animal, frequencia) {
    if (animal === 'cachorro') {
      if (frequencia >= 60 && frequencia <= 160) {
        return { text: 'Esse resultado é considerado normal.', class: 'normal' };
      } else if (frequencia < 60) {
        return { text: 'Esse resultado é considerado abaixo do normal.', class: 'below' };
      } else {
        return { text: 'Esse resultado é considerado acima do normal.', class: 'above' };
      }
    } else {
      if (frequencia >= 120 && frequencia <= 240) {
        return { text: 'Esse resultado é considerado normal.', class: 'normal' };
      } else if (frequencia < 120) {
        return { text: 'Esse resultado é considerado abaixo do normal.', class: 'below' };
      } else {
        return { text: 'Esse resultado é considerado acima do normal.', class: 'above' };
      }
    }
  }
  
  function verificarFrequenciaRespiratoria(animal, frequencia) {
    if (animal === 'cachorro') {
      if (frequencia >= 18 && frequencia <= 36) {
        return { text: 'Esse resultado é considerado normal.', class: 'normal' };
      } else if (frequencia < 18) {
        return { text: 'Esse resultado é considerado abaixo do normal.', class: 'below' };
      } else {
        return { text: 'Esse resultado é considerado acima do normal.', class: 'above' };
      }
    } else {
      if (frequencia >= 20 && frequencia <= 240) {
        return { text: 'Esse resultado é considerado normal.', class: 'normal' };
      } else if (frequencia < 20) {
        return { text: 'Esse resultado é considerado abaixo do normal.', class: 'below' };
      } else {
        return { text: 'Esse resultado é considerado acima do normal.', class: 'above' };
      }
    }
  }
  
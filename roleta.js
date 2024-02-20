// Função para gerar um número aleatório entre min (inclusive) e max (inclusive)
function pegarnumeroaleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Função para verificar se já passou um dia
  function diapassado() {
    const lastDate = localStorage.getItem('lastDate');
    if (!lastDate) {
      return true;
    }
    const today = new Date();
    return today.toDateString() !== new Date(lastDate).toDateString();
  }
  
  // Número máximo e mínimo da roleta
  const minNumero = 1;
  const maxNumero = 16;
  
  // Se já passou um dia, gerar um novo número aleatório e armazenar a data atual
  if (diapassado()) {
    var numeroSorteado = pegarnumeroaleatorio(minNumero, maxNumero);
    localStorage.setItem('numeroSorteado', numeroSorteado);
    localStorage.setItem('lastDate', new Date());
  }
  
  // Exibir o número sorteado na página
  document.getElementById('numeroSorteado').textContent = localStorage.getItem('numeroSorteado');
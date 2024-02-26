fetch('poemas.json')
    .then(response => response.json())
    .then(data => {
        const idDesejado = parseInt(localStorage.getItem('numeroSorteado')); // Obtendo número sorteado
        const tituloElement = document.getElementById('Titulo');
        const artistaElement = document.getElementById('Artista');
        const anoElement = document.getElementById('Data');
        const poemaElement = document.getElementById('Poema');
        const poemaDesejado = data[idDesejado]; // Obtendo o objeto do poema com o ID desejado

        if (poemaDesejado) {
            // Preenchendo os elementos com os dados do JSON
            tituloElement.textContent = poemaDesejado.Titulo;
            artistaElement.textContent = "Artista: " + poemaDesejado.Artista;
            anoElement.textContent = "Data: " + poemaDesejado.Data;

            // Criando um elemento HTML para o poema
            const poemaHTML = document.createElement('div');
            poemaHTML.innerHTML = poemaDesejado.Poema.replace(/\n/g, '<br>'); // Substituindo \n por <br>

            // Adicionando o elemento HTML ao poemaElement
            poemaElement.innerHTML = ''; // Limpa qualquer conteúdo pré-existente
            poemaElement.appendChild(poemaHTML);
        }
    });
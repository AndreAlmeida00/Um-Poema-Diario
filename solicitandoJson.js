fetch('poemas.json')
    .then(response => response.json())
        .then (data => {
            const idDesejado = parseInt(localStorage.getItem('numeroSorteado')); // Obtendo número sorteado
            const tituloElement = document.getElementById('titulo');
            const artistaElement = document.getElementById('artista');
            const anoElement = document.getElementById('ano');
            const poemaElement = document.getElementById('poema');
            const poemaDesejado = data[idDesejado]; // Obtendo o objeto do poema com o ID desejado

        if (poemaDesejado) {
            // Preenchendo os elementos com os dados do JSON
            tituloElement.textContent = poemaDesejado.Titulo;
            artistaElement.textContent = "Artista: " + poemaDesejado.Artista;
            anoElement.textContent = "Ano: " + poemaDesejado.Ano;
            poemaElement.textContent = poemaDesejado.Poema;
        }})
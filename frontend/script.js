document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('createForm');
    const recipeList = document.getElementById('recipeList');

    function fetchReceitas() {
        fetch('http://localhost:3000/receita')
            .then(response => response.json())
            .then(data => {
                recipeList.innerHTML = '';
                data.forEach(receita => {
                    const li = document.createElement('li');
                    li.textContent = `${receita.nome} - Tempo: ${receita.tempoPreparo} min - Custo: R$${receita.custoAproximado}`;
                    recipeList.appendChild(li);
                });
            })
            .catch(error => console.error('Erro:', error));
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const tempoPreparo = document.getElementById('tempoPreparo').value;
        const custoAproximado = document.getElementById('custoAproximado').value;
        const ingredientes = document.getElementById('ingredientes').value.split(',').map(i => ({ nome: i.trim() }));

        const data = { nome, tempoPreparo, custoAproximado, ingredientes };

        fetch('http://localhost:3000/receita', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(() => {
            form.reset();
            fetchReceitas();
        })
        .catch(error => console.error('Erro:', error));
    });

    fetchReceitas();
});

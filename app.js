function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Pega o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado</p>";
        return;
    }

    // Converte o valor do campo de pesquisa para minúsculas
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let descricao = "";
    let titulo = "";
    let tag = "";

    // Itera sobre cada dado na lista de dados
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        // Verifica se o título ou a descrição inclui o termo pesquisado
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tag.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" >${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atualiza a seção de resultados com o conteúdo HTML gerado
    section.innerHTML = resultados;
    footer.classList.add("hidden");
}

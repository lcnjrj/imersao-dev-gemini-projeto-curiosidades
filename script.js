let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = []; // Armazena todos os dados do JSON

/**
 * Inicia a busca, carrega os dados se necessário e filtra o conteúdo.
 */
async function iniciarBusca() {
    // 1. CARREGAR DADOS (Apenas na primeira vez)
    if (dados.length === 0) {
        try {
            // Usa o nome do arquivo que você carregou
            let resposta = await fetch("data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            cardContainer.innerHTML = `<p style="text-align:center; color:red; padding:3rem;">❌ Erro ao carregar a base de dados (data.json). Verifique se o arquivo está na pasta correta.</p>`;
            return; 
        }
    }

    // 2. FILTRAGEM
    const termoBusca = campoBusca.value.toLowerCase();
    
    // CORREÇÃO: Agora busca nos campos novos (titulo, curiosidade, temas) e antigos (nome, descricao) para compatibilidade.
    const dadosFiltrados = dados.filter(dado => {
        // Se a busca estiver vazia, mostra todos os dados.
        if (termoBusca === "") return true;

        // Busca nos campos principais da curiosidade
        const tituloMatch = dado.titulo && dado.titulo.toLowerCase().includes(termoBusca);
        const curiosidadeMatch = dado.curiosidade && dado.curiosidade.toLowerCase().includes(termoBusca);
        
        // Adiciona a busca nos temas/tags (convertendo o array para string)
        const temasMatch = dado.temas && dado.temas.join(' ').toLowerCase().includes(termoBusca);

        // Retorna verdadeiro se encontrar o termo em qualquer um dos campos
        return tituloMatch || curiosidadeMatch || temasMatch;
    });

    // 3. RENDERIZAÇÃO
    renderizarCards(dadosFiltrados);
}

/**
 * Renderiza os cards na tela, usando as chaves do projeto de curiosidades.
 */
function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes

    if (dados.length === 0) {
         cardContainer.innerHTML = `
            <div style="text-align:center; color:var(--tertiary-color); padding:3rem;">
                <p>Nenhuma curiosidade encontrada para sua busca. 🙁</p>
                <p>Tente termos mais amplos, como: <strong>Linux, Música, Cinema, Programação...</strong></p>
            </div>
        `;
        return;
    }

    for (let dado of dados) {
        // Mapeamento das chaves do JSON para o Front-End
        const titulo = dado.titulo || dado.nome || 'Curiosidade Sem Título';
        const corpo = dado.curiosidade || dado.descricao || 'Conteúdo da curiosidade não encontrado.';
        const tags = dado.temas || dado.tags || []; // Pega 'temas' ou 'tags'
        const fonteInfo = dado.fonte_sugerida ? `Fonte: ${dado.fonte_sugerida}` : (dado.data_criacao ? `Ano: ${dado.data_criacao}` : '');
        
        // Formata as tags/temas em HTML (usa <span> para CSS)
        const tagsHtml = tags.map(tag => `<span>${tag}</span>`).join('');

        let article = document.createElement("article");
        article.classList.add("card");
        
        // Renderiza o card com as chaves de curiosidades
        article.innerHTML = `
            <h2>${titulo}</h2>
            <p>${corpo}</p>
            <div class="tags">${tagsHtml}</div>
            <p style="font-size:0.85rem; color: #a9a9a9;">${fonteInfo}</p>
        `;
        
        cardContainer.appendChild(article);
    }
}

// CORREÇÃO (UX): Garante que os cards sejam carregados na abertura da página.
window.onload = iniciarBusca;
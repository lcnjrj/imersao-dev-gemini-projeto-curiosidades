/*Busca Funcionando por palavras chave.  Data.json tem 47 entradas*/
let cardContainer = document.querySelector(".card-container");
let campoBusca = document.querySelector("header input");
let dados = []; // Armazena todos os dados do JSON

/**
 * 1. Carrega os dados do arquivo JSON uma única vez.
 */
async function carregarDados() {
    if (dados.length === 0) {
        try {
            // Usa o nome do arquivo que você carregou
            let resposta = await fetch("data.json");
            dados = await resposta.json();
            console.log(`Dados carregados: ${dados.length} itens.`);
        } catch (error) {
            console.error("Falha ao buscar dados:", error);
            cardContainer.innerHTML = `<p style="text-align:center; color:red; padding:3rem;">❌ Erro ao carregar a base de dados (data.json). Verifique o nome do arquivo.</p>`;
        }
    }
}

/**
 * 2. Inicia a busca, filtra o conteúdo e renderiza os cards.
 * É chamada pelo botão "Buscar".
 */
async function iniciarBusca() {
    await carregarDados(); // Garante que os dados estejam carregados

    const termoBusca = campoBusca.value.toLowerCase().trim();
    
    // CORREÇÃO: Se a busca estiver vazia, apenas exibe o prompt e interrompe.
    if (termoBusca === "") {
        renderizarPrompt();
        return;
    }

    // FILTRAGEM: Busca nos campos nome, descricao e, principalmente, nas tags
    const dadosFiltrados = dados.filter(dado => {
        // Se a busca não for vazia, procuramos o termo.
        
        // Busca no Título/Nome (compatível com JSON antigo)
        const nomeMatch = (dado.nome && dado.nome.toLowerCase().includes(termoBusca)) ||
                          (dado.titulo && dado.titulo.toLowerCase().includes(termoBusca));
        
        // Busca na Descrição/Curiosidade (compatível com JSON antigo)
        const descricaoMatch = (dado.descricao && dado.descricao.toLowerCase().includes(termoBusca)) ||
                               (dado.curiosidade && dado.curiosidade.toLowerCase().includes(termoBusca));
        
        // Busca nos TEMAS/TAGS (mais importante para o seu filtro)
        const tags = dado.tags || dado.temas || [];
        const tagsMatch = tags.join(' ').toLowerCase().includes(termoBusca);

        return nomeMatch || descricaoMatch || tagsMatch;
    });

    renderizarCards(dadosFiltrados);
}

/**
 * 3. Renderiza os cards na tela com base nos dados filtrados.
 */
function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards existentes

    if (dados.length === 0) {
        cardContainer.innerHTML = `
            <div style="text-align:center; color:var(--tertiary-color); padding:3rem;">
                <p>Nenhuma curiosidade encontrada para o termo: <strong>${campoBusca.value}</strong>. 🙁</p>
            </div>
        `;
        return;
    }

    for (let dado of dados) {
        // Mapeamento das chaves do JSON
        const titulo = dado.nome || dado.titulo || 'Curiosidade Sem Título';
        const corpo = dado.descricao || dado.curiosidade || 'Conteúdo da curiosidade não encontrado.';
        const tags = dado.tags || dado.temas || []; 
        const link = dado.link_oficial || dado.link || '#';
        const infoExtra = dado.data_criacao ? `Ano: ${dado.data_criacao}` : (dado.fonte_sugerida ? `Fonte: ${dado.fonte_sugerida}` : '');
        
        const tagsHtml = tags.map(tag => `<span>${tag}</span>`).join('');

        let article = document.createElement("article");
        article.classList.add("card");
        
        article.innerHTML = `
            <h2>${titulo}</h2>
            <p>${corpo}</p>
            <div class="tags">${tagsHtml}</div>
            <p style="font-size:0.85rem; color: #a9a9a9;">${infoExtra}</p>
            <a href="${link}" target="_blank">Saiba mais</a>
        `;
        
        cardContainer.appendChild(article);
    }
}

/**
 * Função utilitária para exibir a mensagem inicial de instrução.
 */
function renderizarPrompt() {
     cardContainer.innerHTML = `
        <div style="text-align:center; color:var(--tertiary-color); padding:3rem;">
            <p>🔍 Digite um termo de busca (Ex: **Linux**, **Cinema**, **Rock**) no campo acima e clique em **Buscar**.</p>
        </div>
    `;
}


// CORREÇÃO CRÍTICA: Na abertura da página, apenas carrega os dados e mostra o prompt.
window.onload = async () => {
    await carregarDados(); // Carrega os dados uma vez
    renderizarPrompt();   // Mostra a instrução, deixando a tela limpa
};
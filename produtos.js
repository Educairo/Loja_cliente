

const produtos = [
    {
        nome: "Conjunto",
        preco: 25.00,
        imagem: "img/peca.jpeg",
        vendido: false // Está disponível
    },
    {
        nome: "Conjunto",
        preco: 25.00,
        imagem: "img/peca2.jpeg",
        vendido: false
    },
    {
        nome: "Conjunto",
        preco: 25.00,
        imagem: "img/peca3.jpeg", 
        vendido: false 
    },
    {
        nome: "Conjunto",
        preco: 25.00,
        imagem: "img/peca4.jpeg", 
        vendido: false 
    },
    {
        nome: "Conjunto",
        preco: 25.00,
        imagem: "img/peca5.jpeg", 
        vendido: false 
    },
    {
        nome: "Conjunto",
        preco: 25.00,
        imagem: "img/peca6.jpeg", 
        vendido: false 
    }
];


const container = document.getElementById('lista-produtos');

produtos.forEach(produto => {
    
    // 1. Configuração do Botão (Vendido ou Disponível)
    let botaoHTML;
    let badgeHTML = '';

    // Formata o preço para R$ 00,00
    const precoFormatado = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    if (produto.vendido) {
        // Se vendeu: Botão cinza e etiqueta "Esgotado"
        botaoHTML = `
            <button class="btn btn-secondary w-100 rounded-pill" disabled style="cursor: not-allowed; opacity: 0.6;">
                Vendido
            </button>`;
        badgeHTML = `<span class="position-absolute top-0 end-0 m-3 badge bg-danger">Esgotado</span>`;
    }  else {
        // Se disponível: Botão WhatsApp verde
        
        // 1. Pega o endereço completo da imagem
        const urlImagem = new URL(produto.imagem, document.baseURI).href;

        // 2. Monta a mensagem com quebra de linha (\n) e o link da foto
        const msg = `Olá! Gostei do *${produto.nome}* (${precoFormatado}).\n\nAinda está disponível?\n\nVeja qual é a peça aqui: ${urlImagem}`;
        
        // 3. Cria o link do Zap codificado
        const linkZap = `https://wa.me/5513981256157?text=${encodeURIComponent(msg)}`;
        
        botaoHTML = `
            <a href="${linkZap}" target="_blank" class="btn btn-whatsapp w-100 rounded-pill">
                Eu quero!
            </a>`;
    }

    // 2. Cria o HTML do Card
    const card = `
        <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 border-0 shadow-sm position-relative p-3 card-bg-texture ">
                ${badgeHTML}
                
                <div class="card-img-container">
                    <img src="${produto.imagem}" class="card-img-top img-expandable" 
                         alt="${produto.nome}"
                         onclick="abrirModal('${produto.imagem}', '${produto.nome}', '${precoFormatado}')">
                </div>
                
                <div class="card-body text-center">
                    <h3 class="h4 fw-bold">${produto.nome}</h3>
                    <p class="fs-5 fw-bold text-terracotta">${precoFormatado}</p>
                    ${botaoHTML}
                </div>
            </div>
        </div>
    `;

    // 3. Adiciona o card na tela
    container.innerHTML += card;
});

// --- FUNÇÃO PARA ABRIR O MODAL ---
function abrirModal(imagem, nome, preco) {
    // Pega os elementos do modal genérico
    const modalImg = document.getElementById('modalImg');
    const modalTitulo = document.getElementById('modalTitulo');
    const modalPreco = document.getElementById('modalPreco');

    // Atualiza as informações
    modalImg.src = imagem;
    modalTitulo.innerText = nome;
    modalPreco.innerText = `${nome} - ${preco}`;

    // Abre o modal usando o Bootstrap
    const modalElement = document.getElementById('modalProduto');
    const modalBootstrap = new bootstrap.Modal(modalElement);
    modalBootstrap.show();

}

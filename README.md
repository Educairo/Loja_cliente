# Loja_cliente
Esse é um projeto real de um ecommerce de roupas usadas
Brechó Flor de Lótus

Site de galeria online para o **Brechó Flor de Lótus**, desenvolvido para facilitar a visualização de peças disponíveis e automatizar o contato via WhatsApp para vendas.

##  Sobre o Projeto

Este projeto é uma **vitrine virtual estática**. O objetivo principal é substituir o envio manual de fotos no WhatsApp por um link profissional onde a cliente pode ver todas as roupas, preços e disponibilidade.

Ao clicar em "Eu Quero", o site gera automaticamente uma mensagem personalizada no WhatsApp da loja, contendo o nome da peça e o link da foto para facilitar a identificação.

##  Funcionalidades

-   **Galeria Dinâmica:** Os produtos são carregados automaticamente via JavaScript (`produtos.js`), facilitando a adição e remoção de peças sem mexer no HTML.
-   **Status de Venda:** Lógica automática para marcar produtos como "Vendido/Esgotado", desativando o botão de compra.
-   **Integração WhatsApp:** O botão de compra abre uma conversa já com o texto: *"Olá! Gostei do [Nome da Peça]..."* e o link da imagem.
-   **Zoom na Peça:** Modal (janela) para visualizar a imagem da roupa em tamanho grande.
-   **Design Responsivo:** Funciona bem em celulares e computadores (feito com Bootstrap 5).


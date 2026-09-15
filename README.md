# Roteiro Prático — Anatomia Topográfica do Tórax

PWA responsivo para GitHub Pages com G1 (Artérias e Nervos) e G2 (Veias).

## Recursos
- Hierarquia completa do roteiro.
- Associação automática das estruturas a `images/1.png` até `images/105.png`.
- Upload de múltiplas imagens por estrutura.
- Persistência local dos anexos via IndexedDB.
- Ocultar/mostrar imagens individualmente ou em bloco.
- Zoom em tela cheia de 1× a 4×.
- Busca por estrutura e filtro por G1/G2.
- Geração de PDF local, com opção de incluir ou não imagens ocultas.
- Instalação como PWA.
- Layout responsivo com glassmorphism e bolhas flutuantes.

## Colocar as imagens
Abra a pasta `images/` e adicione seus arquivos:

`1.png`, `2.png`, `3.png` ... `105.png`.

A numeração já está mapeada para a ordem do roteiro.

## Publicar no GitHub Pages
1. Crie um repositório no GitHub.
2. Envie todos os arquivos desta pasta para a raiz do repositório.
3. Vá em **Settings → Pages**.
4. Em **Build and deployment**, escolha **Deploy from a branch**.
5. Selecione a branch `main` e a pasta `/root`.
6. Salve e aguarde o endereço do GitHub Pages aparecer.

## Observação sobre o PDF
O app carrega o jsPDF por CDN. Se a biblioteca externa estiver indisponível, o botão de PDF abre automaticamente a impressão do navegador, onde é possível usar **Salvar como PDF**.


## Imagens de referência incorporadas

Esta versão inclui 15 imagens anatômicas fornecidas para apoio topográfico. Elas aparecem como **referências permanentes** nos cartões relacionados (aorta, artérias e veias intercostais, vascularização mamária, subclávia, nervos intercostais, nervos peitorais, nervo torácico longo e sistema ázigo), com zoom e inclusão no PDF.

As imagens numéricas `images/1.png` a `images/105.png` continuam reservadas para a sequência principal do roteiro. As referências adicionais ficam em `images/references/`.

O ícone do PWA também foi atualizado para a versão anatômica do tórax criada para o aplicativo.


## Atualização de referências anatômicas

Esta versão inclui 33 imagens anatômicas de referência incorporadas ao app. Uma mesma prancha pode aparecer em mais de uma estrutura quando identifica ou demonstra mais de um item do roteiro. O app mantém, em paralelo, a imagem principal numerada `images/1.png` a `images/105.png` e os anexos locais dos alunos.


## Atualização de referências anatômicas

Esta versão inclui 33 imagens anatômicas de referência incorporadas ao app. Uma mesma prancha pode aparecer em mais de uma estrutura quando identifica ou demonstra mais de um item do roteiro. O app mantém, em paralelo, a imagem principal numerada `images/1.png` a `images/105.png` e os anexos locais dos alunos.

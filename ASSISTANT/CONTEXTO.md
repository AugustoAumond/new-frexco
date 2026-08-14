# Contexto da aplicação Frexco

## Visão geral

Frexco é um front-end de e-commerce de frutas, construído como uma SPA. O catálogo é estático e permite buscar produtos, informar uma quantidade em quilogramas e adicioná-los ao carrinho. O carrinho é mantido no estado global e persistido no `localStorage` do navegador.

O projeto não possui backend, autenticação real, API, banco de dados ou fluxo de checkout. As telas de login/criação de conta e de cadastro de produto são apenas visuais/protótipos neste momento.

## Tecnologias

- React 18 + TypeScript
- Vite 4
- React Router DOM 6
- Tailwind CSS 3
- Swiper para o carrossel da página inicial
- React Icons/Lucide React para ícones
- ESLint com regras TypeScript e React Hooks

## Como executar e validar

```bash
npm install
npm run dev
npm run lint
npm run build
```

Em 13/08/2026, a checagem `tsc --noEmit` passa. O `npm run lint` falha com quatro erros `prefer-const` e catorze avisos, principalmente pelo uso de `any` e dependências ausentes em hooks.

## Estrutura relevante

```text
src/
  main.tsx                              # Configuração das rotas
  App.tsx                               # Página inicial: busca, cabeçalho, banner e catálogo
  object.tsx                            # Interface ProductsProps e catálogo estático Items
  context/StateContex.tsx               # Contexto global do carrinho
  storage/storageCart.ts                # Leitura/escrita do carrinho no localStorage (chave Chart)
  layout/RootLayout.tsx                 # Provider de estado e Outlet das rotas
  componentes/homepage/
    header/header.tsx                   # Busca e indicador do carrinho
    main-panel/main-panel.tsx           # Carrossel Swiper
    products/products.tsx               # Filtro e grade do catálogo
    products/card/card.tsx              # Card e inclusão de item no carrinho
  routes/
    cart/cart.tsx                       # Carrinho e resumo de valores
    userAcess/userAcess.tsx             # Tela visual de login/cadastro
    newProduct/newProduct.tsx           # Tela visual de cadastro de produto
public/
  photos_items/                         # Imagens dos itens do catálogo
  frutos-panel.jpg                      # Banners da home
  pequeno-agricultor.jpg
```

## Rotas

| Rota | Componente | Situação |
| --- | --- | --- |
| `/` | `App` | Página inicial funcional |
| `/cart` | `Cart` | Exibe e remove itens do carrinho |
| `/login` | `UserAcess` | Protótipo sem autenticação |
| `/new-product` | `NewProduct` | Protótipo sem persistência/criação |

## Atualizacao visual (13/08/2026)

- A pagina inicial recebeu cabecalho fixo, busca aprimorada, carrossel editorial, cards responsivos e nova identidade visual.
- A rota `/cart` foi redesenhada com estado vazio, controles de quantidade, remocao de itens, resumo fixo em desktop e formatacao monetaria brasileira.
- O subtotal, frete e total do carrinho agora sao derivados dos itens atuais, sendo atualizados ao alterar a quantidade ou remover produtos.

## Fluxo de dados do carrinho

1. `Card` recebe os dados de um item do catálogo e a quantidade desejada.
2. Ao adicionar, atualiza `productsCart` no `StateContext` e salva o array no `localStorage`, na chave `Chart`.
3. Ao abrir a home, `App` recupera o carrinho salvo e o restaura no contexto.
4. `Header` usa o contexto para mostrar a quantidade de linhas no carrinho.
5. `Cart` lista itens e permite removê-los, atualizando contexto e armazenamento.

O formato esperado de um item é:

```ts
interface ProductsProps {
  id: number;
  name: string;
  photo: string;
  price?: number;
  quantidade?: number | string;
}
```

## Estado atual e pontos de atenção

- `StateContex.tsx` usa `createContext<any>` e `updateChart(item: any)`. Prioridade: criar tipos explícitos para o contexto e para os itens do carrinho.
- O cálculo de `valorTotal` em `routes/cart/cart.tsx` roda apenas na montagem e usa estado acumulado dentro de um `forEach`. Por isso não é recalculado após remover/alterar itens e pode gerar totais inconsistentes. Deve ser derivado de `productsCart` (por exemplo, com `reduce`).
- O campo de quantidade na tela do carrinho é controlado, porém não possui `onChange`; hoje ele não permite editar a quantidade.
- `Card` altera diretamente objetos do array recebido pelo contexto antes de atualizar o estado. Substituir por operações imutáveis (`map`) evita atualizações imprevisíveis.
- `getChart()` serializa o retorno de `localStorage.getItem`, exigindo um `JSON.parse` duplo em `App.tsx`. O ideal é retornar o dado já parseado (ou `null`) uma única vez, com tratamento para JSON inválido.
- `main-panel.tsx` contém um literal `...` dentro do JSX. Embora o TypeScript aceite, isso é renderizado como texto no carrossel e deve ser removido. Há também classes Tailwind de `bg-[url(...)]` que não são necessárias porque cada slide já contém uma imagem.
- Há textos com codificação corrompida, como `MaÃ§Ã£`, `PREÃ‡O` e `vocÃª`. Os arquivos devem ser salvos em UTF-8 para corrigir os acentos.
- `NewProduct` usa `onSelect` em um campo `file`; o evento adequado é `onChange`. A tela apenas faz `console.log` e não cria itens.
- `UserAcess` não possui lógica de login/cadastro, validação, envio nem senha do tipo `password`.
- O catálogo (`Items`) e o carrinho compartilham `ProductsProps`, embora `quantidade` seja específico do carrinho. Separar `Product` e `CartItem` deixará o domínio mais claro.
- Não há testes automatizados, tratamento de estados vazios/erros nem página para rota inexistente.
- `REACT_APP_ENVIRONMENT` no `.env` não segue o prefixo `VITE_` exigido pelo Vite e, no estado atual, não é consumida.

## Convenções e cuidados em mudanças futuras

- Preservar a persistência na chave `Chart` ou incluir migração caso ela seja renomeada.
- Usar caminhos de imagem públicos iniciados por `/` (ex.: `/photos_items/apple.png`) para evitar dependência da rota atual.
- Não acessar `productsCart.length` sem garantir que o contexto tenha um valor inicial válido.
- Preferir nomes em inglês consistentes. Há nomes históricos com erros de escrita como `StateContex`, `userAcess`, `getChart` e `updateChart`; só renomeá-los de forma coordenada, atualizando todos os imports.
- Antes de novas funcionalidades, priorizar: tipagem do contexto, correção do cálculo/edição do carrinho, remoção do JSX residual do carrossel e correção de codificação.

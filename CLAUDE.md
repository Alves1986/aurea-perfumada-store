# CLAUDE.md — Áurea Perfumada

## Visão do projeto

A Áurea Perfumada é uma marca brasileira de velas artesanais perfumadas, decorativas e para presente. O projeto é um e-commerce próprio, premium, acolhedor e mobile-first, construído inicialmente como uma prévia demonstrativa. O site deve comunicar luz, aroma, presença, autocuidado, decoração afetiva e artesanalidade contemporânea.

O tom de voz deve ser elegante, leve, sensorial, humano e confiável. Não usar promessas terapêuticas, médicas ou de cura. A comunicação deve evitar exageros e priorizar informações que possam ser comprovadas pela responsável pela marca.

## Estado atual

Este repositório contém uma versão DEMO funcional. Produtos, aromas, preços, pesos, dimensões, tempos de queima, estoque, prazos, políticas e dados operacionais exibidos na interface podem ser demonstrativos e devem ser revisados antes de qualquer publicação.

Nunca inventar avaliações, depoimentos, números de clientes, estoque, vendas, certificações, ingredientes, prazos, preços oficiais ou políticas comerciais. Quando uma informação real não estiver disponível, usar marcador administrativo claro, texto neutro ou placeholder de fotografia real.

O site não deve ser publicado, conectado a domínio, configurado com pagamento real ou ligado a contas externas sem aprovação explícita da responsável pelo projeto.

## Arquitetura técnica

O projeto usa React 19, Vite, Tailwind CSS 4, Express, tRPC, Drizzle ORM, MySQL/TiDB e autenticação Manus já preparada pelo scaffold.

A apresentação pública fica em `client/src/pages`, os componentes reutilizáveis ficam em `client/src/components`, os modelos de domínio compartilhados ficam em `shared`, o catálogo DEMO fica em `client/src/lib/store-data.ts` e os modelos completos ficam em `shared/store-models.ts`.

O roteamento principal está em `client/src/App.tsx`. A home usa `StoreHeader` e `StoreFooter`, e as páginas internas devem reutilizar esses mesmos componentes para manter consistência visual. O componente `Storefront` concentra experiências de catálogo, produto, conteúdo, carrinho, checkout e pedido DEMO.

Não colocar mídia pesada em `client/public` ou `client/src/assets`. Ativos visuais persistentes devem ficar fora do projeto e ser carregados pelo armazenamento do projeto conforme o fluxo oficial. Nunca armazenar credenciais em código, `.env` versionado ou documentação pública.

## Identidade visual

A paleta deve priorizar marfim, areia, branco quente, cacau, terracota suave, verde-sálvia e dourado champagne fosco ou luminoso como detalhe. Títulos usam serifada elegante e legível; interface e textos usam sans-serif de alta legibilidade. O dourado não deve dominar a interface nem reduzir contraste.

A logo do cabeçalho e do rodapé deve preservar o nome “Áurea Perfumada” e a chama da marca. O favicon usa somente o símbolo da vela, sem a escrita. Não regenerar ou redesenhar a marca automaticamente quando houver um ativo oficial disponível.

Interações precisam ter hover suave, foco visível, áreas clicáveis confortáveis e suporte a `prefers-reduced-motion`. O cabeçalho deve manter alinhamento consistente, estado ativo por rota e menu mobile acessível. O rodapé compartilhado deve manter redes sociais, compartilhamento, toast e retorno ao topo.

## Catálogo e integrações futuras

O catálogo atual é DEMO e contém placeholders de fotografia. A camada de dados deve permanecer separada da apresentação e usar tipos para produto, variação, coleção, imagem, estoque, cliente, endereço, carrinho, pedido, pagamento, frete, cupom, evento de integração e log de sincronização.

O Bling será futuramente o sistema operacional de ERP para produtos, SKUs, estoque, pedidos, dados fiscais, expedição e status logísticos. A Shopee poderá ser sincronizada posteriormente pelo Bling. Não conectar essas integrações sem solicitação e sem credenciais fornecidas de forma explícita e segura.

Qualquer integração deve registrar estados de sincronização, erros e tentativas sem expor tokens. Para mudanças de banco, atualizar primeiro `drizzle/schema.ts`, gerar a migração, revisar o SQL e aplicá-lo pelo fluxo de banco do projeto. Não executar comandos destrutivos sem confirmação.

## Qualidade e comandos

Antes de entregar alterações relevantes, executar:

```bash
pnpm test
pnpm build
```

Usar Vitest para regras críticas, especialmente catálogo, carrinho, checkout DEMO, estados de integração e validações de entrada. Testes de captura visual não substituem testes unitários.

Para alterações de UI, validar desktop e mobile. Conferir contraste, foco por teclado, navegação sem dead ends, estados vazio/carregando/erro, overflow e respeito a movimento reduzido. Atualizar `todo.md` antes de iniciar mudanças solicitadas e marcar cada item somente quando houver evidência de conclusão.

## Segurança e privacidade

Não pedir, armazenar ou commitar credenciais reais sem confirmação explícita. Não habilitar pagamentos reais, domínio, contas sociais ou ERP por iniciativa própria. Links sociais oficiais devem ser fornecidos pela responsável ou encontrados em configuração autorizada do projeto.

Políticas de privacidade, termos, trocas, devoluções, entrega e informações fiscais são estruturais até revisão por responsáveis jurídico e contábil. Manter avisos de revisão visíveis quando o conteúdo ainda for demonstrativo.

## Entrega

A entrega padrão deste projeto é uma prévia revisável. Antes de publicar, conferir catálogo real, fotos, preços, SKUs, estoque, regras de frete, pagamentos, dados empresariais, políticas, atendimento, fiscal e integrações. Criar checkpoint antes de qualquer publicação e orientar a responsável a usar o fluxo de publicação do painel.

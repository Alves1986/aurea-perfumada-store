# Project TODO

## Fase A — Diagnóstico e plano
- [x] Mini brand book da Áurea Perfumada com paleta, tipografia, logo, ícones, espaçamento, tom de voz, fotografia e CTAs
- [x] Sitemap completo das rotas públicas e de compra
- [x] Modelo de dados de catálogo, carrinho, pedidos e integrações
- [x] Fluxos de usuário de descoberta até acompanhamento de pedido e atendimento
- [x] Lista consolidada de pendências reais por produto, empresa, entrega, pagamento, suporte, fiscal e integrações
- [x] Registro de que todos os conteúdos demonstrativos são DEMO e não representam informações comerciais reais

## Fase B — Design system e protótipo
- [x] Tokens de cor, tipografia, espaçamento, borda, sombra e estados
- [x] Componentes reutilizáveis para navegação, cards, formulários, feedback e compra
- [x] Responsividade mobile-first, foco visível, teclado e contraste adequado
- [x] Aplicação das versões de logo fornecidas pela marca em fundos claros e escuros

## Fase C — Páginas públicas
- [x] Home `/` com hero, destaques, momentos, kits, aromas, bastidores, FAQ e captura consentida
- [x] Coleções `/colecoes` e `/colecoes/:slug` com filtros, ordenação e estados de interface
- [x] Produto `/produtos/:slug` com galeria DEMO, detalhes editáveis, frete por CEP e compra
- [x] Kits `/kits`, presentes `/presentes` e aromas `/aromas`
- [x] Sobre `/sobre` e como usar `/como-usar`
- [x] FAQ, entregas, trocas e devoluções, privacidade, termos e contato
- [x] Carrinho, checkout demonstrativo, pedido, rastreio e 404
- [x] Avisos de revisão jurídica/contábil e de segurança de velas

## Fase D — Dados e operação demonstrativa
- [x] Camada de dados separada da apresentação
- [x] Tipos e estruturas para produto, variação, coleção, imagem, estoque, cliente, endereço, carrinho, pedido, pagamento, frete, cupom e eventos/logs
- [x] Produtos DEMO claramente identificados, sem avaliações, depoimentos, métricas ou informações inventadas
- [x] Persistência demonstrativa do carrinho e fluxo de checkout sem pagamento real
- [x] Estrutura administrativa editável para dados reais futuros

## Fase E — Integrações futuras
- [x] Contratos e campos preparados para Bling ERP
- [x] Estrutura preparada para sincronização futura com Shopee via Bling
- [x] Logs e estados de sincronização sem conexão externa ativa
- [x] Documentação de credenciais e configurações necessárias, sem solicitar ou armazenar credenciais reais

## Fase F — Qualidade e entrega
- [x] Testes Vitest para regras críticas do carrinho e dados demonstrativos
- [x] Verificação visual desktop e mobile em desktop e mobile
- [x] Revisão de acessibilidade, SEO técnico básico e estados vazios/erro
- [x] Revisão final de `todo.md` e checkpoint antes da entrega
- [x] Entrega da versão de prévia, sem publicação

## Ajustes identificados antes do próximo checkpoint
- [x] Extrair componentes reutilizáveis reais para header/nav, card de produto, bloco FAQ, formulário de captura e CTA de compra
- [x] Implementar `/colecoes` e `/colecoes/:slug` com listagem DEMO, filtros, ordenação e estados vazio/erro
- [x] Implementar páginas reais de `/kits`, `/presentes` e `/aromas`
- [x] Implementar conteúdo estruturado de `/sobre` e `/como-usar`, incluindo instruções de segurança de velas
- [x] Implementar páginas de FAQ, entregas, trocas/devoluções, privacidade, termos e contato com conteúdo DEMO estruturado
- [x] Construir carrinho, checkout DEMO, página de pedido e rastreio com estados e tratamento de erros
- [x] Adicionar avisos visíveis de revisão jurídica/contábil e segurança de uso de velas nas páginas relevantes

- [x] Executar capturas explícitas em viewport desktop das rotas principais (`/`, `/colecoes`, `/produtos/vela-aurora`, `/carrinho`, `/checkout`) e revisar visualmente antes do checkpoint final

## Correção solicitada — logos
- [x] Remover o fundo preto da aplicação do logo no topo sobre fundo claro
- [x] Substituir o logo do rodapé por uma versão nítida e adequada ao tamanho de exibição
- [x] Validar as duas aplicações em desktop e mobile e salvar checkpoint corrigido

## Reversão solicitada — logos
- [x] Reverter os logos regenerados que pioraram o resultado
- [x] Restaurar o logo original de melhor qualidade no rodapé
- [x] Corrigir somente o fundo preto do logo original do topo sem redesenhar a marca
- [x] Validar as duas áreas e salvar checkpoint da reversão

- [x] Executar captura mobile após a reversão final dos logos e salvar novo checkpoint

## Nova rodada — logo e cabeçalho
- [ ] Recriar uma logo oficial aprovada pela marca conforme a referência do escopo — tentativa automática descartada por baixa fidelidade
- [ ] Aplicar uma nova logo oficial aprovada no cabeçalho — estado final usa a versão transparente restaurada
- [x] Adicionar efeito de hover suave e acessível ao logo do cabeçalho
- [x] Ajustar alinhamento vertical e horizontal do logo com os itens do menu
- [ ] Validar desktop, mobile, foco por teclado e reduzir movimento quando solicitado — desktop/mobile validados; foco ainda requer teste manual

## Ajuste após validação — logo recriada inadequada
- [x] Restaurar a versão transparente anterior, visualmente validada, no cabeçalho
- [x] Manter hover suave, foco acessível e alinhamento com o menu
- [x] Validar novamente a versão restaurada antes do checkpoint

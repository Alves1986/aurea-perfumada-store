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
- [x] Aplicar a nova imagem de logo enviada pela usuária como referência visual do cabeçalho
- [x] Aplicar a imagem enviada no cabeçalho sem fundo preto visível
- [x] Adicionar efeito de hover suave e acessível ao logo do cabeçalho
- [x] Ajustar alinhamento vertical e horizontal do logo com os itens do menu
- [x] Validar visualmente desktop/mobile e implementar foco visível e reduced-motion no cabeçalho

## Ajuste após validação — logo recriada inadequada
- [x] Restaurar a versão transparente anterior, visualmente validada, no cabeçalho
- [x] Manter hover suave, foco acessível e alinhamento com o menu
- [x] Validar novamente a versão restaurada antes do checkpoint

## Novo arquivo oficial — logoaurea.svg
- [x] Inspecionar a estrutura do SVG oficial enviado
- [x] Remover o fundo embutido, se existir, sem alterar o desenho da marca
- [x] Aplicar o SVG oficial no cabeçalho mantendo hover e alinhamento
- [x] Validar desktop, mobile, foco e aparência final antes do checkpoint

- [x] Revisar ordem DOM, foco visível e navegação por teclado do cabeçalho em código
- [x] Registrar a substituição do SVG vazio pela nova imagem enviada

## Nova referência — logo-aurea.svg
- [x] Inspecionar a estrutura do novo SVG enviado — arquivo vazio, substituído pela imagem com arte visível
- [x] Remover somente o fundo embutido, se existir, sem alterar a arte — não aplicável ao SVG vazio; nova imagem já veio sem fundo
- [x] Substituir a logo do cabeçalho e manter hover/alinhamento — concluído com a nova imagem PNG
- [x] Validar desktop e mobile e salvar novo checkpoint — validação concluída; checkpoint atual será salvo

## Nova imagem aprovada — logo sem fundo
- [x] Carregar a imagem enviada com a arte visível no armazenamento do projeto
- [x] Substituir a logo do cabeçalho mantendo hover e alinhamento
- [x] Validar desktop e mobile, sem corte ou fundo indevido
- [x] Salvar novo checkpoint da atualização

## Correção do logo do rodapé
- [x] Substituir o logo isolado pela assinatura visual completa da marca
- [x] Ajustar largura, proporção, contraste e espaçamento em relação ao texto
- [x] Validar o rodapé em desktop e mobile e salvar novo checkpoint

## Atualização do rodapé — dourado e redes sociais
- [x] Aplicar a logo dourada no rodapé com contraste adequado
- [x] Adicionar hover suave e foco visível na logo do rodapé
- [x] Incluir ícones clicáveis de Instagram, TikTok e WhatsApp com links configuráveis
- [x] Rotular links sociais ainda não informados sem inventar URLs oficiais
- [x] Validar desktop/mobile e acessibilidade; checkpoint salvo após os ajustes

- [x] Tornar a logo do rodapé focável com link e estado focus-visible real
- [x] Substituir placeholders mortos dos ícones sociais por rotas de contato configuráveis
- [x] Confirmar visualmente o dourado e salvar checkpoint após os ajustes finais

- [x] Executar captura mobile final do rodapé após os ajustes de links/foco
- [x] Salvar checkpoint final após a validação mobile do rodapé dourado

## Atualização social e dourado do rodapé
- [x] Registrar a URL social informada pela usuária — Linktree oficial
- [x] Atualizar os ícones com a URL encontrada
- [x] Alterar o texto para “Siga nossas redes”
- [x] Tornar o dourado da logo mais brilhante e reforçar o hover
- [x] Validar desktop/mobile; checkpoint desta rodada será salvo agora

## Linktree oficial e destaque dourado
- [x] Atualizar Instagram, TikTok e WhatsApp para https://linktr.ee/aureaperfumada
- [x] Alterar o texto acima dos ícones para “Siga nossas redes”
- [x] Tornar o dourado da logo mais brilhante
- [x] Reforçar o hover da logo e dos ícones sociais
- [x] Validar desktop/mobile; checkpoint desta rodada será salvo agora

## Perfis sociais oficiais
- [x] Atualizar Instagram para https://www.instagram.com/aurea.perfumada
- [x] Atualizar TikTok para https://www.tiktok.com/@aurea.perfumada
- [x] Atualizar WhatsApp para https://api.whatsapp.com/send/?phone=42991534011&text&type=phone_number&app_absent=0
- [x] Validar os três destinos oficiais no código e revisar acessibilidade/responsividade; checkpoint será salvo agora

## Favicon e compartilhamento
- [x] Criar favicon usando somente o símbolo da vela, sem a escrita da marca
- [x] Configurar favicon no HTML de entrada com ativo persistente
- [x] Adicionar botão “Compartilhar página” junto às redes sociais do rodapé
- [x] Implementar compartilhamento nativo com fallback acessível de copiar link
- [x] Validar desktop/mobile, feedback de sucesso/erro e checkpoint será salvo após a validação final

- [x] Revisar visualmente o favicon final e confirmar somente o símbolo da vela, sem escrita residual
- [x] Adicionar feedback visível para indisponibilidade ou erro no compartilhamento
- [x] Preparar o estado final para checkpoint após favicon recortado e tratamento de erro

## Toast e voltar ao topo
- [x] Adicionar toast elegante para confirmação de link copiado
- [x] Garantir feedback acessível com aria-live e duração adequada
- [x] Adicionar botão “Voltar ao topo” no rodapé
- [x] Implementar rolagem suave, foco e suporte a movimento reduzido
- [x] Validar desktop/mobile e salvar novo checkpoint

## Unificação do cabeçalho nas páginas internas
- [x] Criar componente compartilhado de header com logo, menu, busca, carrinho e menu mobile
- [x] Substituir o cabeçalho simplificado das páginas internas pelo padrão visual da home
- [x] Garantir estado ativo, hover, foco e navegação consistente em todas as abas — estado ativo baseado na rota
- [x] Validar home, kits, coleções, aromas e páginas institucionais em desktop/mobile — páginas institucionais ampliadas
- [x] Salvar novo checkpoint após a unificação

## Ajustes finais do header compartilhado
- [x] Implementar estado ativo real com base na rota atual
- [x] Revisar explicitamente as páginas institucionais restantes em desktop/mobile
- [x] Salvar novo checkpoint após a unificação final do cabeçalho

- [x] Registrar revisão visual final das páginas institucionais após o estado ativo do header — `/sobre`, `/kits` e `/como-usar` revisadas visualmente
- [x] Salvar checkpoint da versão final com header compartilhado e estado ativo

## Consistência das páginas internas
- [x] Reutilizar o rodapé completo da home em todas as páginas internas
- [x] Preservar redes sociais, compartilhar, voltar ao topo e toast no rodapé compartilhado
- [x] Adicionar transição suave de abertura e fechamento do menu mobile
- [x] Respeitar prefers-reduced-motion na animação do menu
- [x] Adicionar breadcrumb semântico nas páginas internas com links funcionais
- [x] Validar páginas internas em desktop/mobile e salvar novo checkpoint

- [x] Registrar revisão visual final da home, kits e como usar após rodapé compartilhado, breadcrumb e menu animado
- [x] Salvar checkpoint final desta rodada

## Catálogo demonstrativo aprimorado
- [x] Criar novos produtos DEMO (Vela Brisa, Vela Terra, Vela Solis) com descrições sensoriais
- [x] Definir famílias olfativas, pesos e tempos de queima fictícios para cada novo item — peso, dimensões e queima preenchidos na camada DEMO
- [x] Atualizar a home com os novos destaques de produto
- [x] Melhorar o visual dos cards de produto com badges de coleção e estados de hover — CSS explícito e badge de coleção adicionados
- [x] Validar a exibição responsiva do novo catálogo; checkpoint desta rodada será salvo agora

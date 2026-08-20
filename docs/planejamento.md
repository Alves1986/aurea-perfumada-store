# Áurea Perfumada — diagnóstico e plano DEMO

> Este documento descreve a proposta de prévia. Nenhum preço, aroma, peso, prazo, estoque, avaliação, depoimento, certificação ou política comercial apresentado no ambiente deve ser interpretado como informação real.

## Mini brand book

A identidade parte do logotipo fornecido, mantendo o círculo, a chama e o nome **Áurea Perfumada**, com uma aplicação mais silenciosa e contemporânea no site. A versão com fundo escuro funciona como assinatura em rodapé e seções cacau; a versão com fundo marfim funciona em navegação e materiais claros. Antes da publicação, recomenda-se gerar também arquivos vetoriais e versões horizontais do logo.

| Elemento | Diretriz DEMO |
|---|---|
| Marfim | `#F6F1E9`, base de páginas e fundos claros |
| Branco quente | `#FFFDF9`, cards e áreas de respiro |
| Areia | `#E8DDCD`, blocos editoriais |
| Champagne fosco | `#B9914B`, detalhes, linhas e CTAs secundários |
| Cacau | `#382D27`, textos fortes e rodapé |
| Sálvia | `#D8DFD2`, apoio para famílias olfativas |
| Terracota suave | `#EAD8D1`, apoio para produto e momentos |
| Títulos | Playfair Display, serifada elegante e legível |
| Interface | DM Sans, sans-serif limpa e acessível |
| Ícones | Traço fino, arredondado, monocromático, sem excesso ornamental |
| Espaçamento | Escala base de 8 px; seções amplas de 76–112 px; áreas tocáveis mínimas de 44 px |

O tom deve ser sensorial, próximo e confiável, sem promessas terapêuticas. CTAs aprovados para a prévia incluem **Conhecer velas**, **Escolher um presente**, **Explorar aromas**, **Conhecer a marca** e **Ver todas as dúvidas**. Fotografias reais devem priorizar luz natural suave, superfícies táteis, enquadramentos verticais para mobile, ausência de marcas de terceiros e foco em textura, chama, embalagem e escala real do produto.

## Sitemap

A navegação pública está preparada para `/`, `/colecoes`, `/colecoes/:slug`, `/produtos/:slug`, `/kits`, `/presentes`, `/aromas`, `/sobre`, `/como-usar`, `/faq`, `/entregas`, `/trocas-e-devolucoes`, `/privacidade`, `/termos-de-uso`, `/contato`, `/carrinho`, `/checkout`, `/pedido/:codigo`, `/rastrear` e `/404`. As rotas secundárias já possuem fallback DEMO e serão evoluídas com os dados reais.

## Modelo de dados

A camada futura deve separar catálogo, operação e integração. `Product` referencia `Collection`, `Variant`, `Image` e `Inventory`; `Cart` referencia `CartItem` e pode virar `Order`; `Order` referencia `Customer`, `Address`, `Payment`, `Shipping` e `OrderItem`. `IntegrationEvent` e `SyncLog` registram tentativas de sincronização com Bling sem expor credenciais. Campos externos previstos: `blingProductId`, `blingOrderId`, `blingVariantId`, `externalSku`, `lastSyncedAt`, `syncStatus` e `syncError`.

## Fluxos de usuário

A descoberta começa na home, segue por momento, coleção, família olfativa ou busca e chega ao produto. A página de produto concentra fotografia real, variações, disponibilidade, CEP, quantidade, cuidados e CTA de adição. O carrinho resume itens e estimativa de frete; o checkout DEMO coleta apenas campos de interface e não processa pagamentos. A confirmação gera um código de demonstração; rastreio e atendimento permanecem preparados para integrações futuras. O foco mobile inclui menu compacto, CTAs largos, cards em coluna e leitura progressiva.

## Pendências para configuração posterior

| Grupo | Informações reais necessárias |
|---|---|
| Produto | nome, SKU, aromas, pesos, dimensões, composição, tempo de queima, fotos, variações, preço, status, estoque e produção sob encomenda |
| Empresa | razão social, CNPJ, endereço, nome da responsável, canais oficiais e identidade final |
| Entrega | regiões, transportadoras, Correios ou intermediador, prazos, regras de frete, retirada e rastreio |
| Pagamento | meios aceitos, parcelamento, antifraude, gateway e política de conciliação |
| Suporte | WhatsApp, e-mail, horário, SLA, responsáveis e mensagens transacionais |
| Fiscal | regime, emissão, dados fiscais, regras tributárias e revisão contábil |
| Integrações | conta Bling, IDs, campos de mapeamento, webhooks, frequência, Shopee via Bling e política de retry |
| Jurídico | política de privacidade, termos, trocas/devoluções, cookies e revisão profissional |

## Escopo de segurança e publicação

A prévia não conecta contas externas, não ativa pagamentos reais, não publica o site e não armazena credenciais. A ativação futura deve ocorrer somente após revisão dos textos legais, testes de estoque/pedido e definição formal de credenciais e responsabilidades.

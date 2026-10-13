# Deploy da Áurea Perfumada no Vercel

A loja foi preparada como uma SPA estática independente do Manus.

## Configuração

- Framework: Vite
- Build: `pnpm run build`
- Diretório de saída: `dist/public`
- Instalação: `pnpm install --frozen-lockfile`
- Fallback de rotas: `vercel.json` redireciona rotas da loja para `index.html`
- Assets: `client/public/`
- Favicon: `client/public/favicon.svg`

## Publicação pelo painel do Vercel

1. Importe `Alves1986/aurea-perfumada-store`.
2. Mantenha o diretório raiz na raiz do repositório.
3. Use `pnpm install --frozen-lockfile` como Install Command.
4. Use `pnpm run build` como Build Command.
5. Use `dist/public` como Output Directory.
6. Não configure Runtime, Serverless Functions ou variáveis do Manus para esta versão demonstrativa.

O backend legado permanece no repositório para evolução futura, mas não é incluído no build estático do Vercel. Quando pagamentos, estoque, pedidos ou autenticação reais forem conectados, eles devem ser modelados como funções/API próprias do Vercel ou serviço externo escolhido pela marca.

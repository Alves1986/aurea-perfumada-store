# Integração Asaas

A loja possui uma integração serverless preparada para o Asaas em Sandbox ou Produção.

## Variáveis no Vercel

Configure estas variáveis no projeto Vercel. Nunca coloque a chave no frontend, no Git ou em mensagens:

```text
ASAAS_ENV=sandbox
ASAAS_API_KEY=$aact_hmlg_sua_chave_de_sandbox
ASAAS_WEBHOOK_TOKEN=um_token_longo_com_no_minimo_32_caracteres
ASAAS_USER_AGENT=aurea-perfumada-store/1.0
```

Para Produção, altere `ASAAS_ENV=production` e use uma chave de Produção separada. A documentação do Asaas usa `https://api-sandbox.asaas.com/v3` no Sandbox e `https://api.asaas.com/v3` em Produção, com a chave enviada somente no header `access_token`.

## Endpoint de cobrança

`POST /api/asaas/create-payment`

O endpoint:

1. valida nome, e-mail, referência e valor maior que zero;
2. cria o cliente Asaas com `externalReference`;
3. cria a cobrança com `UNDEFINED`, `PIX`, `BOLETO` ou `CREDIT_CARD`;
4. devolve o link de fatura sem expor a chave.

## Webhook

Configure no Asaas:

```text
https://SEU-DOMINIO.vercel.app/api/asaas/webhook
```

Use o mesmo valor de `ASAAS_WEBHOOK_TOKEN` no token de autenticação do webhook. O endpoint valida o header `asaas-access-token` e responde aos eventos de cobrança. A persistência de pedidos será conectada quando o banco de pedidos estiver ativado.

## Estado atual

O checkout visual já oferece Pix, boleto, cartão e escolha pelo Asaas. A criação de cobrança permanece bloqueada enquanto o valor do carrinho estiver `R$ 00,00`, evitando gerar cobranças inválidas na versão demonstrativa. Depois que os preços reais forem cadastrados, basta enviar o total real para o endpoint.

A integração se baseia na documentação oficial do Asaas sobre autenticação, clientes, cobranças e webhooks.

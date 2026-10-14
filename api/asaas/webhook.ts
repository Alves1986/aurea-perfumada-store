type RequestLike = { method?: string; headers?: Record<string, string | string[] | undefined>; body?: Record<string, unknown> };
type ResponseLike = { status: (code: number) => ResponseLike; json: (body: unknown) => void };

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

  const expectedToken = process.env.ASAAS_WEBHOOK_TOKEN;
  const receivedToken = req.headers?.["asaas-access-token"];
  const token = Array.isArray(receivedToken) ? receivedToken[0] : receivedToken;
  if (!expectedToken || !token || token !== expectedToken) {
    return res.status(401).json({ error: "Webhook não autorizado" });
  }

  const event = req.body || {};
  const payment = event.payment as Record<string, unknown> | undefined;
  console.info("[Asaas] webhook", {
    event: event.event,
    paymentId: payment?.id,
    status: payment?.status,
    externalReference: payment?.externalReference,
  });

  // TODO: persistir o status em orders/sync_logs quando o banco de pedidos for ativado.
  return res.status(200).json({ received: true });
}

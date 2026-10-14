import { asaasRequest, type AsaasCustomer, type AsaasPayment } from "../_lib/asaas";

type RequestLike = { method?: string; body?: Record<string, unknown> };
type ResponseLike = { status: (code: number) => ResponseLike; json: (body: unknown) => void };

const text = (value: unknown) => typeof value === "string" ? value.trim() : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req: RequestLike, res: ResponseLike) {
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

  const body = req.body || {};
  const name = text(body.name);
  const email = text(body.email);
  const cpfCnpj = text(body.cpfCnpj);
  const postalCode = text(body.postalCode);
  const addressNumber = text(body.addressNumber);
  const billingType = text(body.billingType).toUpperCase() || "UNDEFINED";
  const description = text(body.description) || "Pedido Áurea Perfumada";
  const externalReference = text(body.externalReference);
  const value = Number(body.value);

  if (!name || !emailPattern.test(email) || !externalReference || !Number.isFinite(value) || value <= 0) {
    return res.status(400).json({ error: "Informe nome, e-mail, referência e um valor de pedido maior que zero." });
  }
  if (!["UNDEFINED", "PIX", "BOLETO", "CREDIT_CARD"].includes(billingType)) {
    return res.status(400).json({ error: "Forma de pagamento inválida." });
  }
  if (!process.env.ASAAS_API_KEY) {
    return res.status(503).json({ error: "Pagamentos Asaas ainda não estão habilitados neste ambiente." });
  }

  try {
    const customer = await asaasRequest<AsaasCustomer>("/customers", {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        ...(cpfCnpj ? { cpfCnpj } : {}),
        ...(postalCode ? { postalCode } : {}),
        ...(addressNumber ? { addressNumber } : {}),
        externalReference,
        notificationDisabled: false,
      }),
    });

    const dueDate = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
    const payment = await asaasRequest<AsaasPayment>("/payments", {
      method: "POST",
      body: JSON.stringify({ customer: customer.id, billingType, value: Number(value.toFixed(2)), dueDate, description, externalReference }),
    });

    return res.status(201).json({
      provider: "asaas",
      paymentId: payment.id,
      status: payment.status,
      billingType: payment.billingType,
      value: payment.value,
      invoiceUrl: payment.invoiceUrl || null,
      bankSlipUrl: payment.bankSlipUrl || null,
    });
  } catch (error) {
    console.error("[Asaas] create payment failed", error instanceof Error ? error.message : "unknown error");
    return res.status(502).json({ error: "Não foi possível criar a cobrança no Asaas." });
  }
}

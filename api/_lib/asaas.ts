const ASAAS_BASE_URL = process.env.ASAAS_ENV === "production"
  ? "https://api.asaas.com/v3"
  : "https://api-sandbox.asaas.com/v3";

export const asaasConfigured = Boolean(process.env.ASAAS_API_KEY);

export async function asaasRequest<T>(path: string, init: RequestInit = {}): Promise<T> {
  const apiKey = process.env.ASAAS_API_KEY;
  if (!apiKey) throw new Error("ASAAS_API_KEY não configurada");

  const response = await fetch(`${ASAAS_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      "User-Agent": process.env.ASAAS_USER_AGENT || "aurea-perfumada-store/1.0",
      access_token: apiKey,
      ...(init.headers || {}),
    },
  });

  const body = await response.json().catch(() => ({}));
  if (!response.ok) {
    const message = Array.isArray(body?.errors) ? body.errors.map((error: { description?: string }) => error.description).filter(Boolean).join("; ") : "Erro retornado pelo Asaas";
    throw new Error(message || `Asaas HTTP ${response.status}`);
  }
  return body as T;
}

export type AsaasCustomer = { id: string; name: string; email?: string; externalReference?: string };
export type AsaasPayment = { id: string; status: string; billingType: string; value: number; invoiceUrl?: string; bankSlipUrl?: string; externalReference?: string };

import type { Product } from "@shared/store-models";

export const demoProducts: Product[] = [
  { id: "demo-aurora", sku: "DEMO-AURORA", slug: "vela-aurora", name: "Vela Aurora", status: "active", description: "Uma composição sensorial de presença quente e luminosa — descrição demonstrativa, a ser revisada pela marca.", collectionIds: ["aconchego"], images: [{ id: "img-aurora", url: "", alt: "Placeholder de foto real da Vela Aurora", kind: "placeholder" }], variations: [{ id: "var-aurora", sku: "DEMO-AURORA", name: "Tamanho a definir", aroma: "Baunilha & âmbar", price: 0, status: "active" }], syncStatus: "disabled" },
  { id: "demo-serena", sku: "DEMO-SERENA", slug: "vela-serena", name: "Vela Serena", status: "active", description: "Uma leitura fresca e amadeirada para acompanhar pausas cotidianas, sem promessa terapêutica.", collectionIds: ["pausa"], images: [{ id: "img-serena", url: "", alt: "Placeholder de foto real da Vela Serena", kind: "placeholder" }], variations: [{ id: "var-serena", sku: "DEMO-SERENA", name: "Tamanho a definir", aroma: "Lavanda & cedro", price: 0, status: "active" }], syncStatus: "disabled" },
  { id: "demo-encontro", sku: "DEMO-ENCONTRO", slug: "vela-encontro", name: "Vela Encontro", status: "active", description: "Uma atmosfera envolvente para momentos compartilhados — composição e notas finais pendentes de cadastro.", collectionIds: ["presenca"], images: [{ id: "img-encontro", url: "", alt: "Placeholder de foto real da Vela Encontro", kind: "placeholder" }], variations: [{ id: "var-encontro", sku: "DEMO-ENCONTRO", name: "Tamanho a definir", aroma: "Figo & sândalo", price: 0, status: "active" }], syncStatus: "disabled" },
  { id: "demo-horizonte", sku: "DEMO-HORIZONTE", slug: "vela-horizonte", name: "Vela Horizonte", status: "active", description: "Um convite sensorial de frescor e leveza para ambientes acolhedores.", collectionIds: ["pausa"], images: [{ id: "img-horizonte", url: "", alt: "Placeholder de foto real da Vela Horizonte", kind: "placeholder" }], variations: [{ id: "var-horizonte", sku: "DEMO-HORIZONTE", name: "Tamanho a definir", aroma: "Notas verdes", price: 0, status: "active" }], syncStatus: "disabled" },
];

export const demoCollections = [
  { id: "pausa", slug: "pausa", name: "Pausa", description: "Frescor e presença para desacelerar.", productIds: ["demo-serena", "demo-horizonte"] },
  { id: "aconchego", slug: "aconchego", name: "Aconchego", description: "Texturas quentes para ficar mais um pouco.", productIds: ["demo-aurora"] },
  { id: "presenca", slug: "presenca", name: "Presença", description: "Atmosferas para compartilhar.", productIds: ["demo-encontro"] },
];

export const findDemoProduct = (slug: string) => demoProducts.find((product) => product.slug === slug) ?? demoProducts[0];

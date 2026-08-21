import type { Product } from "@shared/store-models";

const placeholder = (id: string, name: string) => ({ id, url: "", alt: `Placeholder de foto real da ${name}`, kind: "placeholder" as const });
const variation = (id: string, sku: string, aroma: string, price = 0) => ({ id, sku, name: "Tamanho a definir", aroma, price, status: "active" as const });

export const demoProducts: Product[] = [
  { id: "demo-aurora", sku: "DEMO-AURORA", slug: "vela-aurora", name: "Vela Aurora", status: "active", description: "Uma composição sensorial de presença quente e luminosa, pensada para acompanhar pausas cotidianas com suavidade.", collectionIds: ["aconchego"], weight: "200g", dimensions: "8x8cm", burnTime: "35h", images: [placeholder("img-aurora", "Vela Aurora")], variations: [variation("var-aurora", "DEMO-AURORA", "Baunilha & âmbar")], syncStatus: "disabled" },
  { id: "demo-serena", sku: "DEMO-SERENA", slug: "vela-serena", name: "Vela Serena", status: "active", description: "Uma leitura fresca e amadeirada para criar uma atmosfera acolhedora, sem promessa terapêutica.", collectionIds: ["pausa"], weight: "200g", dimensions: "8x8cm", burnTime: "35h", images: [placeholder("img-serena", "Vela Serena")], variations: [variation("var-serena", "DEMO-SERENA", "Lavanda & cedro")], syncStatus: "disabled" },
  { id: "demo-encontro", sku: "DEMO-ENCONTRO", slug: "vela-encontro", name: "Vela Encontro", status: "active", description: "Uma atmosfera envolvente para momentos compartilhados, com composição final pendente de cadastro da marca.", collectionIds: ["presenca"], weight: "200g", dimensions: "8x8cm", burnTime: "35h", images: [placeholder("img-encontro", "Vela Encontro")], variations: [variation("var-encontro", "DEMO-ENCONTRO", "Figo & sândalo")], syncStatus: "disabled" },
  { id: "demo-brisa", sku: "DEMO-BRISA", slug: "vela-brisa", name: "Vela Brisa", status: "active", description: "Um convite ao frescor, com notas verdes que ajudam a compor ambientes leves e luminosos.", collectionIds: ["pausa"], weight: "180g", dimensions: "7x7cm", burnTime: "30h", images: [placeholder("img-brisa", "Vela Brisa")], variations: [variation("var-brisa", "DEMO-BRISA", "Capim-limão & alecrim")], syncStatus: "disabled" },
  { id: "demo-terra", sku: "DEMO-TERRA", slug: "vela-terra", name: "Vela Terra", status: "active", description: "Uma leitura terrosa e elegante para quem aprecia atmosferas profundas, naturais e acolhedoras.", collectionIds: ["aconchego"], weight: "200g", dimensions: "8x8cm", burnTime: "35h", images: [placeholder("img-terra", "Vela Terra")], variations: [variation("var-terra", "DEMO-TERRA", "Patchouli & musgo")], syncStatus: "disabled" },
  { id: "demo-solis", sku: "DEMO-SOLIS", slug: "vela-solis", name: "Vela Solis", status: "active", description: "Um acorde cítrico e floral para trazer claridade visual e sensorial aos pequenos rituais do dia.", collectionIds: ["presenca"], weight: "180g", dimensions: "7x7cm", burnTime: "30h", images: [placeholder("img-solis", "Vela Solis")], variations: [variation("var-solis", "DEMO-SOLIS", "Bergamota & flor de laranjeira")], syncStatus: "disabled" },
];

export const demoCollections = [
  { id: "pausa", slug: "pausa", name: "Pausa", description: "Frescor e presença para desacelerar.", productIds: ["demo-serena", "demo-horizonte", "demo-brisa"] },
  { id: "aconchego", slug: "aconchego", name: "Aconchego", description: "Texturas quentes para ficar mais um pouco.", productIds: ["demo-aurora", "demo-terra"] },
  { id: "presenca", slug: "presenca", name: "Presença", description: "Atmosferas para compartilhar.", productIds: ["demo-encontro", "demo-solis"] },
];

export const findDemoProduct = (slug: string) => demoProducts.find((product) => product.slug === slug) ?? demoProducts[0];

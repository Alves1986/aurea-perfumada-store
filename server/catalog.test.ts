import { describe, expect, it } from "vitest";

type DemoProduct = { slug: string; name: string; price: number };
const demoProducts: DemoProduct[] = [
  { slug: "vela-aurora", name: "Vela Aurora", price: 0 },
  { slug: "vela-serena", name: "Vela Serena", price: 0 },
  { slug: "vela-encontro", name: "Vela Encontro", price: 0 },
];

function clampQuantity(value: number) {
  return Math.max(1, Math.floor(value));
}

describe("catálogo DEMO da Áurea Perfumada", () => {
  it("mantém slugs únicos e preços neutros até o preenchimento real", () => {
    const slugs = demoProducts.map((product) => product.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(demoProducts.every((product) => product.price === 0)).toBe(true);
  });

  it("não permite quantidade menor que um item", () => {
    expect(clampQuantity(0)).toBe(1);
    expect(clampQuantity(-2)).toBe(1);
    expect(clampQuantity(2.9)).toBe(2);
  });
});

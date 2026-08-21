import { describe, expect, it } from "vitest";
import { demoProducts } from "../client/src/lib/store-data";

type Quantity = number;

function clampQuantity(value: Quantity) {
  return Math.max(1, Math.floor(value));
}

describe("catálogo DEMO da Áurea Perfumada", () => {
  it("mantém seis produtos demonstrativos, slugs únicos e preços neutros", () => {
    const slugs = demoProducts.map((product) => product.slug);
    expect(demoProducts).toHaveLength(6);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(demoProducts.every((product) => product.variations[0]?.price === 0)).toBe(true);
    expect(demoProducts.every((product) => product.images[0]?.kind === "placeholder")).toBe(true);
  });

  it("mantém aromas e descrições preenchidos para apresentação DEMO", () => {
    expect(demoProducts.every((product) => product.variations[0]?.aroma && product.description.length > 40)).toBe(true);
  });

  it("não permite quantidade menor que um item", () => {
    expect(clampQuantity(0)).toBe(1);
    expect(clampQuantity(-2)).toBe(1);
    expect(clampQuantity(2.9)).toBe(2);
  });
});

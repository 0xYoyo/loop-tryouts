// @vitest-environment jsdom
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

describe("Brize landing page", () => {
  beforeEach(() => {
    vi.resetModules();
    document.documentElement.lang = "he";
    document.documentElement.dir = "rtl";
    document.head.innerHTML = `
      <title></title>
      <meta name="description" content="">
      <meta property="og:title" content="">
      <meta property="og:description" content="">
    `;
    document.body.innerHTML = '<a class="skip-link" href="#main-content"></a><div id="app"></div>';
  });

  afterEach(() => {
    document.body.innerHTML = "";
  });

  it("renders Hebrew and RTL by default with every required section", async () => {
    await import("../src/main");

    expect(document.documentElement.lang).toBe("he");
    expect(document.documentElement.dir).toBe("rtl");
    expect(document.querySelector("h1")?.textContent).toContain("בגדים");
    expect(document.querySelector("#story")).not.toBeNull();
    expect(document.querySelector("#clothing")).not.toBeNull();
    expect(document.querySelector("#visit")).not.toBeNull();
    expect(document.querySelector("footer")).not.toBeNull();
  });

  it("switches all customer-facing content, direction, and metadata without reload", async () => {
    await import("../src/main");
    const switcher = document.querySelector<HTMLButtonElement>(".language-switch");
    switcher?.click();

    expect(document.documentElement.lang).toBe("en");
    expect(document.documentElement.dir).toBe("ltr");
    expect(document.querySelector("h1")?.textContent).toContain("Personally");
    expect(document.querySelector("#story h2")?.textContent).toContain("family boutique");
    expect(document.title).toContain("family women's boutique");
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toContain("Gan Ha'ir");
    expect(document.body.textContent).not.toContain("דלגו לתוכן הראשי");

    document.querySelector<HTMLButtonElement>(".language-switch")?.click();
    expect(document.documentElement.lang).toBe("he");
    expect(document.documentElement.dir).toBe("rtl");
  });

  it("keeps all demo contact actions safely disabled and free of fictional links", async () => {
    await import("../src/main");

    const disabled = [...document.querySelectorAll<HTMLButtonElement>("button:disabled")];
    expect(disabled).toHaveLength(4);
    expect(document.querySelector('a[href^="tel:"]')).toBeNull();
    expect(document.querySelector('a[href*="wa.me"]')).toBeNull();
    expect(document.querySelector('a[target="_blank"]')).toBeNull();
  });

  it("discloses demo imagery and supplies descriptive localized alternatives", async () => {
    await import("../src/main");

    expect(document.body.textContent).toContain("תמונות דמו");
    const images = [...document.querySelectorAll<HTMLImageElement>("img")];
    expect(images).toHaveLength(3);
    expect(images.every((image) => image.alt.length > 20)).toBe(true);
    expect(images.every((image) => image.src.includes("/images/demo-") && image.src.endsWith(".webp"))).toBe(true);
  });
});

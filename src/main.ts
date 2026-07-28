import "./styles.css";
import { business, content, images, type Language } from "./content";

const appRoot = document.querySelector<HTMLDivElement>("#app");
if (!appRoot) throw new Error("Missing #app root");
const app: HTMLDivElement = appRoot;

let language: Language = "he";

function localized(value: Record<Language, string>): string {
  return value[language];
}

function safeAction({
  label,
  kind,
  primary = false,
}: {
  label: string;
  kind: "phone" | "whatsapp" | "map";
  primary?: boolean;
}): string {
  const values = {
    phone: business.phone ? `tel:${business.phone}` : "",
    whatsapp: business.whatsapp ? `https://wa.me/${business.whatsapp}` : "",
    map: business.mapUrl,
  };
  const enabled = business.contactEnabled && !business.isDemo && Boolean(values[kind]);

  if (enabled) {
    return `<a class="button ${primary ? "button--primary" : "button--secondary"}" href="${values[kind]}" ${
      kind === "map" || kind === "whatsapp" ? 'target="_blank" rel="noreferrer"' : ""
    }>${label}</a>`;
  }

  return `<button class="button ${primary ? "button--primary" : "button--secondary"}" type="button" disabled aria-describedby="contact-safety">${label}<span>${content[language].demoValue}</span></button>`;
}

function updateMetadata(): void {
  const copy = content[language];
  document.title = copy.title;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "he" ? "rtl" : "ltr";
  document.querySelector<HTMLMetaElement>('meta[name="description"]')?.setAttribute("content", copy.description);
  document.querySelector<HTMLMetaElement>('meta[property="og:title"]')?.setAttribute("content", copy.title);
  document.querySelector<HTMLMetaElement>('meta[property="og:description"]')?.setAttribute("content", copy.description);
}

function render(): void {
  const copy = content[language];
  updateMetadata();

  app.innerHTML = `
    <div class="announcement">${copy.demoBadge}</div>
    <header class="site-header">
      <a class="wordmark" href="#top" aria-label="${copy.brandHebrew}">
        <span>${copy.brand}</span><small>${copy.brandHebrew}</small>
      </a>
      <nav aria-label="${copy.navigationLabel}">
        <a href="#story">${copy.navStory}</a>
        <a href="#clothing">${copy.navClothing}</a>
        <a href="#visit">${copy.navVisit}</a>
      </nav>
      <button class="language-switch" type="button" aria-label="${copy.languageLabel}">
        <span aria-hidden="true">Aא</span>${copy.languageName}
      </button>
    </header>

    <main id="main-content">
      <section class="hero" id="top" aria-labelledby="hero-title">
        <img src="${images.hero.src}" alt="${localized(images.hero.alt)}" />
        <div class="hero__veil"></div>
        <div class="hero__content">
          <p class="eyebrow">${copy.eyebrow}</p>
          <h1 id="hero-title">${copy.heroTitle}</h1>
          <p class="hero__body">${copy.heroBody}</p>
          <div class="hero__actions">
            ${safeAction({ label: copy.whatsapp, kind: "whatsapp", primary: true })}
            <a class="text-link" href="#clothing">${copy.explore}<span aria-hidden="true">↓</span></a>
          </div>
          <p class="safety-note" id="contact-safety">${copy.contactUnavailable}</p>
        </div>
        <p class="image-note">${copy.imageDisclaimer}</p>
      </section>

      <section class="story section" id="story" aria-labelledby="story-title">
        <div>
          <p class="eyebrow">${copy.storyEyebrow}</p>
          <h2 id="story-title">${copy.storyTitle}</h2>
        </div>
        <div class="story__copy">
          <p>${copy.storyBody}</p>
          <blockquote>${copy.storyQuote}</blockquote>
        </div>
      </section>

      <section class="clothing section" id="clothing" aria-labelledby="clothing-title">
        <div class="section-heading">
          <p class="eyebrow">${copy.clothingEyebrow}</p>
          <h2 id="clothing-title">${copy.clothingTitle}</h2>
          <p>${copy.clothingIntro}</p>
        </div>
        <div class="editorial-grid">
          <figure class="editorial-card editorial-card--tall">
            <img src="${images.tailoring.src}" alt="${localized(images.tailoring.alt)}" loading="lazy" />
            <figcaption>
              <span>01</span>
              <div><h3>${copy.highlightOneTitle}</h3><p>${copy.highlightOneBody}</p></div>
            </figcaption>
          </figure>
          <figure class="editorial-card editorial-card--offset">
            <img src="${images.textures.src}" alt="${localized(images.textures.alt)}" loading="lazy" />
            <figcaption>
              <span>02</span>
              <div><h3>${copy.highlightTwoTitle}</h3><p>${copy.highlightTwoBody}</p></div>
            </figcaption>
          </figure>
        </div>
        <p class="demo-disclosure">${copy.imageDisclaimer}</p>
      </section>

      <section class="visit section" id="visit" aria-labelledby="visit-title">
        <div class="visit__intro">
          <p class="eyebrow">${copy.visitEyebrow}</p>
          <h2 id="visit-title">${copy.visitTitle}</h2>
          <p>${copy.visitBody}</p>
          ${safeAction({ label: copy.whatsapp, kind: "whatsapp", primary: true })}
        </div>
        <div class="visit__details">
          <div class="detail-block">
            <p class="detail-label">${copy.locationLabel}</p>
            <p>${localized(business.location)}</p>
            ${safeAction({ label: copy.directions, kind: "map" })}
          </div>
          <div class="detail-block">
            <p class="detail-label">${copy.hoursLabel}</p>
            <ul>
              <li>${localized(business.hours.regular)}</li>
              <li>${localized(business.hours.friday)}</li>
              <li>${localized(business.hours.holiday)}</li>
            </ul>
          </div>
          <div class="detail-block">
            <p class="detail-label">${copy.phone}</p>
            ${safeAction({ label: copy.phone, kind: "phone" })}
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="wordmark wordmark--footer"><span>${copy.brand}</span><small>${copy.brandHebrew}</small></div>
      <p>${copy.footerLine}</p>
      <p class="footer-demo">${copy.footerDemo}</p>
    </footer>
  `;

  document.querySelector<HTMLButtonElement>(".language-switch")?.addEventListener("click", () => {
    language = language === "he" ? "en" : "he";
    render();
  });
  document.querySelector<HTMLAnchorElement>(".skip-link")!.textContent = copy.skipLink;
}

render();

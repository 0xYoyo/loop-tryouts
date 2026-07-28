export type Language = "he" | "en";

export type LocalizedText = Record<Language, string>;

export interface BusinessConfig {
  isDemo: boolean;
  contactEnabled: boolean;
  phone: string;
  whatsapp: string;
  mapUrl: string;
  location: LocalizedText;
  hours: {
    regular: LocalizedText;
    friday: LocalizedText;
    holiday: LocalizedText;
  };
}

export interface ImageConfig {
  src: string;
  alt: LocalizedText;
}

export const business: BusinessConfig = {
  isDemo: true,
  contactEnabled: false,
  phone: "",
  whatsapp: "",
  mapUrl: "",
  location: {
    he: "גן העיר, תל אביב · מיקום מדויק יתווסף לפני ההשקה",
    en: "Gan Ha'ir, Tel Aviv · Exact location to be added before launch",
  },
  hours: {
    regular: {
      he: "שעות רגילות — יתווספו לאחר אימות",
      en: "Regular hours — to be added after verification",
    },
    friday: {
      he: "יום שישי — יתווסף לאחר אימות",
      en: "Friday — to be added after verification",
    },
    holiday: {
      he: "חגים וערבי חג — יש לבדוק לפני הגעה",
      en: "Holidays and holiday eves — please verify before visiting",
    },
  },
};

export const images: Record<"hero" | "tailoring" | "textures", ImageConfig> = {
  hero: {
    src: "/images/demo-hero.webp",
    alt: {
      he: "תמונת דמו עריכתית של בגדים בגווני שמנת, זית ובורדו בבוטיק מואר",
      en: "Demo editorial image of cream, olive, and burgundy clothing in a softly lit boutique",
    },
  },
  tailoring: {
    src: "/images/demo-tailoring.webp",
    alt: {
      he: "תמונת דמו עריכתית של ז׳קט בורדו וחולצה בהירה על קולבים",
      en: "Demo editorial image of a burgundy jacket and light blouse on hangers",
    },
  },
  textures: {
    src: "/images/demo-textures.webp",
    alt: {
      he: "תמונת דמו עריכתית של סריגים מקופלים בגווני זית, שמנת וורוד",
      en: "Demo editorial image of folded olive, cream, and rose knitwear",
    },
  },
};

export const content = {
  he: {
    languageName: "English",
    languageLabel: "Switch to English",
    skipLink: "דלגו לתוכן הראשי",
    navigationLabel: "ניווט ראשי",
    navStory: "הסיפור שלנו",
    navClothing: "מה תמצאו אצלנו",
    navVisit: "בואו לבקר",
    demoBadge: "אתר בהכנה · הפרטים טרם אומתו",
    brand: "BRIZE",
    brandHebrew: "בריז",
    eyebrow: "בוטיק נשים משפחתי · גן העיר, תל אביב",
    heroTitle: "בגדים שנבחרו באופן אישי. יחס שנשאר אישי.",
    heroBody:
      "כבר עשרות שנים, בריז הוא מקום לנשים שמחפשות בחירה רגועה, עין מנוסה ושירות חם וקשוב.",
    whatsapp: "כתבו לנו ב־WhatsApp",
    contactUnavailable: "הקישור יופעל לאחר הוספת הפרטים האמיתיים",
    explore: "גלו את הבגדים",
    imageDisclaimer:
      "תמונות דמו עריכתיות בלבד — אינן מציגות את המלאי הנוכחי של בריז.",
    storyEyebrow: "מאז, ועדיין",
    storyTitle: "בוטיק משפחתי עם עין אישית",
    storyBody:
      "בריז פועל בגן העיר בתל אביב כבר עשרות שנים. בעלת הבוטיק בוחרת את הבגדים באופן אישי ומלווה כל לקוחה בתשומת לב, בסבלנות ובחום.",
    storyQuote: "להקשיב, להכיר, ולבחור יחד — בקצב שלך.",
    clothingEyebrow: "מבחר מתחלף",
    clothingTitle: "פריטים שנבחרים אחד־אחד",
    clothingIntro:
      "הדוגמאות כאן מציגות את האווירה בלבד. קטגוריות, מידות והמלאי בחנות יאומתו לפני ההשקה.",
    highlightOneTitle: "שכבות רכות וגזרות נקיות",
    highlightOneBody: "המחשה זמנית לסגנון עריכתי, לא הבטחה לפריטים בחנות.",
    highlightTwoTitle: "מרקמים נעימים וצבעים עמוקים",
    highlightTwoBody: "תמונה זמנית שתוחלף בצילומים אמיתיים של בריז.",
    visitEyebrow: "נשמח להכיר",
    visitTitle: "בואו לבקר בבריז",
    visitBody:
      "החנות נמצאת בגן העיר בתל אביב. פרטי המיקום, הטלפון ושעות הפתיחה יפורסמו רק לאחר אימות.",
    locationLabel: "מיקום",
    hoursLabel: "שעות פתיחה",
    phone: "טלפון",
    directions: "הוראות הגעה",
    demoValue: "יופעל לפני ההשקה",
    footerLine: "בוטיק נשים משפחתי בגן העיר, תל אביב.",
    footerDemo: "אתר הדגמה · פרטי קשר ותמונות יוחלפו לפני פרסום.",
    title: "בריז — בוטיק נשים משפחתי בתל אביב",
    description:
      "בריז הוא בוטיק נשים משפחתי בגן העיר, תל אביב, עם בחירה אישית ושירות קשוב.",
  },
  en: {
    languageName: "עברית",
    languageLabel: "מעבר לעברית",
    skipLink: "Skip to main content",
    navigationLabel: "Main navigation",
    navStory: "Our story",
    navClothing: "Clothing highlights",
    navVisit: "Visit us",
    demoBadge: "Preview site · details not yet verified",
    brand: "BRIZE",
    brandHebrew: "Brize",
    eyebrow: "A family women's boutique · Gan Ha'ir, Tel Aviv",
    heroTitle: "Personally chosen clothing. Genuinely personal care.",
    heroBody:
      "For decades, Brize has welcomed women looking for a calm selection, an experienced eye, and warm, attentive service.",
    whatsapp: "Message us on WhatsApp",
    contactUnavailable: "This link will activate once real details are supplied",
    explore: "Explore the clothing",
    imageDisclaimer:
      "Temporary editorial demo imagery — not Brize's current inventory.",
    storyEyebrow: "Then, and still",
    storyTitle: "A family boutique with a personal eye",
    storyBody:
      "Brize has been part of Gan Ha'ir in Tel Aviv for decades. The owner personally selects the clothing and accompanies each customer with attention, patience, and warmth.",
    storyQuote: "Listen, get to know you, and choose together — at your pace.",
    clothingEyebrow: "An evolving selection",
    clothingTitle: "Pieces considered one by one",
    clothingIntro:
      "These examples convey atmosphere only. Categories, sizing, and in-store availability will be verified before launch.",
    highlightOneTitle: "Soft layers and clean lines",
    highlightOneBody:
      "A temporary editorial illustration, not a promise of in-store pieces.",
    highlightTwoTitle: "Comforting texture and deep color",
    highlightTwoBody: "Temporary imagery to be replaced with real Brize photography.",
    visitEyebrow: "We'd love to meet",
    visitTitle: "Come visit Brize",
    visitBody:
      "The boutique is in Gan Ha'ir, Tel Aviv. Exact location, phone, and opening hours will be published only after verification.",
    locationLabel: "Location",
    hoursLabel: "Opening hours",
    phone: "Phone",
    directions: "Directions",
    demoValue: "Will activate before launch",
    footerLine: "A family women's boutique in Gan Ha'ir, Tel Aviv.",
    footerDemo: "Demo website · contact details and imagery will be replaced before publication.",
    title: "Brize — A family women's boutique in Tel Aviv",
    description:
      "Brize is a family women's boutique in Gan Ha'ir, Tel Aviv, with personally selected clothing and attentive service.",
  },
} as const;

export const site = {
  name: "Asaan Sweets",
  shortName: "Asaan",
  established: 1987,
  logoImage: "/images/asaan-logo.jpg",
  tagline: "Traditional Indian sweets & snacks",
  description:
    "A heritage sweets house since 1987: handcrafted mithai and savouries, prepared fresh daily, and ordered in seconds on WhatsApp.",
  url: "https://asaan-sweets.vercel.app",
  phoneDisplay: "+91 99024 23961",
  phoneHref: "tel:+919902423961",
  whatsappNumber: "919902423961",
  email: "hello@asaansweets.com",
  navigation: [
    { href: "/", label: "Home" },
    { href: "/menu", label: "Menu" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  heroBadges: [
    "Since 1987",
    "Fresh Batches Daily",
    "Gift-Ready Packaging",
    "Trusted by Families",
  ],
  trustCards: [
    {
      title: "Since 1987",
      description: "A heritage counter built on repeat customers, festival trays, and word-of-mouth trust.",
      icon: "clock",
    },
    {
      title: "Freshly Made Daily",
      description: "Small batches prepared daily so textures stay soft, crisp, and celebration-ready.",
      icon: "sun",
    },
    {
      title: "Authentic Recipes",
      description: "Time-tested methods, careful roasting, and flavours that feel instantly familiar.",
      icon: "sparkles",
    },
    {
      title: "Quality You Can Trust",
      description: "Consistent sourcing, careful finishing, and sweets you can gift with confidence.",
      icon: "shield",
    },
  ],
  story:
    "What began in 1987 as a neighbourhood halwai counter has grown into a trusted destination for celebration boxes, everyday indulgence, and festive gifting. Every batch at Asaan Sweets is still built around patient roasting, careful milk reduction, and finishing touches that make each sweet feel worthy of the family table.",
  craftPoints: [
    "Pure ghee roasting for signature depth",
    "Milk sweets cooked in small, controlled batches",
    "Dry fruits hand-selected for gifting-grade boxes",
  ],
  values: [
    {
      title: "Authenticity",
      description: "Recipes are guided by memory, not shortcuts, so the flavour profile stays familiar and deeply traditional.",
    },
    {
      title: "Freshness",
      description: "Daily production keeps textures lively, from soft laddus to crisp savoury spirals.",
    },
    {
      title: "Legacy",
      description: "The brand language, craft, and service all point back to a sweets house with heritage behind it.",
    },
    {
      title: "Trust",
      description: "WhatsApp ordering, direct contact, and transparent service keep every purchase reassuringly simple.",
    },
  ],
  gallery: [
    {
      title: "Morning Mise En Place",
      caption: "Nuts, saffron, and cardamom are prepped before the first batch starts.",
      image: "/images/kitchen-prep.svg",
      size: "tall",
    },
    {
      title: "House Assortment",
      caption: "A heritage spread curated for celebrations, gifting, and family visits.",
      image: "/images/hero-platter.svg",
      size: "wide",
    },
    {
      title: "Kaju Katli Finish",
      caption: "Diamond cuts polished for a clean bite and festive presentation.",
      image: "/images/products/kaju-katli.svg",
      size: "standard",
    },
    {
      title: "Daily Craft",
      caption: "The kitchen runs with patience, precision, and familiar hands.",
      image: "/images/craft-atelier.svg",
      size: "standard",
    },
    {
      title: "Motichoor Warmth",
      caption: "Tiny pearls of boondi bound gently with ghee and saffron syrup.",
      image: "/images/products/motichoor-laddu.svg",
      size: "standard",
    },
    {
      title: "Savoury Counter",
      caption: "Crisp bhakarwadi and namkeen bring balance to every order.",
      image: "/images/products/bhakarwadi.svg",
      size: "standard",
    },
  ],
  timeline: [
    {
      year: "1987",
      title: "The first counter opens",
      description: "Asaan Sweets begins with a single neighbourhood outlet and a small catalogue of classics.",
    },
    {
      year: "1998",
      title: "Festival boxes become a signature",
      description: "Gift-ready assortments turn the brand into a trusted family recommendation.",
    },
    {
      year: "Today",
      title: "Legacy meets convenience",
      description: "WhatsApp ordering keeps the experience easy while the recipes remain proudly traditional.",
    },
  ],
  hours: [
    "Monday - Friday: 8:30 AM to 9:30 PM",
    "Saturday - Sunday: 8:00 AM to 10:00 PM",
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/asaansweets" },
    { label: "Facebook", href: "https://facebook.com/asaansweets" },
    { label: "WhatsApp", href: "https://wa.me/919902423961" },
  ],
  addressLines: [
    "Heritage Bazaar Road",
    "Basavanagudi, Bengaluru 560004",
  ],
  mapEmbedUrl:
    "https://www.google.com/maps?q=Basavanagudi%20Bengaluru&output=embed",
} as const;

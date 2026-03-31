export type ProductCategory = "signature" | "milk-classics" | "snacks";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  badge: string;
  shortDescription: string;
  description: string;
  price: string;
  image: string;
  accent: string;
  shelfLife: string;
  ingredients: string[];
  highlights: string[];
  featured: boolean;
};

export const productFilters = [
  { id: "all", label: "All" },
  { id: "signature", label: "Signature Sweets" },
  { id: "milk-classics", label: "Milk Classics" },
  { id: "snacks", label: "Savory Snacks" },
] as const;

export const products: Product[] = [
  {
    id: "kaju-katli",
    name: "Kaju Katli",
    category: "signature",
    badge: "Best Seller",
    shortDescription: "Diamond-cut cashew fudge with a clean, rich finish.",
    description:
      "Our Kaju Katli is stone-smooth, delicately sweet, and finished with a festival-ready sheen. It is crafted for customers who want classic mithai that feels polished, balanced, and easy to gift.",
    price: "From Rs. 540 / kg",
    image: "/images/products/kaju-katli.svg",
    accent: "Cashew, silver leaf, subtle sweetness",
    shelfLife: "5 days refrigerated",
    ingredients: ["Premium cashews", "Sugar", "Ghee", "Silver leaf"],
    highlights: [
      "Silky texture with a neat bite",
      "Balanced sweetness for gifting",
      "Finished by hand in signature diamonds",
    ],
    featured: true,
  },
  {
    id: "motichoor-laddu",
    name: "Motichoor Laddu",
    category: "signature",
    badge: "Celebration Pick",
    shortDescription: "Soft saffron laddus made with fine boondi pearls and ghee.",
    description:
      "Made for weddings, pujas, and festive trays, these laddus are light, aromatic, and warmly spiced with cardamom. Each batch is hand-rolled for a soft crumble and a rich golden finish.",
    price: "From Rs. 480 / kg",
    image: "/images/products/motichoor-laddu.svg",
    accent: "Saffron syrup, cardamom, festive softness",
    shelfLife: "4 days refrigerated",
    ingredients: ["Besan", "Sugar syrup", "Ghee", "Cardamom", "Saffron"],
    highlights: [
      "Soft pearl texture with ghee aroma",
      "Festive favourite for large orders",
      "Warm saffron finish in every bite",
    ],
    featured: true,
  },
  {
    id: "ghee-mysore-pak",
    name: "Ghee Mysore Pak",
    category: "milk-classics",
    badge: "House Classic",
    shortDescription: "Golden gram flour fudge with a caramel edge and deep ghee note.",
    description:
      "This old-school Mysore Pak is slow-cooked until it develops a toasted aroma, airy crumb, and melt-in-the-mouth finish. It is the kind of sweet regulars come back for by name.",
    price: "From Rs. 460 / kg",
    image: "/images/products/ghee-mysore-pak.svg",
    accent: "Toasted besan, caramel warmth, pure ghee",
    shelfLife: "6 days refrigerated",
    ingredients: ["Gram flour", "Sugar", "Pure ghee"],
    highlights: [
      "Slow-cooked for caramel depth",
      "Crisp edge with a soft centre",
      "Pure ghee aroma without heaviness",
    ],
    featured: true,
  },
  {
    id: "kesar-peda",
    name: "Kesar Peda",
    category: "milk-classics",
    badge: "Milk Favourite",
    shortDescription: "Hand-finished milk peda scented with saffron and pistachio.",
    description:
      "Slow-reduced milk solids are shaped into soft pedas and topped with saffron threads and pistachio slivers. The result is comforting, rich, and ideal for smaller family treats.",
    price: "From Rs. 500 / kg",
    image: "/images/products/kesar-peda.svg",
    accent: "Reduced milk, saffron, pistachio",
    shelfLife: "4 days refrigerated",
    ingredients: ["Khoya", "Sugar", "Cardamom", "Saffron", "Pistachio"],
    highlights: [
      "Slow-cooked milk sweetness",
      "Saffron-led fragrance",
      "Soft finish suited for gifting and puja trays",
    ],
    featured: true,
  },
  {
    id: "dry-fruit-barfi",
    name: "Dry Fruit Barfi",
    category: "signature",
    badge: "Gifting Essential",
    shortDescription: "Dense dry fruit squares built for festive boxes and premium gifting.",
    description:
      "Packed with almonds, pistas, dates, and figs, this barfi leans rich rather than sugary. It is cut into elegant squares that hold beautifully in premium assorted boxes.",
    price: "From Rs. 720 / kg",
    image: "/images/products/dry-fruit-barfi.svg",
    accent: "Almonds, figs, pistachio, gifting grade",
    shelfLife: "7 days refrigerated",
    ingredients: ["Almonds", "Pistachios", "Dates", "Figs", "Ghee"],
    highlights: [
      "Dense nutty bite with natural sweetness",
      "Premium gifting option",
      "Elegant enough for festive assortments",
    ],
    featured: true,
  },
  {
    id: "gulab-jamun",
    name: "Gulab Jamun",
    category: "milk-classics",
    badge: "Classic Syrup Sweet",
    shortDescription: "Soft khoya dumplings soaked in cardamom syrup.",
    description:
      "Our Gulab Jamun is slow-fried to a deep chestnut tone and rested in warm syrup until each piece turns plush and fragrant. It is a dependable crowd-pleaser for family meals, gifting hampers, and celebration trays.",
    price: "From Rs. 420 / kg",
    image: "/images/products/gulab-jamun.svg",
    accent: "Khoya, cardamom syrup, soft centre",
    shelfLife: "3 days refrigerated",
    ingredients: ["Khoya", "Flour", "Sugar syrup", "Cardamom", "Ghee"],
    highlights: [
      "Warm syrup absorption without heaviness",
      "Soft centre and clean finish",
      "Popular choice for mixed dessert boxes",
    ],
    featured: true,
  },
  {
    id: "rasmalai",
    name: "Rasmalai",
    category: "milk-classics",
    badge: "Festive Favourite",
    shortDescription: "Chenna discs in saffron milk with pista and almond slivers.",
    description:
      "Rasmalai at Asaan Sweets is built around delicate chenna patties that stay soft in reduced saffron milk. It is designed for customers who want a chilled dessert sweet that feels festive, rich, and elegant.",
    price: "From Rs. 560 / kg",
    image: "/images/products/rasmalai.svg",
    accent: "Saffron milk, pista, chilled richness",
    shelfLife: "2 days refrigerated",
    ingredients: ["Chenna", "Milk", "Sugar", "Saffron", "Pistachio", "Almond"],
    highlights: [
      "Soft discs with balanced milk sweetness",
      "Served best chilled for festive meals",
      "Saffron-led finish with premium garnish",
    ],
    featured: true,
  },
  {
    id: "jangri",
    name: "Jangri",
    category: "signature",
    badge: "South Classic",
    shortDescription: "Bright, juicy jangri with a crisp edge and syrupy core.",
    description:
      "Piped in intricate rounds and dipped in aromatic syrup, our Jangri brings visual drama and familiar sweetness to festival counters. It is perfect for customers who want a traditional orange showpiece in the box.",
    price: "From Rs. 440 / kg",
    image: "/images/products/jangri.svg",
    accent: "Urad batter, sugar syrup, crisp finish",
    shelfLife: "3 days airtight",
    ingredients: ["Urad dal", "Sugar syrup", "Rose essence", "Ghee"],
    highlights: [
      "Intricate hand-piped shape",
      "Crisp exterior with syrup inside",
      "Strong visual appeal for festive assortments",
    ],
    featured: true,
  },
  {
    id: "soan-papdi",
    name: "Soan Papdi",
    category: "signature",
    badge: "Gift Box Pick",
    shortDescription: "Flaky cubes with cardamom, ghee, and a melt-away finish.",
    description:
      "Soan Papdi is whipped and layered until it pulls into airy strands that compress into neat cubes. It is a reliable gifting sweet for customers who want something light, familiar, and easy to serve.",
    price: "From Rs. 380 / kg",
    image: "/images/products/soan-papdi.svg",
    accent: "Flaky strands, cardamom, light sweetness",
    shelfLife: "10 days airtight",
    ingredients: ["Gram flour", "Maida", "Sugar", "Ghee", "Cardamom"],
    highlights: [
      "Light layered texture with clean sweetness",
      "Travel-friendly gifting choice",
      "Pairs well with dry fruit assortments",
    ],
    featured: false,
  },
  {
    id: "badam-halwa",
    name: "Badam Halwa",
    category: "milk-classics",
    badge: "Rich Indulgence",
    shortDescription: "Velvety almond halwa finished with ghee and saffron.",
    description:
      "Our Badam Halwa is cooked until the almond paste turns glossy, aromatic, and spoon-soft. It is the indulgent option for premium boxes and customers who prefer dense nut-forward desserts.",
    price: "From Rs. 680 / kg",
    image: "/images/products/badam-halwa.svg",
    accent: "Almond paste, saffron, glossy finish",
    shelfLife: "4 days refrigerated",
    ingredients: ["Almonds", "Milk", "Sugar", "Ghee", "Saffron"],
    highlights: [
      "Rich almond depth without graininess",
      "Ghee-roasted finish with saffron aroma",
      "Premium option for festive gifting",
    ],
    featured: true,
  },
  {
    id: "bhakarwadi",
    name: "Bhakarwadi",
    category: "snacks",
    badge: "Tea-Time Favourite",
    shortDescription: "Crisp spirals with sweet-spiced coconut, sesame, and masala.",
    description:
      "Our bhakarwadi adds contrast to sweet boxes with a crisp shell and layered filling of coconut, spice, and sesame. It is packed fresh for gifting, travel snacks, and evening cravings.",
    price: "From Rs. 360 / kg",
    image: "/images/products/bhakarwadi.svg",
    accent: "Coconut filling, spice, crisp finish",
    shelfLife: "12 days airtight",
    ingredients: ["Flour", "Coconut", "Sesame", "Chilli", "Sugar", "Oil"],
    highlights: [
      "Crunchy spiral texture",
      "Sweet-spiced finish for tea time",
      "Pairs naturally with mithai boxes",
    ],
    featured: false,
  },
  {
    id: "spicy-mixture",
    name: "Spicy Mixture",
    category: "snacks",
    badge: "Counter Staple",
    shortDescription: "Crunchy sev, peanuts, curry leaves, and masala for tea-time snacking.",
    description:
      "This savoury mixture is roasted and blended for crunch, spice, and everyday snacking. It works as a balance to sweet boxes, an easy add-on for repeat orders, and a dependable tea-time staple.",
    price: "From Rs. 340 / kg",
    image: "/images/products/spicy-mixture.svg",
    accent: "Sev, peanuts, curry leaves, masala crunch",
    shelfLife: "14 days airtight",
    ingredients: ["Sev", "Peanuts", "Flattened rice", "Curry leaves", "Spices", "Oil"],
    highlights: [
      "Crisp texture with balanced heat",
      "Popular add-on with mithai orders",
      "Packed for freshness and travel-friendly snacking",
    ],
    featured: false,
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(id: string, category: ProductCategory) {
  const sameCategory = products.filter(
    (product) => product.id !== id && product.category === category,
  );

  if (sameCategory.length > 0) {
    return sameCategory.slice(0, 3);
  }

  return products.filter((product) => product.id !== id).slice(0, 3);
}

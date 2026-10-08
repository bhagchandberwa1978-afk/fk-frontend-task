const IMG = "https://rukminim2.flixcart.com";
const STATIC = "https://static-assets-web.flixcart.com";

const LOGO_APP = "/img/fk-logo.jpg";
const LOGO_CLASSIC = `${STATIC}/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
const LOGO_PLUS = `${STATIC}/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png`;
const ASSURED = `${STATIC}/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png`;
const CART_ICON = `${STATIC}/batman-returns/batman-returns/p/images/header_cart_v4-6ac9a8.svg`;

const CATEGORIES = [
  { id: "for-you", name: "For You", icon: `${STATIC}/apex-static/images/svgs/L1Nav/all.svg` },
  { id: "fashion", name: "Fashion", icon: `${STATIC}/apex-static/images/svgs/L1Nav/fashion.svg` },
  { id: "mobiles", name: "Mobiles", icon: `${STATIC}/apex-static/images/svgs/L1Nav/mobiles.svg` },
  { id: "electronics", name: "Electronics", icon: `${STATIC}/apex-static/images/svgs/L1Nav/electronics.svg` },
  { id: "beauty", name: "Beauty", icon: `${STATIC}/apex-static/images/svgs/L1Nav/beauty.svg` },
  { id: "home", name: "Home", icon: `${STATIC}/apex-static/images/svgs/L1Nav/home-final.svg` },
  { id: "appliances", name: "Appliances", icon: `${STATIC}/apex-static/images/svgs/L1Nav/tv.svg` },
  { id: "toys", name: "Toys, baby..", icon: `${STATIC}/apex-static/images/svgs/L1Nav/toy.svg` },
  { id: "food", name: "Food & Health", icon: `${STATIC}/apex-static/images/svgs/L1Nav/food.svg` },
  { id: "auto", name: "Auto Accessories", icon: `${STATIC}/apex-static/images/svgs/L1Nav/auto-acc.svg` },
  { id: "sports", name: "Sports & Fitness", icon: `${STATIC}/apex-static/images/svgs/L1Nav/sport.svg` },
  { id: "furniture", name: "Furniture", icon: `${STATIC}/apex-static/images/svgs/L1Nav/furniture.svg` },
  { id: "books", name: "Books", icon: `${STATIC}/apex-static/images/svgs/L1Nav/books.svg` },
  { id: "two-wheelers", name: "2 Wheelers", icon: `${STATIC}/apex-static/images/svgs/L1Nav/auto-new.svg` }
];

const BBD_HERO = "https://rukminim1.flixcart.com/fk-p-flap/1262/898/image/908d7e7ac6972a3c.jpg?q=80";
const BBD_TILES = [
  { title: "Mobiles", img: "https://rukminim1.flixcart.com/fk-p-flap/240/270/image/7d8a9be41bb84273.png?q=80", q: "mobiles" },
  { title: "Electronics", img: "https://rukminim1.flixcart.com/fk-p-flap/240/270/image/2062deddf1c71d28.png?q=80", q: "electronics" },
  { title: "TVs & Appliances", img: "https://rukminim1.flixcart.com/fk-p-flap/240/270/image/952a4f2ac4e35b65.png?q=80", q: "appliances" },
  { title: "Fashion", img: "https://rukminim1.flixcart.com/fk-p-flap/240/270/image/bb6b4e0f1f1742ba.png?q=80", q: "fashion" },
  { title: "Beauty", img: "https://rukminim1.flixcart.com/fk-p-flap/240/270/image/cc9ffa84ba07ad69.png?q=80", q: "beauty" },
  { title: "Home", img: "https://rukminim1.flixcart.com/fk-p-flap/240/240/image/9e3d4729e9e9bae3.png?q=80", q: "home" },
  { title: "Furniture", img: "https://rukminim1.flixcart.com/fk-p-flap/240/240/image/5301072c58a4aeda.png?q=80", q: "furniture" },
  { title: "Books", img: "https://rukminim1.flixcart.com/fk-p-flap/240/240/image/ce7bbd890aba0810.png?q=80", q: "books" }
];

const BANNERS = [
  `${IMG}/fk-p-flap/1600/780/image/ff8ef079b2a8e60f.jpg?q=80`,
  `${IMG}/fk-p-flap/1600/780/image/a540f2f76820a041.jpg?q=80`,
  `${IMG}/fk-p-flap/1600/780/image/24a95a2f667637b2.jpg?q=80`,
  `${IMG}/fk-p-flap/1600/780/image/bbb062e364284f4d.jpg?q=80`
];

const SIDE_BANNERS = [
  `${IMG}/fk-p-flap/800/1070/image/b9c5fcd3e19a4662.png?q=80`,
  `${IMG}/fk-p-flap/800/1070/image/5bb6c50cb8379ce5.png?q=80`
];

const DEAL_CARDS = [
  { title: "Step into comfort", offer: "Min. 60% Off", img: `${IMG}/fk-p-flap/400/600/image/8954ff188dfa1e08.png?q=90`, query: "shoes" },
  { title: "Comfort next level", offer: "Up to 70% Off", img: `${IMG}/fk-p-flap/400/600/image/2151faae4f8838bc.png?q=80`, query: "fashion" },
  { title: "Coconut goodness", offer: "Up to 60% Off", img: `${IMG}/fk-p-flap/400/600/image/49444002dde213a4.png?q=80`, query: "beauty" }
];

const HOME_STRIPS = [
  {
    title: "Specials",
    items: [
      { name: "Up to 90% Off", img: `${IMG}/fk-p-flap/400/600/image/8225c545ed31e9e0.png?q=80` },
      { name: "Min. 50% Off", img: `${IMG}/fk-p-flap/400/600/image/ed287d692414524b.png?q=80` },
      { name: "Most-loved", img: `${IMG}/fk-p-flap/400/600/image/9fbbc037a75d8c0f.png?q=80` },
      { name: "Under ₹249", img: `${IMG}/fk-p-flap/400/600/image/8fd1d9a92378d313.png?q=80` }
    ]
  }
];

const UPI_ID = "koushal37@ptyes";
const UPI_NAME = "Koushal";

const QUICK_LINKS = [
  { name: "Credit Card", img: `${IMG}/fk-p-flap/136/136/image/75a341d6579bebf6.png?q=80` },
  { name: "EMI", img: `${IMG}/fk-p-flap/136/136/image/a37b2caa166685a6.png?q=80` },
  { name: "Pay Later", img: `${IMG}/fk-p-flap/400/600/image/3b91adb6bbad4192.png?q=90` },
  { name: "For GenZ", img: `${IMG}/fk-p-flap/400/600/image/0e80210de7eb9777.png?q=80` },
  { name: "Pay", img: `${IMG}/fk-p-flap/400/600/image/14eb0c454c8bbf3c.png?q=80` },
  { name: "Sell Phone", img: `${IMG}/fk-p-flap/400/600/image/73a268290d664f18.png?q=80` },
  { name: "Gift Cards", img: `${IMG}/fk-p-flap/400/600/image/d410b076cbd16fef.png?q=80` }
];

const FASHION = [
  {
    id: "sari-1",
    name: "Woven Banarasi Saree",
    brand: "Saricholi",
    category: "fashion",
    price: 699,
    mrp: 2499,
    rating: 4.1,
    ratingCount: 12840,
    reviews: 920,
    img: `${IMG}/image/280/374/xif0q/sari/1/n/d/free-sc-nv-or-saricholi-unstitched-original-imahzbk4fecqxt4b.jpeg?q=80`,
    images: [`${IMG}/image/416/416/xif0q/sari/1/n/d/free-sc-nv-or-saricholi-unstitched-original-imahzbk4fecqxt4b.jpeg?q=70`],
    highlights: ["Silk blend", "Unstitched", "Party wear"]
  },
  {
    id: "ethnic-1",
    name: "Women Kurta with Palazzo",
    brand: "Mokosh",
    category: "fashion",
    price: 799,
    mrp: 1999,
    rating: 4.2,
    ratingCount: 6401,
    reviews: 410,
    img: `${IMG}/image/280/374/xif0q/ethnic-set/4/d/c/m-544-mk-mokosh-original-imahmd7hrubnztgq.jpeg?q=80`,
    highlights: ["Cotton blend", "Regular fit"]
  },
  {
    id: "shirt-1",
    name: "Men Slim Fit Casual Shirt",
    brand: "Levi's",
    category: "fashion",
    price: 1499,
    mrp: 2999,
    rating: 4.3,
    ratingCount: 2102,
    reviews: 188,
    img: `${IMG}/image/280/374/xif0q/shirt/8/q/n/m-32907-0633-levi-s-original-imahq7usxzcgra4p.jpeg?q=80`,
    highlights: ["Cotton", "Slim fit"]
  },
  {
    id: "kids-1",
    name: "Baby Apparel Combo",
    brand: "Dolzio Fab",
    category: "fashion",
    price: 449,
    mrp: 999,
    rating: 4.0,
    ratingCount: 890,
    reviews: 72,
    img: `${IMG}/image/280/374/xif0q/kids-apparel-combo/i/4/u/3-6-months-sahaj-fashion01-dolzio-fab-original-imah4zc8na5rspam.jpeg?q=80`,
    highlights: ["3-6 months", "Soft cotton"]
  }
];

const PRODUCTS = [
  {
    id: "boltt-evo-black",
    name: "BOLTT EVO (Midnight Black, 64 GB)",
    brand: "BOLTT",
    category: "mobiles",
    color: "Midnight Black",
    price: 9999,
    mrp: 17999,
    rating: 4.3,
    ratingCount: 2048,
    reviews: 987,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/p/l/m/-resized-original-imahqk5pabfpqz4g.jpeg?q=70`,
    images: [
      `${IMG}/image/416/416/xif0q/mobile/p/l/m/-resized-original-imahqk5pabfpqz4g.jpeg?q=70`
    ],
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) HD+ Display",
      "50MP + 2MP | 8MP Front Camera",
      "6000 mAh Lithium ion Battery",
      "T7250 Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device and 6 Months for In-box Accessories.",
    sponsored: true
  },
  {
    id: "moto-g37-power-blue",
    name: "MOTOROLA g37 power (PANTONE Nautical Blue, 128 GB)",
    brand: "MOTOROLA",
    category: "mobiles",
    color: "Nautical Blue",
    price: 19999,
    mrp: 30499,
    rating: 4.2,
    ratingCount: 9755,
    reviews: 866,
    ram: "4 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/w/g/r/-resized-original-imahng2y4zgbb6ej.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/w/g/r/-resized-original-imahng2y4zgbb6ej.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "16.92 cm (6.66 inch) HD+ Display",
      "50MP Rear Camera | 8MP Front Camera",
      "7000 mAh Battery",
      "Dimensity 6400 Processor"
    ],
    warranty: "1 Year on Handset and 6 Months on Accessories",
    comingSoon: true,
    sponsored: true
  },
  {
    id: "nokia-105",
    name: "Nokia 105 Classic Single Sim Keypad Phone, Without Charger",
    brand: "Nokia",
    category: "mobiles",
    color: "Black",
    price: 1019,
    mrp: 1349,
    rating: 4.0,
    ratingCount: 30889,
    reviews: 1589,
    ram: "32 MB",
    rom: "32 MB",
    img: `${IMG}/image/312/312/xif0q/mobile/p/o/i/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-nokia-resized-original-imah2xgc9z6cwcqv.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/p/o/i/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-nokia-resized-original-imah2xgc9z6cwcqv.jpeg?q=70`],
    highlights: [
      "32 MB RAM | 32 MB ROM",
      "4.5 cm (1.77 inch) Display",
      "800 mAh Battery",
      "SC6531E Processor"
    ],
    warranty: "1 Month Company Domestic Warranty",
    bestseller: true
  },
  {
    id: "iphone-16-black",
    name: "Apple iPhone 16 (Black, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Black",
    price: 69900,
    mrp: 79900,
    rating: 4.6,
    ratingCount: 199708,
    reviews: 8642,
    ram: "",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/n/q/h/-resized-original-imahgfmzjj8gtqbc.jpeg?q=70`,
    images: [
      `${IMG}/image/416/416/xif0q/mobile/n/q/h/-resized-original-imahgfmzjj8gtqbc.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/x/k/m/-original-imahfvx37fmsbhhr.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/v/o/i/-original-imahfvx3nmenzzsy.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/0/f/y/-original-imahfvx3dgzhzcje.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/j/o/f/-original-imahfvx3gfzzy2uk.jpeg?q=70`
    ],
    colors: [
      { name: "Black", img: `${IMG}/image/80/110/xif0q/mobile/n/q/h/-resized-original-imahgfmzjj8gtqbc.jpeg?q=90`, id: "iphone-16-black" },
      { name: "Pink", img: `${IMG}/image/80/110/xif0q/mobile/c/v/v/-resized-original-imahgfmypevfehpc.jpeg?q=90`, id: "iphone-16-black" },
      { name: "Teal", img: `${IMG}/image/80/110/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=90`, id: "iphone-16-teal" },
      { name: "Ultramarine", img: `${IMG}/image/80/110/xif0q/mobile/g/l/q/-original-imahgfmzdbnzzjjg.jpeg?q=90`, id: "iphone-16-ultra" },
      { name: "White", img: `${IMG}/image/80/110/xif0q/mobile/h/u/i/-resized-original-imahgfmyczqxhtm2.jpeg?q=90`, id: "iphone-16-black" }
    ],
    variants: [
      { label: "128 GB", price: 69900, stock: 7 },
      { label: "256 GB", price: 79900, stock: 5 },
      { label: "512 GB", price: 99900, stock: 0 }
    ],
    highlights: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "48MP + 12MP | 12MP Front Camera",
      "A18 Chip, 6 Core Processor"
    ],
    warranty: "1 year warranty for phone and 1 year warranty for in Box Accessories.",
    bestseller: true
  },
  {
    id: "iphone-16-teal",
    name: "Apple iPhone 16 (Teal, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Teal",
    price: 69900,
    mrp: 79900,
    rating: 4.6,
    ratingCount: 199708,
    reviews: 8642,
    ram: "",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70`,
    images: [
      `${IMG}/image/416/416/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/x/k/m/-original-imahfvx37fmsbhhr.jpeg?q=70`
    ],
    highlights: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "48MP + 12MP | 12MP Front Camera",
      "A18 Chip, 6 Core Processor"
    ],
    warranty: "1 year warranty for phone and 1 year warranty for in Box Accessories."
  },
  {
    id: "iphone-16-ultra",
    name: "Apple iPhone 16 (Ultramarine, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Ultramarine",
    price: 69900,
    mrp: 79900,
    rating: 4.6,
    ratingCount: 199708,
    reviews: 8642,
    ram: "",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/g/l/q/-original-imahgfmzdbnzzjjg.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/g/l/q/-original-imahgfmzdbnzzjjg.jpeg?q=70`],
    highlights: [
      "128 GB ROM",
      "15.49 cm (6.1 inch) Super Retina XDR Display",
      "48MP + 12MP | 12MP Front Camera",
      "A18 Chip, 6 Core Processor"
    ],
    warranty: "1 year warranty for phone and 1 year warranty for in Box Accessories."
  },
  {
    id: "oppo-k14",
    name: "OPPO K14 Plus 5G (Star White, 128 GB)",
    brand: "OPPO",
    category: "mobiles",
    color: "Star White",
    price: 29999,
    mrp: 61999,
    rating: 4.7,
    ratingCount: 166,
    reviews: 90,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=70`],
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "17.22 cm (6.78 inch) Full HD+ AMOLED Display",
      "50MP + 2MP | 16MP Front Camera",
      "8000 mAh Battery",
      "Dimensity 7360 MAX Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device and 6 Months for Inbox Accessories"
  },
  {
    id: "oppo-k14x",
    name: "OPPO K14x 5G (Prism Violet, 64 GB)",
    brand: "OPPO",
    category: "mobiles",
    color: "Prism Violet",
    price: 18999,
    mrp: 19999,
    rating: 4.3,
    ratingCount: 8442,
    reviews: 612,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=70`,
    images: [
      `${IMG}/image/416/416/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/t/r/o/-original-imahjwcmjfzax5rj.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/p/l/m/-resized-original-imahqk5pabfpqz4g.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/mobile/w/g/r/-resized-original-imahng2y4zgbb6ej.jpeg?q=70`
    ],
    colors: [
      { name: "Prism Violet", img: `${IMG}/image/80/110/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=90`, id: "oppo-k14x" },
      { name: "Star White", img: `${IMG}/image/80/110/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=90`, id: "oppo-k14" }
    ],
    variants: [
      { label: "64 GB + 4 GB", price: 18999, stock: 8 },
      { label: "128 GB + 4 GB", price: 21999, stock: 5 },
      { label: "128 GB + 6 GB", price: 24999, stock: 4 }
    ],
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "Dimensity 6300 | Octa Core Processor | 2.4 GHz Clock Speed",
      "50MP + 2MP Rear Camera",
      "5MP Front Camera",
      "17.14 cm (6.75 inch) HD+ Display",
      "6500 mAh Battery"
    ],
    warranty: "1 Year Manufacturer Warranty for Device and 6 Months Manufacturer Warranty for Inbox Accessories"
  },
  {
    id: "boltt-ace-lavender",
    name: "BOLTT ACE 5G (Lavender Bloom, 128 GB)",
    brand: "BOLTT",
    category: "mobiles",
    color: "Lavender Bloom",
    price: 14999,
    mrp: 26999,
    rating: 4.8,
    ratingCount: 69,
    reviews: 59,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/t/s/f/-resized-original-imahqk5prvgsmfzv.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/t/s/f/-resized-original-imahqk5prvgsmfzv.jpeg?q=70`],
    highlights: [
      "6 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) HD+ Display",
      "64MP Rear Camera | 8MP Front Camera",
      "6000 mAh Lithium ion Battery",
      "T8200 Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device",
    comingSoon: true
  },
  {
    id: "samsung-f07",
    name: "Samsung Galaxy F07 (Green, 64 GB)",
    brand: "Samsung",
    category: "mobiles",
    color: "Green",
    price: 11999,
    mrp: 16999,
    rating: 4.2,
    ratingCount: 10958,
    reviews: 791,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/t/r/o/-original-imahjwcmjfzax5rj.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/t/r/o/-original-imahjwcmjfzax5rj.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
      "17.02 cm (6.7 inch) Full HD+ Super AMOLED Display",
      "50MP + 2MP | 8MP Front Camera",
      "5000 mAh Battery",
      "Helio G99 Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device"
  },
  {
    id: "boltt-evo-red",
    name: "BOLTT EVO (Berry Red, 64 GB)",
    brand: "BOLTT",
    category: "mobiles",
    color: "Berry Red",
    price: 9999,
    mrp: 17999,
    rating: 4.3,
    ratingCount: 2048,
    reviews: 987,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/d/b/p/-resized-original-imahqk5pywazwh3t.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/d/b/p/-resized-original-imahqk5pywazwh3t.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) HD+ Display",
      "50MP + 2MP | 8MP Front Camera",
      "6000 mAh Lithium ion Battery",
      "T7250 Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device"
  },
  {
    id: "pixel-11",
    name: "Google Pixel 11 (Frost, 256 GB)",
    brand: "Google",
    category: "mobiles",
    color: "Frost",
    price: 89999,
    mrp: 99999,
    rating: 4.5,
    ratingCount: 403,
    reviews: 75,
    ram: "12 GB",
    rom: "256 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/j/8/e/-resized-original-imahqszeftuehhhq.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/j/8/e/-resized-original-imahqszeftuehhhq.jpeg?q=70`],
    highlights: [
      "12 GB RAM | 256 GB ROM",
      "16.0 cm (6.3 inch) Actua Display",
      "48MP + 13MP + 10.8MP | 10.5MP Front Camera",
      "4985 mAh Lithium Battery",
      "Tensor G6 Processor"
    ],
    warranty: "1 year domestic warranty",
    comingSoon: true
  },
  {
    id: "redmi-a7",
    name: "REDMI A7 Pro 5G (Black, 64 GB)",
    brand: "REDMI",
    category: "mobiles",
    color: "Black",
    price: 14480,
    mrp: 26999,
    rating: 3.9,
    ratingCount: 4902,
    reviews: 450,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/g/3/l/a7-pro-5g-a7-pro-5g-redmi-resized-original-imahmp4gh9ghf8mj.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/g/3/l/a7-pro-5g-a7-pro-5g-redmi-resized-original-imahmp4gh9ghf8mj.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "17.53 cm (6.9 inch) Full HD+ Display",
      "32MP Rear Camera",
      "6300 mAh Battery",
      "UNISOC T8300 octa-core processor"
    ],
    warranty: "1 year manufacturer warranty for device"
  },
  {
    id: "vivo-t4-lite",
    name: "Vivo T4 Lite 5G (Prism Blue 2026) (4GB 64GB)",
    brand: "vivo",
    category: "mobiles",
    color: "Prism Blue",
    price: 16999,
    mrp: 27999,
    rating: 4.3,
    ratingCount: 45006,
    reviews: 2077,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/4/r/i/-original-imahnq7mcqxru4nv.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/4/r/i/-original-imahnq7mcqxru4nv.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
      "17.12 cm (6.74 inch) HD+ Display",
      "50MP + 2MP | 5MP Front Camera",
      "6000 mAh Battery",
      "Dimensity 6300 5G Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device"
  },
  {
    id: "moto-g37",
    name: "MOTOROLA g37 (PANTONE Nautical Blue, 64 GB)",
    brand: "MOTOROLA",
    category: "mobiles",
    color: "Nautical Blue",
    price: 17249,
    mrp: 24999,
    rating: 4.3,
    ratingCount: 4151,
    reviews: 226,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/0/n/0/-original-imahnftfrdzqnhgz.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/0/n/0/-original-imahnftfrdzqnhgz.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 1 TB",
      "16.92 cm (6.66 inch) HD+ Display",
      "50MP Rear Camera | 8MP Front Camera",
      "5200 mAh Battery",
      "Dimensity 6400 Processor"
    ],
    warranty: "1 Year on Handset and 6 Months on Accessories"
  },
  {
    id: "realme-p4",
    name: "realme P4 Lite 5G (Mosaic Blue, 128 GB)",
    brand: "realme",
    category: "mobiles",
    color: "Mosaic Blue",
    price: 20999,
    mrp: 32999,
    rating: 4.2,
    ratingCount: 15151,
    reviews: 939,
    ram: "4 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/q/z/a/-resized-original-imahhngs3z46gnew.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/q/z/a/-resized-original-imahhngs3z46gnew.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 128 GB ROM",
      "17.27 cm (6.8 inches) HD+ Display",
      "13MP Rear Camera | 5MP Front Camera",
      "7000 mAh lithium-ion polymer Battery",
      "Dimensity 6300 Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Device"
  },
  {
    id: "lava-virat",
    name: "LAVA Virat V1 5G (Sonar Gold, 64 GB)",
    brand: "LAVA",
    category: "mobiles",
    color: "Sonar Gold",
    price: 13499,
    mrp: 15999,
    rating: 4.1,
    ratingCount: 1351,
    reviews: 305,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/t/3/z/-resized-original-imahpr8jhwewj22f.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/t/3/z/-resized-original-imahpr8jhwewj22f.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM",
      "17.14 cm (6.75 inch) Display",
      "13MP Rear Camera",
      "6000 mAh Battery"
    ],
    warranty: "1 Year Manufacturer Warranty for Device"
  },
  {
    id: "poco-c85x",
    name: "POCO C85x 5G (Elite Black, 64 GB)",
    brand: "POCO",
    category: "mobiles",
    color: "Elite Black",
    price: 14999,
    mrp: 20999,
    rating: 4.1,
    ratingCount: 6075,
    reviews: 812,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/k/g/n/-resized-original-imahmqgabnzytsgk.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/k/g/n/-resized-original-imahmqgabnzytsgk.jpeg?q=70`],
    highlights: [
      "4 GB RAM | 64 GB ROM | Expandable Upto 2 TB",
      "17.53 cm (6.9 inch) HD+ Display",
      "32MP Rear Camera",
      "6300 mAh Lithium-Ion Polymer Battery",
      "T8300 Processor"
    ],
    warranty: "1 Year Manufacturer Warranty for Phone"
  },
  {
    id: "vivo-t5-lite",
    name: "vivo T5 Lite 44W 5G (Wave Blue, 128 GB)",
    brand: "vivo",
    category: "mobiles",
    color: "Wave Blue",
    price: 22999,
    mrp: 38499,
    rating: 4.3,
    ratingCount: 3729,
    reviews: 291,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/i/s/8/-resized-original-imahpdsc5rjnucdy.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/i/s/8/-resized-original-imahpdsc5rjnucdy.jpeg?q=70`],
    highlights: [
      "6 GB RAM | 128 GB ROM",
      "17.12 cm (6.74 inch) HD+ Display",
      "50MP + 0.08MP | 5MP Front Camera",
      "6500 mAh Li-ion Battery",
      "Dimensity 6300 5G Processor"
    ],
    warranty: "1 Year Warranty on the Handset"
  },
  {
    id: "shaver-1",
    name: "Professional Hair Trimmer 60 min Runtime",
    brand: "Shaver",
    category: "electronics",
    price: 499,
    mrp: 1499,
    rating: 4.1,
    ratingCount: 22010,
    reviews: 1802,
    img: `${IMG}/image/280/374/xif0q/shaver/z/d/j/professional-hair-trimmer-trimmer-60-min-runtime-4-length-shaver-original-imahqkgyy9b8pqtu.jpeg?q=80`,
    highlights: ["60 min runtime", "Cordless", "4 length settings"]
  },
  {
    id: "massager-1",
    name: "Shoulder Massager with Heat",
    brand: "Wellness",
    category: "electronics",
    price: 899,
    mrp: 2499,
    rating: 4.0,
    ratingCount: 5402,
    reviews: 401,
    img: `${IMG}/image/280/374/xif0q/h-b-massager/z/4/3/shoulder-massager-heat-for-pain-relief-muscle-relaxation-stress-original-imahmx8bqhhghfk8.jpeg?q=80`,
    highlights: ["Heat therapy", "Pain relief"]
  },
  {
    id: "trimmer-1",
    name: "Cordless Professional Hair Trimmer",
    brand: "OP",
    category: "electronics",
    price: 399,
    mrp: 999,
    rating: 3.9,
    ratingCount: 8120,
    reviews: 612,
    img: `${IMG}/image/280/374/xif0q/trimmer/4/e/m/0-5-12-mm-op-11-cordless-professional-hair-trimmer-titanium-original-imahehx3ugrgjdcw.jpeg?q=80`,
    highlights: ["Titanium blades", "Cordless"]
  },
  {
    id: "scooter-1",
    name: "Electric Bike / Scooter",
    brand: "EV",
    category: "two-wheelers",
    price: 89999,
    mrp: 129999,
    rating: 4.2,
    ratingCount: 980,
    reviews: 120,
    img: `${IMG}/image/280/374/xif0q/electric-bike-scooter/q/y/f/-original-imahpvyggdanfjzm.jpeg?q=80`,
    highlights: ["Electric", "Special offer"]
  }
].concat(FASHION, [
  {
    id: "iphone-17-black",
    name: "Apple iPhone 17 (Black, 256 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Black",
    price: 82900,
    mrp: 89900,
    rating: 4.6,
    ratingCount: 28706,
    reviews: 2057,
    ram: "",
    rom: "256 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/2/p/o/-original-imahqvad9pbyujab.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/2/p/o/-original-imahqvad9pbyujab.jpeg?q=70`],
    highlights: ["256 GB ROM", "15.49 cm Super Retina XDR Display", "A19 Chip"],
    warranty: "1 year warranty for phone",
    bestseller: true
  },
  {
    id: "oppo-k14-orange",
    name: "OPPO K14 Plus 5G (Solar Orange, 128 GB)",
    brand: "OPPO",
    category: "mobiles",
    color: "Solar Orange",
    price: 29999,
    mrp: 61999,
    rating: 4.7,
    ratingCount: 166,
    reviews: 90,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/r/1/d/-original-imahrnf4cmgvsneb.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/r/1/d/-original-imahrnf4cmgvsneb.jpeg?q=70`],
    highlights: ["6 GB RAM | 128 GB ROM", "17.22 cm AMOLED Display", "50MP + 2MP Camera", "8000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty",
    sponsored: true
  },
  {
    id: "vivo-t4-gold",
    name: "Vivo T4 Lite 5G (Titanium Gold 2026) (4GB 64GB)",
    brand: "vivo",
    category: "mobiles",
    color: "Titanium Gold",
    price: 16999,
    mrp: 27999,
    rating: 4.3,
    ratingCount: 45006,
    reviews: 2077,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/b/i/5/-original-imahnq7mvm2mpymg.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/b/i/5/-original-imahnq7mvm2mpymg.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "17.12 cm HD+ Display", "50MP Camera", "6000 mAh Battery"]
  },
  {
    id: "headphones-boat",
    name: "boAt Rockerz 255 Pro+ Bluetooth Neckband",
    brand: "boAt",
    category: "electronics",
    price: 999,
    mrp: 3990,
    rating: 4.2,
    ratingCount: 892101,
    reviews: 71200,
    img: `${IMG}/image/312/312/xif0q/headphone/1/8/n/-original-imagz5kbdhu4vzez.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/headphone/1/8/n/-original-imagz5kbdhu4vzez.jpeg?q=70`],
    highlights: ["40 Hours Playback", "IPX5 Water Resistant", "ASAP Charge"]
  },
  {
    id: "watch-noise",
    name: "Noise ColorFit Pulse 2 Max Smartwatch",
    brand: "Noise",
    category: "electronics",
    price: 1299,
    mrp: 5999,
    rating: 4.1,
    ratingCount: 210344,
    reviews: 18402,
    img: `${IMG}/image/312/312/xif0q/smartwatch/s/q/o/-original-imagxp8u6hcuuz9g.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/smartwatch/s/q/o/-original-imagxp8u6hcuuz9g.jpeg?q=70`],
    highlights: ["1.85 inch Display", "SpO2", "100+ Watch Faces"]
  },
  {
    id: "laptop-asus",
    name: "ASUS Vivobook 15 Intel Core i5 12th Gen",
    brand: "ASUS",
    category: "electronics",
    price: 47990,
    mrp: 69990,
    rating: 4.3,
    ratingCount: 18402,
    reviews: 1650,
    img: `${IMG}/image/312/312/xif0q/computer/n/o/s/-original-imagqkqnb2gyhhv3.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/computer/n/o/s/-original-imagqkqnb2gyhhv3.jpeg?q=70`],
    highlights: ["16 GB RAM | 512 GB SSD", "15.6 inch FHD", "Windows 11"]
  },
  {
    id: "cream-nivea",
    name: "NIVEA Soft Light Moisturiser 300 ml",
    brand: "NIVEA",
    category: "beauty",
    price: 249,
    mrp: 425,
    rating: 4.4,
    ratingCount: 301201,
    reviews: 22010,
    img: `${IMG}/image/312/312/xif0q/moisturizer-cream/v/q/l/-original-imags28zqzzxdhuz.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/moisturizer-cream/v/q/l/-original-imags28zqzzxdhuz.jpeg?q=70`],
    highlights: ["Vitamin E & Jojoba Oil", "For face, hands & body"]
  },
  {
    id: "perfume-1",
    name: "Fogg Scent Beautiful Secret Eau de Parfum",
    brand: "FOGG",
    category: "beauty",
    price: 299,
    mrp: 599,
    rating: 4.1,
    ratingCount: 54021,
    reviews: 4102,
    img: `${IMG}/image/312/312/xif0q/perfume/s/k/h/-original-imagqtxf8qkzvzg8.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/perfume/s/k/h/-original-imagqtxf8qkzvzg8.jpeg?q=70`],
    highlights: ["Long lasting", "50 ml"]
  },
  {
    id: "bedsheet-1",
    name: "Cotton Double Bedsheet with 2 Pillow Covers",
    brand: "Home",
    category: "home",
    price: 399,
    mrp: 1299,
    rating: 4.0,
    ratingCount: 88201,
    reviews: 6201,
    img: `${IMG}/image/312/312/xif0q/bedsheet/k/g/j/-original-imags4kzhgzzhzzg.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/bedsheet/k/g/j/-original-imags4kzhgzzhzzg.jpeg?q=70`],
    highlights: ["Cotton", "King size"]
  },
  {
    id: "cooker-1",
    name: "Hawkins Classic Pressure Cooker 5 L",
    brand: "Hawkins",
    category: "home",
    price: 1299,
    mrp: 1895,
    rating: 4.5,
    ratingCount: 120340,
    reviews: 9801,
    img: `${IMG}/image/312/312/xif0q/pressure-cooker/p/1/k/-original-imagqz8kqz8kqzz8.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/pressure-cooker/p/1/k/-original-imagqz8kqz8kqzz8.jpeg?q=70`],
    highlights: ["5 Litre", "Aluminium"]
  },
  {
    id: "tv-samsung",
    name: "SAMSUNG 80 cm (32 inch) HD Ready LED Smart TV",
    brand: "Samsung",
    category: "appliances",
    price: 12490,
    mrp: 18900,
    rating: 4.3,
    ratingCount: 210045,
    reviews: 18002,
    img: `${IMG}/image/312/312/xif0q/television/i/a/q/-original-imaggsnk5zhpz3gh.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/television/i/a/q/-original-imaggsnk5zhpz3gh.jpeg?q=70`],
    highlights: ["HD Ready", "Smart TV", "1 Year Warranty"]
  },
  {
    id: "wm-lg",
    name: "LG 7 kg 5 Star Fully Automatic Top Load",
    brand: "LG",
    category: "appliances",
    price: 16990,
    mrp: 23990,
    rating: 4.4,
    ratingCount: 54021,
    reviews: 4102,
    img: `${IMG}/image/312/312/xif0q/washing-machine-new/k/q/l/-original-imagx7kqz7kzqz7k.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/washing-machine-new/k/q/l/-original-imagx7kqz7kzqz7k.jpeg?q=70`],
    highlights: ["7 kg", "5 Star", "Smart Diagnosis"]
  },
  {
    id: "toy-1",
    name: "Remote Control Racing Car",
    brand: "Toys",
    category: "toys",
    price: 499,
    mrp: 1499,
    rating: 4.0,
    ratingCount: 12034,
    reviews: 980,
    img: `${IMG}/image/312/312/xif0q/remote-control-toy/k/p/l/-original-imags4toyrcar001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/remote-control-toy/k/p/l/-original-imags4toyrcar001.jpeg?q=70`],
    highlights: ["Rechargeable", "Ages 3+"]
  },
  {
    id: "food-1",
    name: "Tata Sampann Unpolished Toor Dal 1 kg",
    brand: "Tata",
    category: "food",
    price: 168,
    mrp: 210,
    rating: 4.5,
    ratingCount: 89012,
    reviews: 5401,
    img: `${IMG}/image/312/312/xif0q/pulses/k/q/l/-original-imags4dal001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/pulses/k/q/l/-original-imags4dal001.jpeg?q=70`],
    highlights: ["1 kg", "Unpolished"]
  },
  {
    id: "car-cover",
    name: "Waterproof Car Body Cover",
    brand: "Auto",
    category: "auto",
    price: 699,
    mrp: 1999,
    rating: 4.0,
    ratingCount: 34021,
    reviews: 2100,
    img: `${IMG}/image/312/312/xif0q/car-cover/k/q/l/-original-imags4car001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/car-cover/k/q/l/-original-imags4car001.jpeg?q=70`],
    highlights: ["UV protection", "Universal fit"]
  },
  {
    id: "yoga-mat",
    name: "Yoga Mat 6 mm Anti-Skid",
    brand: "Fitness",
    category: "sports",
    price: 299,
    mrp: 999,
    rating: 4.2,
    ratingCount: 67012,
    reviews: 4100,
    img: `${IMG}/image/312/312/xif0q/sport-mat/k/q/l/-original-imags4yoga001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/sport-mat/k/q/l/-original-imags4yoga001.jpeg?q=70`],
    highlights: ["6 mm", "Anti-skid"]
  },
  {
    id: "sofa-1",
    name: "Fabric 3 Seater Sofa",
    brand: "Furniture",
    category: "furniture",
    price: 12999,
    mrp: 24999,
    rating: 4.1,
    ratingCount: 8901,
    reviews: 612,
    img: `${IMG}/image/312/312/xif0q/sofa-sectional/k/q/l/-original-imags4sofa001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/sofa-sectional/k/q/l/-original-imags4sofa001.jpeg?q=70`],
    highlights: ["3 seater", "Fabric upholstery"]
  },
  {
    id: "book-1",
    name: "Atomic Habits (Paperback)",
    brand: "Books",
    category: "books",
    price: 399,
    mrp: 799,
    rating: 4.7,
    ratingCount: 210045,
    reviews: 18002,
    img: `${IMG}/image/312/312/xif0q/book/k/q/l/-original-imags4book001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/book/k/q/l/-original-imags4book001.jpeg?q=70`],
    highlights: ["English", "Paperback"]
  }
]);

function discount(p) {
  if (!p.mrp || p.mrp <= p.price) return 0;
  return Math.round(((p.mrp - p.price) / p.mrp) * 100);
}

function inr(n) {
  return "₹" + Number(n).toLocaleString("en-IN");
}

function countLabel(n) {
  return Number(n).toLocaleString("en-IN");
}

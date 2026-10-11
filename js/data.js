const IMG = "https://rukminim2.flixcart.com";
const STATIC = "https://static-assets-web.flixcart.com";

const LOGO_APP = "/img/fk-logo.jpg";
const LOGO_CLASSIC = `${STATIC}/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png`;
const LOGO_PLUS = `${STATIC}/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png`;
const ASSURED = `${STATIC}/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png`;
const CART_ICON = `${STATIC}/batman-returns/batman-returns/p/images/header_cart_v4-6ac9a8.svg`;
const USER_ICON = `${STATIC}/batman-returns/batman-returns/p/images/profile-52e0dc.svg`;

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
  { title: "Step into comfort", offer: "Min. 60% Off", img: `${IMG}/fk-p-flap/400/600/image/8954ff188dfa1e08.png?q=90`, query: "fashion" },
  { title: "Comfort next level", offer: "Up to 70% Off", img: `${IMG}/fk-p-flap/400/600/image/2151faae4f8838bc.png?q=80`, query: "fashion" },
  { title: "Coconut goodness", offer: "Up to 60% Off", img: `${IMG}/fk-p-flap/400/600/image/49444002dde213a4.png?q=80`, query: "beauty" }
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

/* Fashion — product galleries use same-SKU catalog images; sale prices are kept low for the deals page. */
const FASHION = [
  {
    id: "pe-shirt-blue",
    name: "PETER ENGLAND Men Slim Fit Solid Spread Collar Formal Shirt",
    brand: "PETER ENGLAND",
    category: "fashion",
    price: 149,
    mrp: 899,
    rating: 4.1,
    ratingCount: 83,
    reviews: 12,
    /* product: pesfoslpd87329 — all images from same Flipkart PDP */
    img: `${IMG}/image/280/374/xif0q/shirt/b/g/g/46-pesfoslpd87329-peter-england-resized-original-imagjfw8mnkvrzty.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/shirt/b/g/g/46-pesfoslpd87329-peter-england-resized-original-imagjfw8mnkvrzty.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/shirt/8/j/w/46-pesfoslpd87329-peter-england-original-imagjfw885u3zmnn.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/shirt/o/r/z/46-pesfoslpd87329-peter-england-original-imagjfw8sbhtphfr.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/shirt/i/t/0/46-pesfoslpd87329-peter-england-original-imagjfw8bpvee8py.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/shirt/s/z/r/46-pesfoslpd87329-peter-england-original-imagjfw8faqyyut5.jpeg?q=70`
    ],
    highlights: ["Pure Cotton", "Slim Fit, Full Sleeve", "Solid Formal"]
  },
  {
    id: "pe-shirt-white",
    name: "PETER ENGLAND Men Slim Fit Printed Formal Shirt",
    brand: "PETER ENGLAND",
    category: "fashion",
    price: 139,
    mrp: 799,
    rating: 4.2,
    ratingCount: 88,
    reviews: 15,
    img: `${IMG}/image/280/374/xif0q/shirt/w/s/u/42-pesfwslp305230-peter-england-original-imahbyseghvkn6kj.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/shirt/w/s/u/42-pesfwslp305230-peter-england-original-imahbyseghvkn6kj.jpeg?q=70`
    ],
    highlights: ["Pure Cotton", "Slim Fit", "Printed Formal"]
  },
  {
    id: "vd-shirt-blue",
    name: "vdlooks Men Regular Fit Striped Casual Shirt",
    brand: "vdlooks",
    category: "fashion",
    price: 129,
    mrp: 799,
    rating: 4.0,
    ratingCount: 2140,
    reviews: 180,
    img: `${IMG}/image/280/374/xif0q/shirt/g/e/r/m-lipi-lf-2-0-2-180-blue-vdlooks-original-imahnzrxbkhzc8dg.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/shirt/g/e/r/m-lipi-lf-2-0-2-180-blue-vdlooks-original-imahnzrxbkhzc8dg.jpeg?q=70`
    ],
    highlights: ["Regular Fit", "Striped", "Casual"]
  },
  {
    id: "vd-shirt-pink",
    name: "vdlooks Men Regular Fit Striped Casual Shirt (Pink)",
    brand: "vdlooks",
    category: "fashion",
    price: 129,
    mrp: 799,
    rating: 3.9,
    ratingCount: 980,
    reviews: 72,
    img: `${IMG}/image/280/374/xif0q/shirt/g/4/b/s-lipi-lf-2-0-2-181-pink-vdlooks-original-imahnzrw5jeqg8kk.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/shirt/g/4/b/s-lipi-lf-2-0-2-181-pink-vdlooks-original-imahnzrw5jeqg8kk.jpeg?q=70`
    ],
    highlights: ["Regular Fit", "Striped", "Casual"]
  },
  {
    id: "libas-kurta-combo",
    name: "LIBAS Women Cotton Blend Kurta Pant Dupatta Set",
    brand: "LIBAS",
    category: "fashion",
    price: 249,
    mrp: 999,
    rating: 4.2,
    ratingCount: 25,
    reviews: 8,
    /* product: 99253h-libas — all images from same Flipkart PDP */
    img: `${IMG}/image/280/374/xif0q/ethnic-set/3/c/h/3xl-99253h-libas-original-imahewdewkgkpfkg.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/ethnic-set/3/c/h/3xl-99253h-libas-original-imahewdewkgkpfkg.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/ethnic-set/i/g/v/3xl-99253h-libas-original-imahewdegwcxgkj7.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/ethnic-set/o/l/g/3xl-99253h-libas-original-imahewdefqxgjats.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/ethnic-set/q/o/u/3xl-99253h-libas-original-imahewdeztmwdrvc.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/ethnic-set/i/z/9/3xl-99253h-libas-original-imahewdeycf8f7gd.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/ethnic-set/c/j/l/3xl-99253h-libas-original-imahewdeqbknrnfg.jpeg?q=70`
    ],
    highlights: ["Kurta + Pant + Dupatta Combo", "Cotton Blend", "3/4 Sleeve"]
  },
  {
    id: "vaaneep-kurta-combo",
    name: "Vaaneep Women Cotton Blend Kurta Pant Dupatta Set",
    brand: "Vaaneep",
    category: "fashion",
    price: 229,
    mrp: 999,
    rating: 4.0,
    ratingCount: 640,
    reviews: 48,
    img: `${IMG}/image/280/374/xif0q/ethnic-set/o/o/8/s-duppata-v-blue-lace-vaaneep-resized-original-imahzayxafhgbq2h.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/ethnic-set/o/o/8/s-duppata-v-blue-lace-vaaneep-resized-original-imahzayxafhgbq2h.jpeg?q=70`
    ],
    highlights: ["Kurta + Pant + Dupatta Combo", "Cotton Blend"]
  },
  {
    id: "shefair-kurta-combo",
    name: "Shefair Women Jacquard Kurta Pant Dupatta Set",
    brand: "Shefair",
    category: "fashion",
    price: 229,
    mrp: 899,
    rating: 3.9,
    ratingCount: 410,
    reviews: 32,
    img: `${IMG}/image/280/374/xif0q/ethnic-set/g/p/5/xxl-jaquard-humeraprint-set-shefair-original-imahrbvddmg4djnk.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/ethnic-set/g/p/5/xxl-jaquard-humeraprint-set-shefair-original-imahrbvddmg4djnk.jpeg?q=70`
    ],
    highlights: ["3-piece Combo", "Jacquard Print"]
  },
  {
    id: "wrogn-jeans",
    name: "WROGN Men Slim Mid Rise Blue Jeans",
    brand: "WROGN",
    category: "fashion",
    price: 449,
    mrp: 899,
    rating: 4.0,
    ratingCount: 138,
    reviews: 22,
    /* product: wujn2855mf — gallery from Flipkart PDP only */
    img: `${IMG}/image/280/374/xif0q/jean/t/6/i/-original-imahq7dyts5bavav.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/jean/t/6/i/-original-imahq7dyts5bavav.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/jean/h/m/c/32-wujn2855mf-wrogn-original-imahec8e87yb4wdc.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/jean/t/t/p/32-wujn2855mf-wrogn-original-imahec8e3dsmw5jw.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/jean/f/n/v/32-wujn2855mf-wrogn-original-imahec8eznn2mauh.jpeg?q=70`,
      `${IMG}/image/416/416/xif0q/jean/c/p/l/32-wujn2855mf-wrogn-original-imahec8epqzpntn5.jpeg?q=70`
    ],
    highlights: ["Slim Fit", "Mid Rise", "Blue Jeans"]
  },
  {
    id: "lzard-jeans",
    name: "LZARD Men Slim Mid Rise Dark Blue Jeans",
    brand: "LZARD",
    category: "fashion",
    price: 399,
    mrp: 799,
    rating: 3.9,
    ratingCount: 2100,
    reviews: 140,
    img: `${IMG}/image/280/374/xif0q/jean/a/z/c/30-ljmpv005-lzard-original-imahe4hbreehzfug.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/jean/a/z/c/30-ljmpv005-lzard-original-imahe4hbreehzfug.jpeg?q=70`
    ],
    highlights: ["Slim Fit", "Dark Blue"]
  },
  {
    id: "kids-combo",
    name: "Baby Boys & Girls Apparel Combo Pack",
    brand: "Dolzio Fab",
    category: "fashion",
    price: 229,
    mrp: 999,
    rating: 4.0,
    ratingCount: 890,
    reviews: 72,
    img: `${IMG}/image/280/374/xif0q/kids-apparel-combo/i/4/u/3-6-months-sahaj-fashion01-dolzio-fab-original-imah4zc8na5rspam.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/kids-apparel-combo/i/4/u/3-6-months-sahaj-fashion01-dolzio-fab-original-imah4zc8na5rspam.jpeg?q=70`
    ],
    highlights: ["Kids Combo Pack", "3-6 months", "Soft cotton"]
  },
  {
    id: "sari-1",
    name: "Woven Banarasi Saree",
    brand: "Saricholi",
    category: "fashion",
    price: 249,
    mrp: 899,
    rating: 4.1,
    ratingCount: 12840,
    reviews: 920,
    img: `${IMG}/image/280/374/xif0q/sari/1/n/d/free-sc-nv-or-saricholi-unstitched-original-imahzbk4fecqxt4b.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/sari/1/n/d/free-sc-nv-or-saricholi-unstitched-original-imahzbk4fecqxt4b.jpeg?q=70`
    ],
    highlights: ["Silk blend", "Party wear"]
  },
  {
    id: "arrow-shirt",
    name: "ARROW Men Slim Fit Checkered Casual Shirt",
    brand: "ARROW",
    category: "fashion",
    price: 149,
    mrp: 999,
    rating: 4.2,
    ratingCount: 540,
    reviews: 48,
    img: `${IMG}/image/280/374/xif0q/shirt/u/p/w/40-araeosh3245-arrow-original-imahncq9gmdmkfag.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/shirt/u/p/w/40-araeosh3245-arrow-original-imahncq9gmdmkfag.jpeg?q=70`
    ],
    highlights: ["Checkered", "Slim Fit", "Casual"]
  },
  {
    id: "levis-shirt",
    name: "Levi's Men Slim Fit Casual Shirt",
    brand: "Levi's",
    category: "fashion",
    price: 139,
    mrp: 999,
    rating: 4.3,
    ratingCount: 2102,
    reviews: 188,
    img: `${IMG}/image/280/374/xif0q/shirt/8/q/n/m-32907-0633-levi-s-original-imahq7usxzcgra4p.jpeg?q=80`,
    images: [
      `${IMG}/image/416/416/xif0q/shirt/8/q/n/m-32907-0633-levi-s-original-imahq7usxzcgra4p.jpeg?q=70`
    ],
    highlights: ["Cotton", "Slim fit"]
  }
];

/* Mobiles — all selling prices under ₹5000 (max ₹4599) */
const PRODUCTS = [
  {
    id: "boltt-evo-black",
    name: "BOLTT EVO (Midnight Black, 64 GB)",
    brand: "BOLTT",
    category: "mobiles",
    color: "Midnight Black",
    price: 1299,
    mrp: 2599,
    rating: 4.3,
    ratingCount: 2048,
    reviews: 987,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/p/l/m/-resized-original-imahqk5pabfpqz4g.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/p/l/m/-resized-original-imahqk5pabfpqz4g.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6.79 inch HD+ Display", "50MP Camera", "6000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty",
    sponsored: true
  },
  {
    id: "moto-g37-power-blue",
    name: "MOTOROLA g37 power (Nautical Blue, 128 GB)",
    brand: "MOTOROLA",
    category: "mobiles",
    color: "Nautical Blue",
    price: 2499,
    mrp: 4999,
    rating: 4.2,
    ratingCount: 9755,
    reviews: 866,
    ram: "4 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/w/g/r/-resized-original-imahng2y4zgbb6ej.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/w/g/r/-resized-original-imahng2y4zgbb6ej.jpeg?q=70`],
    highlights: ["4 GB RAM | 128 GB ROM", "7000 mAh Battery", "Dimensity 6400"],
    warranty: "1 Year on Handset",
    sponsored: true
  },
  {
    id: "nokia-105",
    name: "Nokia 105 Classic Keypad Phone",
    brand: "Nokia",
    category: "mobiles",
    color: "Black",
    price: 999,
    mrp: 1499,
    rating: 4.0,
    ratingCount: 30889,
    reviews: 1589,
    ram: "32 MB",
    rom: "32 MB",
    img: `${IMG}/image/312/312/xif0q/mobile/p/o/i/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-nokia-resized-original-imah2xgc9z6cwcqv.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/p/o/i/105-single-sim-keypad-mobile-phone-with-wireless-fm-radio-nokia-resized-original-imah2xgc9z6cwcqv.jpeg?q=70`],
    highlights: ["Keypad Phone", "800 mAh Battery"],
    warranty: "1 Month Domestic Warranty",
    bestseller: true
  },
  {
    id: "iphone-16-black",
    name: "Apple iPhone 16 (Black, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Black",
    price: 4499,
    mrp: 8999,
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
      { name: "Teal", img: `${IMG}/image/80/110/xif0q/mobile/o/l/2/-original-imahgfmzvanpgncf.jpeg?q=90`, id: "iphone-16-teal" },
      { name: "Ultramarine", img: `${IMG}/image/80/110/xif0q/mobile/g/l/q/-original-imahgfmzdbnzzjjg.jpeg?q=90`, id: "iphone-16-ultra" }
    ],
    variants: [
      { label: "128 GB", price: 4499, stock: 7 },
      { label: "256 GB", price: 4599, stock: 5 },
      { label: "512 GB", price: 4599, stock: 0 }
    ],
    highlights: ["128 GB ROM", "Super Retina XDR Display", "A18 Chip"],
    warranty: "1 year warranty",
    bestseller: true
  },
  {
    id: "iphone-16-teal",
    name: "Apple iPhone 16 (Teal, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Teal",
    price: 4499,
    mrp: 8999,
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
    highlights: ["128 GB ROM", "Super Retina XDR Display", "A18 Chip"],
    warranty: "1 year warranty"
  },
  {
    id: "iphone-16-ultra",
    name: "Apple iPhone 16 (Ultramarine, 128 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Ultramarine",
    price: 4499,
    mrp: 8999,
    rating: 4.6,
    ratingCount: 199708,
    reviews: 8642,
    ram: "",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/g/l/q/-original-imahgfmzdbnzzjjg.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/g/l/q/-original-imahgfmzdbnzzjjg.jpeg?q=70`],
    highlights: ["128 GB ROM", "Super Retina XDR Display", "A18 Chip"],
    warranty: "1 year warranty"
  },
  {
    id: "iphone-17-black",
    name: "Apple iPhone 17 (Black, 256 GB)",
    brand: "Apple",
    category: "mobiles",
    color: "Black",
    price: 4599,
    mrp: 9199,
    rating: 4.6,
    ratingCount: 28706,
    reviews: 2057,
    ram: "",
    rom: "256 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/2/p/o/-original-imahqvad9pbyujab.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/2/p/o/-original-imahqvad9pbyujab.jpeg?q=70`],
    highlights: ["256 GB ROM", "Super Retina XDR Display", "A19 Chip"],
    warranty: "1 year warranty",
    bestseller: true
  },
  {
    id: "oppo-k14",
    name: "OPPO K14 Plus 5G (Star White, 128 GB)",
    brand: "OPPO",
    category: "mobiles",
    color: "Star White",
    price: 3499,
    mrp: 6999,
    rating: 4.7,
    ratingCount: 166,
    reviews: 90,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/a/0/v/-original-imahrnf4dqhzzn74.jpeg?q=70`],
    highlights: ["6 GB RAM | 128 GB ROM", "AMOLED Display", "8000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "oppo-k14-orange",
    name: "OPPO K14 Plus 5G (Solar Orange, 128 GB)",
    brand: "OPPO",
    category: "mobiles",
    color: "Solar Orange",
    price: 3499,
    mrp: 6999,
    rating: 4.7,
    ratingCount: 166,
    reviews: 90,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/r/1/d/-original-imahrnf4cmgvsneb.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/r/1/d/-original-imahrnf4cmgvsneb.jpeg?q=70`],
    highlights: ["6 GB RAM | 128 GB ROM", "AMOLED Display", "8000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty",
    sponsored: true
  },
  {
    id: "samsung-f07",
    name: "Samsung Galaxy F07 (Green, 64 GB)",
    brand: "Samsung",
    category: "mobiles",
    color: "Green",
    price: 1599,
    mrp: 3199,
    rating: 4.2,
    ratingCount: 10958,
    reviews: 791,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/t/r/o/-original-imahjwcmjfzax5rj.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/t/r/o/-original-imahjwcmjfzax5rj.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "Super AMOLED", "5000 mAh"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "boltt-evo-red",
    name: "BOLTT EVO (Berry Red, 64 GB)",
    brand: "BOLTT",
    category: "mobiles",
    color: "Berry Red",
    price: 1299,
    mrp: 2599,
    rating: 4.3,
    ratingCount: 2048,
    reviews: 987,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/d/b/p/-resized-original-imahqk5pywazwh3t.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/d/b/p/-resized-original-imahqk5pywazwh3t.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "boltt-ace-lavender",
    name: "BOLTT ACE 5G (Lavender Bloom, 128 GB)",
    brand: "BOLTT",
    category: "mobiles",
    color: "Lavender Bloom",
    price: 1999,
    mrp: 3999,
    rating: 4.8,
    ratingCount: 69,
    reviews: 59,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/t/s/f/-resized-original-imahqk5prvgsmfzv.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/t/s/f/-resized-original-imahqk5prvgsmfzv.jpeg?q=70`],
    highlights: ["6 GB RAM | 128 GB ROM", "6000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "pixel-11",
    name: "Google Pixel 11 (Frost, 256 GB)",
    brand: "Google",
    category: "mobiles",
    color: "Frost",
    price: 4299,
    mrp: 8599,
    rating: 4.5,
    ratingCount: 403,
    reviews: 75,
    ram: "12 GB",
    rom: "256 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/j/8/e/-resized-original-imahqszeftuehhhq.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/j/8/e/-resized-original-imahqszeftuehhhq.jpeg?q=70`],
    highlights: ["12 GB RAM | 256 GB ROM", "Tensor G6"],
    warranty: "1 year domestic warranty"
  },
  {
    id: "redmi-a7",
    name: "REDMI A7 Pro 5G (Black, 64 GB)",
    brand: "REDMI",
    category: "mobiles",
    color: "Black",
    price: 1499,
    mrp: 2999,
    rating: 3.9,
    ratingCount: 4902,
    reviews: 450,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/g/3/l/a7-pro-5g-a7-pro-5g-redmi-resized-original-imahmp4gh9ghf8mj.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/g/3/l/a7-pro-5g-a7-pro-5g-redmi-resized-original-imahmp4gh9ghf8mj.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6300 mAh Battery"],
    warranty: "1 year manufacturer warranty"
  },
  {
    id: "vivo-t4-lite",
    name: "Vivo T4 Lite 5G (Prism Blue) (4GB 64GB)",
    brand: "vivo",
    category: "mobiles",
    color: "Prism Blue",
    price: 1899,
    mrp: 3799,
    rating: 4.3,
    ratingCount: 45006,
    reviews: 2077,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/4/r/i/-original-imahnq7mcqxru4nv.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/4/r/i/-original-imahnq7mcqxru4nv.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "vivo-t4-gold",
    name: "Vivo T4 Lite 5G (Titanium Gold) (4GB 64GB)",
    brand: "vivo",
    category: "mobiles",
    color: "Titanium Gold",
    price: 1899,
    mrp: 3799,
    rating: 4.3,
    ratingCount: 45006,
    reviews: 2077,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/b/i/5/-original-imahnq7mvm2mpymg.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/b/i/5/-original-imahnq7mvm2mpymg.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6000 mAh Battery"]
  },
  {
    id: "moto-g37",
    name: "MOTOROLA g37 (Nautical Blue, 64 GB)",
    brand: "MOTOROLA",
    category: "mobiles",
    color: "Nautical Blue",
    price: 1699,
    mrp: 3399,
    rating: 4.3,
    ratingCount: 4151,
    reviews: 226,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/0/n/0/-original-imahnftfrdzqnhgz.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/0/n/0/-original-imahnftfrdzqnhgz.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "5200 mAh Battery"],
    warranty: "1 Year on Handset"
  },
  {
    id: "realme-p4",
    name: "realme P4 Lite 5G (Mosaic Blue, 128 GB)",
    brand: "realme",
    category: "mobiles",
    color: "Mosaic Blue",
    price: 2799,
    mrp: 5599,
    rating: 4.2,
    ratingCount: 15151,
    reviews: 939,
    ram: "4 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/q/z/a/-resized-original-imahhngs3z46gnew.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/q/z/a/-resized-original-imahhngs3z46gnew.jpeg?q=70`],
    highlights: ["4 GB RAM | 128 GB ROM", "7000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "lava-virat",
    name: "LAVA Virat V1 5G (Sonar Gold, 64 GB)",
    brand: "LAVA",
    category: "mobiles",
    color: "Sonar Gold",
    price: 1099,
    mrp: 2199,
    rating: 4.1,
    ratingCount: 1351,
    reviews: 305,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/t/3/z/-resized-original-imahpr8jhwewj22f.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/t/3/z/-resized-original-imahpr8jhwewj22f.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6000 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "poco-c85x",
    name: "POCO C85x 5G (Elite Black, 64 GB)",
    brand: "POCO",
    category: "mobiles",
    color: "Elite Black",
    price: 1499,
    mrp: 2999,
    rating: 4.1,
    ratingCount: 6075,
    reviews: 812,
    ram: "4 GB",
    rom: "64 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/k/g/n/-resized-original-imahmqgabnzytsgk.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/k/g/n/-resized-original-imahmqgabnzytsgk.jpeg?q=70`],
    highlights: ["4 GB RAM | 64 GB ROM", "6300 mAh Battery"],
    warranty: "1 Year Manufacturer Warranty"
  },
  {
    id: "vivo-t5-lite",
    name: "vivo T5 Lite 44W 5G (Wave Blue, 128 GB)",
    brand: "vivo",
    category: "mobiles",
    color: "Wave Blue",
    price: 2999,
    mrp: 5999,
    rating: 4.3,
    ratingCount: 3729,
    reviews: 291,
    ram: "6 GB",
    rom: "128 GB",
    img: `${IMG}/image/312/312/xif0q/mobile/i/s/8/-resized-original-imahpdsc5rjnucdy.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/mobile/i/s/8/-resized-original-imahpdsc5rjnucdy.jpeg?q=70`],
    highlights: ["6 GB RAM | 128 GB ROM", "6500 mAh Battery"],
    warranty: "1 Year Warranty on the Handset"
  },
  {
    id: "shaver-1",
    name: "Professional Hair Trimmer 60 min Runtime",
    brand: "Shaver",
    category: "electronics",
    price: 399,
    mrp: 799,
    rating: 4.1,
    ratingCount: 22010,
    reviews: 1802,
    img: `${IMG}/image/280/374/xif0q/shaver/z/d/j/professional-hair-trimmer-trimmer-60-min-runtime-4-length-shaver-original-imahqkgyy9b8pqtu.jpeg?q=80`,
    images: [`${IMG}/image/416/416/xif0q/shaver/z/d/j/professional-hair-trimmer-trimmer-60-min-runtime-4-length-shaver-original-imahqkgyy9b8pqtu.jpeg?q=70`],
    highlights: ["60 min runtime", "Cordless"]
  },
  {
    id: "headphones-boat",
    name: "boAt Rockerz 255 Pro+ Bluetooth Neckband",
    brand: "boAt",
    category: "electronics",
    price: 449,
    mrp: 899,
    rating: 4.2,
    ratingCount: 892101,
    reviews: 71200,
    img: `${IMG}/image/312/312/xif0q/headphone/1/8/n/-original-imagz5kbdhu4vzez.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/headphone/1/8/n/-original-imagz5kbdhu4vzez.jpeg?q=70`],
    highlights: ["40 Hours Playback", "IPX5"]
  },
  {
    id: "watch-noise",
    name: "Noise ColorFit Pulse 2 Max Smartwatch",
    brand: "Noise",
    category: "electronics",
    price: 499,
    mrp: 999,
    rating: 4.1,
    ratingCount: 210344,
    reviews: 18402,
    img: `${IMG}/image/312/312/xif0q/smartwatch/s/q/o/-original-imagxp8u6hcuuz9g.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/smartwatch/s/q/o/-original-imagxp8u6hcuuz9g.jpeg?q=70`],
    highlights: ["1.85 inch Display", "SpO2"]
  },
  {
    id: "cream-nivea",
    name: "NIVEA Soft Light Moisturiser 300 ml",
    brand: "NIVEA",
    category: "beauty",
    price: 249,
    mrp: 499,
    rating: 4.4,
    ratingCount: 301201,
    reviews: 22010,
    img: `${IMG}/image/312/312/xif0q/moisturizer-cream/v/q/l/-original-imags28zqzzxdhuz.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/moisturizer-cream/v/q/l/-original-imags28zqzzxdhuz.jpeg?q=70`],
    highlights: ["Vitamin E & Jojoba Oil"]
  },
  {
    id: "yoga-mat",
    name: "Yoga Mat 6 mm Anti-Skid",
    brand: "Fitness",
    category: "sports",
    price: 299,
    mrp: 599,
    rating: 4.2,
    ratingCount: 67012,
    reviews: 4100,
    img: `${IMG}/image/312/312/xif0q/sport-mat/k/q/l/-original-imags4yoga001.jpeg?q=70`,
    images: [`${IMG}/image/416/416/xif0q/sport-mat/k/q/l/-original-imags4yoga001.jpeg?q=70`],
    highlights: ["6 mm", "Anti-skid"]
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
].concat(FASHION);

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

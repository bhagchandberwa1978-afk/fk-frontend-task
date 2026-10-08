(function () {
  const app = document.getElementById("app");
  function saleWrap(p) {
    if (!p) return p;
    if (p.bbd) return p;
    const mrp = p.mrp || p.price;
    const next = Object.assign({}, p, { mrp: mrp, price: Math.round(mrp * 0.5), bbd: true });
    if (p.variants && p.variants.length) {
      next.variants = p.variants.map(function (v) {
        return Object.assign({}, v, { price: Math.round((v.price || mrp) * 0.5) });
      });
    }
    return next;
  }
  const ALL = PRODUCTS.map(saleWrap);
  let state = {
    q: "mobiles",
    brands: [],
    ram: [],
    min: 0,
    max: Infinity,
    sort: "relevance",
    banner: 0,
    cart: JSON.parse(localStorage.getItem("fk-cart") || "[]"),
    loginOpen: false,
    gallery: 0,
    payDone: false,
    minRate: 0,
    chkStep: 1,
    payMethod: "upi",
    payApp: "paytm",
    showQr: false,
    checkoutItems: JSON.parse(sessionStorage.getItem("fk-checkout") || "[]"),
    checkoutMode: sessionStorage.getItem("fk-checkout-mode") || "buynow",
    address: {
      name: "",
      phone: "",
      pincode: "",
      line: "",
      city: "",
      state: "",
      type: "HOME"
    }
  };

  function saveCart() {
    localStorage.setItem("fk-cart", JSON.stringify(state.cart));
  }
  function saveCheckout() {
    sessionStorage.setItem("fk-checkout", JSON.stringify(state.checkoutItems || []));
    sessionStorage.setItem("fk-checkout-mode", state.checkoutMode || "buynow");
  }
  function startCheckout(items, mode) {
    state.checkoutItems = (items || []).map((c) => ({
      id: c.id,
      qty: c.qty || 1,
      offer: c.offer || ""
    }));
    state.checkoutMode = mode || "buynow";
    state.payDone = false;
    state.chkStep = 1;
    state.payMethod = "upi";
    state.payApp = "paytm";
    state.showQr = false;
    saveCheckout();
    go("/checkout");
  }
  function checkoutList() {
    return (state.checkoutItems || [])
      .map((c) => ({ ...c, p: cartProduct(c) }))
      .filter((x) => x.p);
  }
  function logoLink() {
    return `<a class="logo-mark" href="/"><img src="${LOGO_APP}" alt="Flipkart" /></a>`;
  }
  function cartCount() {
    return state.cart.reduce((a, i) => a + i.qty, 0);
  }
  function toast(msg) {
    const t = document.createElement("div");
    t.className = "toast";
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(() => t.remove(), 1800);
  }

  function parseRoute() {
    if (location.hash && location.hash.charAt(0) === "#") {
      const next = location.hash.slice(1) || "/";
      history.replaceState({}, "", next.charAt(0) === "/" ? next : "/" + next);
    }
    const parts = location.pathname.replace(/\/+$/, "").split("/").filter(Boolean);
    const params = new URLSearchParams(location.search);
    return { parts, params, path: "/" + parts.join("/") };
  }

  function go(url) {
    history.pushState({}, "", url);
    window.scrollTo(0, 0);
    render();
  }

  function addToCart(id, qty, offer) {
    const p = ALL.find((x) => x.id === id);
    if (!p) return;
    const key = id + (offer || "");
    const ex = state.cart.find((c) => c.id === id && (c.offer || "") === (offer || ""));
    if (ex) ex.qty += qty || 1;
    else state.cart.push({ id, qty: qty || 1, offer: offer || "", key });
    saveCart();
    toast("Added to cart");
    render();
  }

  function cartProduct(c) {
    const p = ALL.find((x) => x.id === c.id);
    return saleWrap(p);
  }

  function iconUser() {
    return `<img class="ico hdr-ico" src="${USER_ICON}" alt="" />`;
  }
  function iconCart() {
    return `<img class="ico hdr-ico" src="${CART_ICON}" alt="" />`;
  }
  function iconSearch() {
    return `<svg class="ico" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="6.2" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`;
  }

  function headerNew(q) {
    return `
    <header class="hdr-new">
      <div class="hdr-new-inner">
        ${logoLink()}
        <form class="search-wrap" data-search>
          <input name="q" value="${esc(q || "")}" placeholder="Search for Products, Brands and More" autocomplete="off" />
          <button class="s-btn" type="submit" aria-label="Search">${iconSearch()}</button>
          <div class="suggest" hidden></div>
        </form>
        <div class="hdr-actions">
          <button class="hdr-link" data-login>${iconUser()} <span>Login</span></button>
          <a class="hdr-link hide-sm" href="/listing?q=mobiles">More ▾</a>
          <a class="hdr-link" href="/cart">${iconCart()} Cart ${cartCount() ? `<span class="badge">${cartCount()}</span>` : ""}</a>
        </div>
      </div>
    </header>`;
  }

  function headerClassic(q) {
    return `
    <header class="hdr-classic">
      <div class="hdr-classic-inner">
        <a class="classic-logo" href="/">
          <img class="logo-app-sm" src="${LOGO_APP}" alt="" />
          <span>
            <img class="fk" src="${LOGO_CLASSIC}" alt="Flipkart" />
            <span class="explore">Explore <b>Plus</b> <img src="${LOGO_PLUS}" alt=""></span>
          </span>
        </a>
        <form class="search-wrap" data-search>
          <input name="q" value="${esc(q || "")}" placeholder="Search for products, brands and more" autocomplete="off" />
          <button class="s-btn" type="submit" aria-label="Search">${iconSearch()}</button>
          <div class="suggest" hidden></div>
        </form>
        <button class="login-btn-white hide-sm" data-login>Login</button>
        <button class="hdr-link mobile-only" data-login>${iconUser()}</button>
        <a class="hdr-link hide-sm" href="/">Become a Seller</a>
        <a class="hdr-link hide-sm" href="/">More ▾</a>
        <a class="hdr-link" href="/cart">${iconCart()} <span class="hide-sm">Cart</span> ${cartCount() ? `<span class="badge">${cartCount()}</span>` : ""}</a>
      </div>
      <nav class="subnav">
        <a href="/listing?q=electronics">Electronics ▾</a>
        <a href="/listing?q=appliances">TVs & Appliances ▾</a>
        <a href="/listing?q=fashion">Men ▾</a>
        <a href="/listing?q=fashion">Women ▾</a>
        <a href="/listing?q=fashion">Baby & Kids ▾</a>
        <a href="/listing?q=home">Home & Furniture ▾</a>
        <a href="/listing?q=sports">Sports, Books & More ▾</a>
        <a href="/">Flights</a>
        <a href="/big-billion-days-store">Offer Zone</a>
      </nav>
    </header>`;
  }

  function footer() {
    return `
    <footer class="ft">
      <div class="ft-grid">
        <div><h6>ABOUT</h6><a href="#">Contact Us</a><a href="#">About Us</a><a href="#">Careers</a><a href="#">Flipkart Stories</a><a href="#">Press</a></div>
        <div><h6>GROUP COMPANIES</h6><a href="#">Myntra</a><a href="#">Cleartrip</a><a href="#">Shopsy</a></div>
        <div><h6>HELP</h6><a href="#">Payments</a><a href="#">Shipping</a><a href="#">Cancellation & Returns</a><a href="#">FAQ</a></div>
        <div><h6>CONSUMER POLICY</h6><a href="#">Cancellation & Returns</a><a href="#">Terms Of Use</a><a href="#">Security</a><a href="#">Privacy</a></div>
        <div><h6>Mail Us:</h6><p>Flipkart Internet Private Limited,<br>Buildings Alyssa, Begonia &<br>Clove Embassy Tech Village,<br>Bengaluru, 560103, Karnataka, India</p></div>
        <div><h6>Registered Office Address:</h6><p>CIN : U51109KA2012PTC066107<br>Telephone: 044-45614700</p></div>
      </div>
      <div class="ft-bottom"><span>© 2007-2026 Flipkart.com clone (interview task)</span><span>Become a Seller · Gift Cards · Help Center</span></div>
    </footer>`;
  }

  function loginModal() {
    if (!state.loginOpen) return "";
    return `
    <div class="overlay" data-close-login>
      <div class="modal" onclick="event.stopPropagation()">
        <button class="close-x" data-close-login>×</button>
        <div class="modal-left">
          <h2>Login</h2>
          <p style="margin-top:12px;opacity:.9">Get access to your Orders, Wishlist and Recommendations</p>
        </div>
        <div class="modal-right">
          <label>Enter Email / Mobile number</label>
          <input placeholder="Enter Email / Mobile number" />
          <p style="font-size:12px;color:#878787">By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
          <button class="btn btn-buy" style="width:100%;margin-top:16px" data-close-login>Request OTP</button>
        </div>
      </div>
    </div>`;
  }

  function productBlob(p) {
    return [p.name, p.brand, p.category, p.color, p.ram, p.rom, (p.highlights || []).join(" ")].join(" ").toLowerCase();
  }

  function searchWords(q) {
    const aliases = {
      phone: "mobile",
      phones: "mobile",
      mobile: "mobiles",
      mobiles: "mobiles",
      iphone: "apple iphone",
      laptop: "electronics asus",
      laptops: "electronics",
      tv: "appliances samsung",
      shoes: "fashion",
      shoe: "fashion",
      watch: "electronics noise",
      headphone: "electronics boat",
      trimmer: "electronics"
    };
    return (q || "")
      .toLowerCase()
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .flatMap((w) => (aliases[w] ? aliases[w].split(" ") : [w]));
  }

  function matchesQuery(p, q) {
    const query = (q || "").toLowerCase().trim();
    if (!query || query === "for-you") return true;
    if (p.category === query || (p.brand || "").toLowerCase() === query) return true;
    const blob = productBlob(p);
    const words = searchWords(query);
    return words.every((w) => blob.includes(w));
  }

  function searchHits(q) {
    const query = (q || "").trim();
    const scored = ALL.map((p) => {
      const blob = productBlob(p);
      const ql = query.toLowerCase();
      let score = 0;
      if (!ql) score = p.ratingCount;
      else if (p.name.toLowerCase().startsWith(ql) || (p.brand || "").toLowerCase() === ql) score = 10000 + p.ratingCount;
      else if (blob.includes(ql)) score = 5000 + p.ratingCount;
      else if (matchesQuery(p, query)) score = 1000 + p.ratingCount;
      return { p, score };
    }).filter((x) => (query ? x.score > 0 : true));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, 8).map((x) => x.p);
  }

  function filterProducts(q, extra) {
    let list = ALL.filter((p) => {
      if (!matchesQuery(p, q)) return false;
      if (extra.brands.length && !extra.brands.includes(p.brand)) return false;
      if (extra.ram.length && !extra.ram.includes(p.ram)) return false;
      if (p.price < extra.min || p.price > extra.max) return false;
      if (extra.minRate && p.rating < extra.minRate) return false;
      return true;
    });
    if (extra.sort === "lth") list.sort((a, b) => a.price - b.price);
    if (extra.sort === "htl") list.sort((a, b) => b.price - a.price);
    if (extra.sort === "popular") list.sort((a, b) => b.ratingCount - a.ratingCount);
    if (extra.sort === "newest") list = list.slice().reverse();
    return list;
  }

  function homeView() {
    const mobiles = ALL.filter((p) => p.category === "mobiles").slice(0, 10);
    const fashion = ALL.filter((p) => p.category === "fashion");
    const elec = ALL.filter((p) => p.category === "electronics");
    return `
      ${headerNew("")}
      <div class="cat-row">
        ${CATEGORIES.map(
          (c) => `<a class="cat-item ${c.id === "for-you" ? "active" : ""}" href="/listing?q=${encodeURIComponent(c.id === "for-you" ? "mobiles" : c.id)}">
            <img src="${c.icon}" alt="${c.name}" /><div>${c.name}</div></a>`
        ).join("")}
      </div>
      <div class="page">
        <a class="bbd-strip" href="/big-billion-days-store">The Big Billion Days · Starts 9th Oct · Flat 50% Off on sale products →</a>
        <div class="hero">
          <div class="banner-main">
            <a href="/big-billion-days-store"><img id="bannerImg" src="${BANNERS[state.banner]}" alt="Big Billion Days" /></a>
            <div class="banner-dots">${BANNERS.map((_, i) => `<span class="${i === state.banner ? "on" : ""}" data-dot="${i}"></span>`).join("")}</div>
          </div>
          <img src="${SIDE_BANNERS[0]}" alt="Galaxy S25" />
          <img src="${SIDE_BANNERS[1]}" alt="Deals" />
        </div>
        <div class="deals">
          ${DEAL_CARDS.map(
            (d) => `<a class="deal" href="/listing?q=${d.query}"><img src="${d.img}" alt="${d.title}" /><div class="offer">${d.offer}</div><p>${d.title}</p></a>`
          ).join("")}
        </div>
        ${HOME_STRIPS.map(
          (s) => `<section class="strip">
          <h3>${esc(s.title)}</h3>
          <div class="product-scroll">
            ${s.items
              .map(
                (it) => `<a class="mini-card" href="/big-billion-days-store">
              <img src="${it.img}" alt="${esc(it.name)}" />
              <div class="n">${esc(it.name)}</div>
            </a>`
              )
              .join("")}
          </div>
        </section>`
        ).join("")}
        <div class="quick-row">
          ${QUICK_LINKS.map((q) => `<a class="quick" href="/listing?q=electronics"><img src="${q.img}" alt="${q.name}" /><span>${q.name}</span></a>`).join("")}
        </div>
        <section class="strip">
          <h3>Top mobiles</h3>
          <div class="product-scroll">
            ${mobiles.map(mini).join("")}
          </div>
        </section>
        <section class="strip">
          <h3>Fashion picks</h3>
          <div class="product-scroll">${fashion.map(mini).join("")}</div>
        </section>
        <section class="strip">
          <h3>Best of electronics</h3>
          <div class="product-scroll">${elec.map(mini).join("")}</div>
        </section>
        <section class="strip">
          <h3>Beauty, Home & more</h3>
          <div class="product-scroll">${ALL.filter((p) => ["beauty", "home", "appliances", "furniture", "books", "sports", "toys", "food"].includes(p.category)).map(mini).join("")}</div>
        </section>
      </div>
      ${footer()}${loginModal()}`;
  }

  function mini(p) {
    return `<a class="mini-card" href="/product/${p.id}">
      <img src="${p.img}" alt="${esc(p.name)}" />
      <div class="n">${esc(p.name)}</div>
      <div class="p">${inr(p.price)}${p.mrp ? ` <span style="color:#388e3c">${discount(p)}% off</span>` : ""}</div>
    </a>`;
  }

  function listingView(q) {
    const scoped = filterProducts(q, { brands: [], ram: [], min: 0, max: Infinity, sort: "relevance", minRate: 0 });
    const brands = [...new Set(scoped.map((p) => p.brand).filter(Boolean))].sort();
    const rams = [...new Set(scoped.map((p) => p.ram).filter(Boolean))];
    const list = filterProducts(q, state);
    return `
      ${headerClassic(q)}
      <div class="listing-wrap">
        <aside class="filters" id="filters">
          <div class="filters-head"><h4>Filters</h4><button type="button" id="closeFilters" aria-label="Close">✕</button></div>
          <div class="f-sec">
            <h5>CATEGORIES</h5>
            <a href="/listing?q=mobiles">Mobiles & Accessories</a><br>
            <b>Mobiles</b>
          </div>
          <div class="f-sec">
            <h5>PRICE</h5>
            <div class="price-row">
              <select id="minP">
                <option value="0">Min</option>
                <option value="10000">₹10000</option>
                <option value="15000">₹15000</option>
                <option value="20000">₹20000</option>
                <option value="30000">₹30000</option>
              </select>
              <select id="maxP">
                <option value="999999">₹30000+</option>
                <option value="10000">₹10000</option>
                <option value="20000">₹20000</option>
                <option value="30000">₹30000</option>
              </select>
            </div>
          </div>
          <div class="f-sec">
            <h5>BRAND</h5>
            ${brands
              .map(
                (b) => `<label><input type="checkbox" data-brand="${esc(b)}" ${state.brands.includes(b) ? "checked" : ""}/> ${esc(b)}</label>`
              )
              .join("")}
          </div>
          <div class="f-sec">
            <h5>CUSTOMER RATINGS</h5>
            ${[4, 3].map((r) => `<label><input type="checkbox" data-rate="${r}" ${state.minRate === r ? "checked" : ""}/> ${r}★ & above</label>`).join("")}
          </div>
          <div class="f-sec">
            <h5>RAM</h5>
            ${rams
              .map(
                (r) => `<label><input type="checkbox" data-ram="${esc(r)}" ${state.ram.includes(r) ? "checked" : ""}/> ${esc(r)}</label>`
              )
              .join("")}
          </div>
        </aside>
        <section class="listing-main">
          <div class="crumb">Home › Mobiles & A... › Mobiles</div>
          <div class="listing-head">
            <h1>Showing 1 – ${list.length} results for "${esc(q || "mobiles")}"</h1>
          </div>
          <div class="sort-bar">
            <b>Sort By</b>
            ${[
              ["relevance", "Relevance"],
              ["popular", "Popularity"],
              ["lth", "Price — Low to High"],
              ["htl", "Price — High to Low"],
              ["newest", "Newest First"]
            ]
              .map(([k, l]) => `<span data-sort="${k}" class="${state.sort === k ? "active" : ""}">${l}</span>`)
              .join("")}
          </div>
          ${list.map(row).join("") || `<div class="empty">No products found</div>`}
        </section>
      </div>
      <div class="filter-scrim" id="filterScrim"></div>
      <div class="filter-toggle">
        <button type="button" id="jumpSort">Sort</button>
        <button type="button" id="openFilters">Filters</button>
      </div>
      ${footer()}${loginModal()}`;
  }

  function row(p) {
    const off = discount(p);
    return `
    <article class="p-row" data-goto="/product/${p.id}">
      <div class="p-img-wrap">
        ${p.sponsored ? `<span class="tag">Sponsored</span>` : ""}
        ${p.bestseller ? `<span class="tag best">Bestseller</span>` : ""}
        <img src="${p.img}" alt="${esc(p.name)}" />
        ${p.comingSoon ? `<div class="coming">Coming Soon</div>` : ""}
      </div>
      <div class="p-info">
        <h2>${esc(p.name)}</h2>
        <div><span class="rating">${p.rating} ★</span><span class="rc">${countLabel(p.ratingCount)} Ratings & ${countLabel(p.reviews || 0)} Reviews</span></div>
        <ul class="hl">${(p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      </div>
      <div class="p-price">
        <div class="now">${inr(p.price)}</div>
        ${p.mrp ? `<div><span class="was">${inr(p.mrp)}</span><span class="off">${off}% off</span></div>` : ""}
        <img class="assured" src="${ASSURED}" alt="Assured" />
        <div class="bank">Bank Offer</div>
      </div>
    </article>`;
  }

  function productGallery(p) {
    const out = [];
    const add = (src) => {
      if (src && out.indexOf(src) === -1) out.push(src);
    };
    add(p.img);
    (p.images || []).forEach(add);
    (p.colors || []).forEach((c) => add(c.img && c.img.replace("/80/110/", "/416/416/")));
    if (out.length < 4) {
      ALL.filter((x) => x.brand === p.brand && x.id !== p.id).forEach((x) => {
        if (out.length >= 4) return;
        add(x.img);
        (x.images || []).forEach((s) => {
          if (out.length < 4) add(s);
        });
      });
    }
    if (out.length < 4) {
      ALL.filter((x) => x.category === p.category && x.id !== p.id).forEach((x) => {
        if (out.length >= 4) return;
        add(x.img);
      });
    }
    return out.slice(0, 4);
  }

  function productView(id, bbd) {
    let p = saleWrap(ALL.find((x) => x.id === id));
    if (!p) return headerNew("") + `<div class="empty">Product not found</div>` + footer();
    const imgs = productGallery(p);
    const gi = Math.min(state.gallery, imgs.length - 1);
    const off = discount(p);
    const emi = Math.round(p.price / 3);
    const emiM = Math.round(p.price / 12);
    const lowest = Math.round(p.price * 0.8);
    const colors = p.colors && p.colors.length ? p.colors : [{ name: p.color || "Default", img: p.img, id: p.id }];
    const variants = p.variants || [{ label: [p.ram, p.rom].filter(Boolean).join(" + ") || "Standard", price: p.price, stock: 6 }];
    const catLabel = p.category === "mobiles" ? "Mobiles" : p.category;
    return `
      ${headerNew(p.category)}
      <div class="page" style="padding-bottom:0">
        <div class="crumb">Home / ${esc(catLabel)} / ${esc(p.brand)} / ${esc(p.name)}</div>
      </div>
      <div class="prod-page">
        <div class="prod-left">
          <div class="gallery-new">
            <div class="thumbs">
              ${imgs.map((src, i) => `<img data-g="${i}" class="${i === gi ? "on" : ""}" src="${src}" alt="">`).join("")}
            </div>
            <div class="main-shot">
              ${p.bestseller ? `<span class="best-pill">BESTSELLER</span>` : ""}
              <img src="${imgs[gi]}" alt="${esc(p.name)}" />
            </div>
          </div>
        </div>
        <div class="prod-right">
          <p class="sel-lbl">Selected Color: <b>${esc(p.color || colors[0].name)}</b></p>
          <div class="colors">${colors
            .map(
              (c) =>
                `<a href="/product/${c.id}${p.bbd ? "?offer=bbd" : ""}"><img class="color-opt ${c.name === p.color ? "on" : ""}" src="${c.img}" alt="${esc(c.name)}"></a>`
            )
            .join("")}</div>
          <p class="sel-lbl">Variant: <b>${esc(variants[0] && variants.find((v) => v.label === p.rom) ? p.rom : variants[0].label)}</b></p>
          <div class="variants">${variants
            .map(
              (v) =>
                `<div class="var ${v.label === p.rom || variants.length === 1 ? "on" : ""}"><b>${esc(v.label)}</b><div>${inr(v.price)}</div></div>`
            )
            .join("")}</div>
          <h1>${esc(p.name)}${p.ram ? ` (${esc(p.ram)} RAM)` : ""}</h1>
          <div class="rate-line"><span class="rating">${p.rating} ★</span><span class="rc">${countLabel(p.ratingCount)} Ratings & ${countLabel(p.reviews || 0)} Reviews</span></div>
          <div class="bbd-price-lbl">Big Billion Days Price · 50% off</div>
          <div class="price-block">
            ${p.mrp ? `<span class="off">${off}%</span> <span class="was">${inr(p.mrp)}</span>` : ""}
            <div class="price-lg">${inr(p.price)}</div>
          </div>
          <div class="lowest">Buy at <b>${inr(lowest)}</b> · Lowest price for you</div>
          <p class="emi-line">₹${emi.toLocaleString("en-IN")} x 3m · Pay ${inr(emi * 3)}</p>
          <div class="offer-box">
            <b>Available offers</b>
            <p>Bank Offer 5% Cashback on Flipkart Axis Bank Card</p>
            <p>UPI Offer 5% instant discount on UPI payments</p>
            <p>Special Price Extra ${off}% off on this sale</p>
          </div>
          <div class="exch-row">Exchange offer · Up to ${inr(Math.round(p.price * 0.4))}</div>
          <div class="deliv-box">
            <div>Delivery by <b>${deliveryEta()}</b></div>
            <div class="muted">Seller: RetailNet · <img class="assured-sm" src="${ASSURED}" alt="Assured"></div>
          </div>
          <p class="warranty-line">${esc(p.warranty || "1 Year Brand Warranty")}</p>
          <div class="trust-row">7-day brand support · Flipkart Assured</div>
          <h3 class="hl-title">Product highlights</h3>
          <div class="hl-grid">${(p.highlights || []).map((h) => `<div class="hl-card">${esc(h)}</div>`).join("")}</div>
          <h3 class="hl-title">Specifications</h3>
          <table class="spec-table">
            <tr><th>Brand</th><td>${esc(p.brand)}</td></tr>
            <tr><th>Model</th><td>${esc(p.name)}</td></tr>
            ${p.color ? `<tr><th>Color</th><td>${esc(p.color)}</td></tr>` : ""}
            ${p.ram ? `<tr><th>RAM</th><td>${esc(p.ram)}</td></tr>` : ""}
            ${p.rom ? `<tr><th>Storage</th><td>${esc(p.rom)}</td></tr>` : ""}
            <tr><th>Warranty</th><td>${esc(p.warranty || "Brand warranty")}</td></tr>
          </table>
        </div>
      </div>
      <div class="sticky-cta">
        <button class="cta-cart" type="button" data-add="${p.id}" data-offer="${p.bbd ? "bbd" : ""}" aria-label="Add to cart">${iconCart()}</button>
        <button class="cta-emi" type="button" data-buy="${p.id}" data-offer="${p.bbd ? "bbd" : ""}">
          <b>Buy with EMI</b>
          <small>From ${inr(emiM)}/m</small>
        </button>
        <button class="cta-buynow" type="button" data-buy="${p.id}" data-offer="${p.bbd ? "bbd" : ""}">
          <b>Buy now</b>
          <small>at ${inr(p.price)}</small>
        </button>
      </div>
      ${footer()}${loginModal()}`;
  }

  function cartView() {
    const items = state.cart.map((c) => ({ ...c, p: cartProduct(c) })).filter((x) => x.p);
    const total = items.reduce((s, i) => s + i.p.price * i.qty, 0);
    const mrp = items.reduce((s, i) => s + (i.p.mrp || i.p.price) * i.qty, 0);
    return `
      ${headerClassic("")}
      <div class="cart-page">
        <div>
          ${
            items.length
              ? items
                  .map(
                    (i) => `
            <div class="cart-item">
              <img src="${i.p.img}" alt="" />
              <div>
                <a href="/product/${i.p.id}"><b>${esc(i.p.name)}</b></a>
                <div class="qty">
                  <button data-qty="${i.p.id}" data-d="-1">−</button>
                  <span>${i.qty}</span>
                  <button data-qty="${i.p.id}" data-d="1">+</button>
                  <button data-remove="${i.p.id}" style="margin-left:12px;border:0;background:none;color:#2874f0;cursor:pointer">REMOVE</button>
                </div>
              </div>
              <div><b>${inr(i.p.price * i.qty)}</b></div>
            </div>`
                  )
                  .join("")
              : `<div class="empty"><h2>Your cart is empty!</h2><p>Add items to it now.</p><br><a class="btn btn-cart" style="padding:12px 20px" href="/listing?q=mobiles">Shop now</a></div>`
          }
        </div>
        <aside class="summary">
          <h3>PRICE DETAILS</h3>
          <div class="s-row"><span>Price (${items.length} items)</span><span>${inr(mrp)}</span></div>
          <div class="s-row"><span>Discount</span><span style="color:#388e3c">− ${inr(mrp - total)}</span></div>
          <div class="s-row"><span>Delivery Charges</span><span style="color:#388e3c">FREE</span></div>
          <div class="s-row" style="border-top:1px dashed #e0e0e0;font-weight:700"><span>Total Amount</span><span>${inr(total)}</span></div>
          <button class="btn btn-buy" style="width:100%;margin-top:12px" id="placeOrder">PLACE ORDER</button>
        </aside>
      </div>
      ${footer()}${loginModal()}`;
  }

  function upiLink(amount, note) {
    return `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(UPI_NAME)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;
  }

  function headerCheckout() {
    const step = state.chkStep;
    const titles = ["Delivery Address", "Confirm details", "Payments"];
    const labels = ["Address", "Confirm details", "Payment"];
    return `
    <header class="hdr-chk">
      <div class="hdr-chk-top">
        <button type="button" class="chk-back" data-chk-back aria-label="Back">‹</button>
        ${logoLink()}
        <div class="hdr-chk-titles">
          ${step === 3 ? `<div class="chk-stepn">Step 3 of 3</div>` : ""}
          <div class="hdr-chk-title">${titles[step - 1] || "Checkout"}</div>
        </div>
        <div class="chk-secure">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.6"/></svg>
          100% Secure
        </div>
      </div>
      ${
        step === 3
          ? ""
          : `<div class="chk-progress">
        ${labels
          .map(
            (l, i) => `<button type="button" class="chk-prog ${step === i + 1 ? "on" : ""} ${step > i + 1 ? "done" : ""}" data-chk-step="${i + 1}">${l}</button>${i < 2 ? `<span class="chk-prog-line ${step > i + 1 ? "on" : ""}"></span>` : ""}`
          )
          .join("")}
      </div>`
      }
    </header>`;
  }

  function deliveryEta() {
    const d = new Date();
    d.setDate(d.getDate() + 5);
    return d.toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" });
  }

  function payYellow(total, link) {
    return `<a class="btn-pay-yellow" href="${link}" id="payUpi">Pay ${inr(total)}</a>`;
  }

  function checkoutView() {
    const items = checkoutList();
    const total = items.reduce((s, i) => s + i.p.price * i.qty, 0);
    const mrp = items.reduce((s, i) => s + (i.p.mrp || i.p.price) * i.qty, 0);
    const save = mrp - total;
    const a = state.address;
    const step = state.chkStep;
    if (!items.length && !state.payDone) {
      return headerCheckout() + `<div class="empty"><h2>Nothing to checkout</h2><p>Buy a product to pay for that item only.</p><br><a class="btn btn-cart" style="padding:12px 20px" href="/listing?q=mobiles">Shop now</a></div>` + chkFooter();
    }
    if (state.payDone) {
      return `
        ${headerCheckout()}
        <div class="chk-shell">
          <div class="chk-success">
            <div class="tick">✓</div>
            <h2>Order Confirmed</h2>
            <p>Thank you for shopping with Flipkart.</p>
            <p class="muted">Paid for ${items.length ? esc(items[0].p.name) : "your order"}</p>
            <p class="muted">UPI ID <b>${UPI_ID}</b></p>
            <p>Delivery by <b>${deliveryEta()}</b></p>
            <a class="btn-pay-yellow" href="/">Continue Shopping</a>
          </div>
        </div>
        ${chkFooter()}`;
    }
    const link = upiLink(total, "Flipkart  order");
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(link)}`;
    const app = state.payApp;
    return `
      ${headerCheckout()}
      <div class="chk-shell">
        ${
          step === 1
            ? `<section class="fk-card">
            <h3 class="fk-h">DELIVERY ADDRESS</h3>
            <div class="addr-form">
              <button type="button" class="btn-loc" id="useLoc">📍 Use my current location</button>
              <div class="addr-grid">
                <input class="inp addr-span" id="addrName" name="name" autocomplete="name" placeholder="Name" value="${esc(a.name)}" />
                <input class="inp addr-span" id="addrPhone" name="tel" autocomplete="tel" inputmode="numeric" maxlength="10" placeholder="10-digit mobile number" value="${esc(a.phone)}" />
                <input class="inp" id="addrPin" name="postal-code" autocomplete="postal-code" inputmode="numeric" maxlength="6" placeholder="Pincode" value="${esc(a.pincode)}" />
                <input class="inp" id="addrLocality" autocomplete="address-level3" placeholder="Locality" value="" />
                <input class="inp addr-span" id="addrLine" name="street-address" autocomplete="street-address" placeholder="Address (Area and Street)" value="${esc(a.line)}" />
                <input class="inp" id="addrCity" autocomplete="address-level2" placeholder="City / District / Town" value="${esc(a.city)}" />
                <input class="inp" id="addrState" autocomplete="address-level1" placeholder="State" value="${esc(a.state)}" />
              </div>
            </div>
            <p class="eta-hint">Estimated delivery: <b>${deliveryEta()}</b></p>
            <div class="chk-cta"><button type="button" class="btn-deliver" id="deliverHere">Continue</button></div>
          </section>`
            : ""
        }

        ${
          step === 2
            ? `<section>
            <h3 class="fk-h pad">ORDER SUMMARY</h3>
            <div class="fk-card addr-mini">
              <div class="addr-ico">🏠</div>
              <div class="grow">
                <div class="addr-name">${esc(a.name)} <button type="button" class="link-blue" data-chk-step="1">Change</button></div>
                <p>${esc(a.line)}, ${esc(a.city)}, ${esc(a.state)}</p>
                <p class="addr-ph">📞 ${esc(a.phone)}</p>
              </div>
            </div>
            ${items
              .map(
                (i) => `
            <div class="fk-card prod-sum">
              <img src="${i.p.img}" alt="" />
              <div>
                <div class="green-sm">Lowest Price since Launch</div>
                <a href="/product/${i.p.id}">${esc(i.p.name)}</a>
                <div class="rate-line"><span class="rating">${i.p.rating} ★</span> <span class="muted">${countLabel(i.p.ratingCount)}+</span> <img class="assured-sm" src="${ASSURED}" alt=""></div>
                <div class="chk-item-price"><span class="off">↓ ${discount(i.p)}%</span> <span class="was">${inr(i.p.mrp || i.p.price)}</span> <b>${inr(i.p.price)}</b></div>
              </div>
            </div>`
              )
              .join("")}
            <div class="fk-row">🚚 Delivery by <b>${deliveryEta()}</b> · Estimated in 5 days</div>
            <div class="fk-row">📦 Open Box Delivery will be done ›</div>
            <div class="chk-cta"><button type="button" class="btn-deliver" id="continueOrder">Continue</button></div>
          </section>`
            : ""
        }

        ${
          step === 3
            ? `<section>
            <div class="total-pill"><span>Total Amount ▾</span><b>${inr(total)}</b></div>
            <div class="disc-banner">
              <b>10% instant discount</b>
              <span>Claim now with payment offers</span>
            </div>
            <div class="fk-card upi-card">
              <div class="upi-head"><span class="upi-badge">UPI</span> UPI <span class="acc-chev">⌃</span></div>
              <label class="upi-app ${app === "fkupi" ? "on" : ""}">
                <input type="radio" name="payapp" data-pay-app="fkupi" ${app === "fkupi" ? "checked" : ""} />
                <span>Flipkart UPI <em>New</em></span>
                <img src="${LOGO_APP}" class="upi-logo" alt="" />
              </label>
              ${app === "fkupi" ? `<div class="pay-actions">${payYellow(total, link)}</div>` : ""}
              <label class="upi-app ${app === "paytm" ? "on" : ""}">
                <input type="radio" name="payapp" data-pay-app="paytm" ${app === "paytm" ? "checked" : ""} />
                <span>Paytm</span>
                <span class="paytm-logo">Paytm</span>
              </label>
              ${app === "paytm" ? `<div class="pay-actions">${payYellow(total, link)}</div>` : ""}
              <label class="upi-app ${app === "phonepe" ? "on" : ""}">
                <input type="radio" name="payapp" data-pay-app="phonepe" ${app === "phonepe" ? "checked" : ""} />
                <span class="upi-app-name">PhonePe</span>
                <svg class="pe-logo" viewBox="0 0 48 48" aria-hidden="true">
                  <rect width="48" height="48" rx="24" fill="#5f259f"/>
                  <text x="24" y="31" text-anchor="middle" fill="#fff" font-size="18" font-weight="700" font-family="Arial, sans-serif">पे</text>
                </svg>
              </label>
              ${app === "phonepe" ? `<div class="pay-actions">${payYellow(total, link)}</div>` : ""}
              <a class="other-upi" href="${link}" id="payUpiOther">Pay with other UPI Apps ›</a>
              <p class="muted tiny">Offers not valid if chosen from here</p>
              <button type="button" class="scan-qr" id="openQr">Scan QR and Pay</button>
              ${
                state.showQr
                  ? `<div class="qr-box">
                <img class="qr" src="${qr}" alt="UPI QR" />
                <p class="upi-id">UPI ID: <b id="upiText">${UPI_ID}</b> <button type="button" id="copyUpi">Copy</button></p>
                <button class="link-blue paid-txt" type="button" id="paidBtn">I have paid</button>
              </div>`
                  : ""
              }
            </div>
            <div class="pay-acc unavail">
              <div><span class="pay-ico">💳</span> Credit / Debit / ATM Card<div class="acc-sub">Add and secure cards as per RBI guidelines</div></div>
              <span class="unavail-tag">Unavailable</span>
            </div>
            <div class="pay-acc unavail">
              <div><span class="pay-ico">📅</span> EMI<div class="acc-sub">Flipkart EMI</div></div>
              <span class="unavail-tag">Unavailable</span>
            </div>
            <div class="pay-acc unavail">
              <div><span class="pay-ico">🏦</span> Net Banking</div>
              <span class="unavail-tag">Unavailable</span>
            </div>
            <div class="pay-acc unavail"><span class="pay-ico">₹</span> Cash on Delivery <span class="unavail-tag">Unavailable</span></div>
            <p class="happy-cust">35 Crore happy customers and counting! <span>☺</span></p>
          </section>`
            : ""
        }
      </div>
      ${step === 3 ? "" : chkFooter()}${loginModal()}`;
  }

  function chkFooter() {
    return `
    <footer class="chk-ft">
      <div>Policies: Returns Policy · Terms of use · Security · Privacy · Infringement</div>
      <div>© 2007-2026 Flipkart.com</div>
      <div>Need help? Visit the <a href="/">Help Center</a> or contact us</div>
    </footer>`;
  }

  function saleCountdownHtml() {
    const start = new Date("2026-10-09T00:00:00+05:30");
    const now = new Date();
    if (now >= start) return "Sale is LIVE · Early access for Plus members";
    const ms = Math.max(0, start - now);
    const h = Math.floor(ms / 3600000);
    const m = Math.floor((ms % 3600000) / 60000);
    const s = Math.floor((ms % 60000) / 1000);
    const pad = (n) => String(n).padStart(2, "0");
    return `Sale starts in <b>${pad(h)}</b> Hrs : <b>${pad(m)}</b> Min : <b>${pad(s)}</b> Sec`;
  }

  function bbdDealRow(title, ids) {
    const list = ids
      .map((id) => ALL.find((x) => x.id === id))
      .filter(Boolean)
      .map(saleWrap);
    if (!list.length) return "";
    return `
      <h2 class="bbd-h">${esc(title)}</h2>
      <div class="bbd-grid">
        ${list
          .map(
            (p) => `<a class="bbd-card" href="/product/${p.id}?offer=bbd">
          <span class="off-pill">${discount(p)}% off</span>
          <img src="${p.img}" alt="${esc(p.name)}" />
          <div class="n">${esc(p.name)}</div>
          <div class="price-row"><span class="now">${inr(p.price)}</span><span class="was">${inr(p.mrp)}</span></div>
        </a>`
          )
          .join("")}
      </div>`;
  }

  function bbdView() {
    return `
      ${headerNew("")}
      <div class="bbd-page">
        <div class="sale-timer" id="saleTimer">${saleCountdownHtml()}</div>
        <div class="bbd-hero-wrap">
          <a href="/listing?q=mobiles"><img class="bbd-hero" id="bbdHero" src="${[BBD_HERO].concat(BANNERS)[state.banner % (BANNERS.length + 1)]}" alt="The Big Billion Days" /></a>
          <div class="banner-dots">${[BBD_HERO].concat(BANNERS).map((_, i) => `<span class="${i === state.banner % (BANNERS.length + 1) ? "on" : ""}" data-dot="${i}"></span>`).join("")}</div>
        </div>
        ${bbdDealRow("Mobile Deals", ["moto-g37-power-blue", "oppo-k14x", "oppo-k14", "boltt-ace-lavender", "realme-p4", "samsung-f07", "pixel-11", "redmi-a7"])}
        ${bbdDealRow("BBD Specials", ["iphone-17-black", "oppo-k14", "lava-virat", "headphones-boat", "watch-noise"])}
        ${bbdDealRow("Electronics", ["laptop-asus", "tv-samsung", "headphones-boat", "watch-noise"])}
        ${bbdDealRow("Home Deals", ["cooker-1", "bedsheet-1", "food-1"])}
        ${bbdDealRow("Furniture Deals", ["sofa-1"])}
        <h2 class="bbd-h">Top deals</h2>
        <div class="bbd-grid">
          ${ALL.map(saleWrap)
            .map(
              (p) => `<a class="bbd-card" href="/product/${p.id}?offer=bbd">
            <span class="off-pill">${discount(p)}% off</span>
            <img src="${p.img}" alt="${esc(p.name)}" />
            <div class="n">${esc(p.name)}</div>
            <div class="price-row"><span class="now">${inr(p.price)}</span><span class="was">${inr(p.mrp)}</span></div>
          </a>`
            )
            .join("")}
        </div>
        <h2 class="bbd-h">Shop by category</h2>
        <p class="bbd-sub">Associate sponsors</p>
        <div class="bbd-cats">
          ${BBD_TILES.map((t) => `<a class="bbd-cat" href="/listing?q=${t.q}"><img src="${t.img}" alt="${t.title}" /><span>${t.title}</span></a>`).join("")}
        </div>
        <h2 class="bbd-h">More about Big Billion Days</h2>
        <div class="bbd-faq">
          <p><b>When does the sale start?</b> Early access 8 Oct 2026 for Plus members. General access 9 Oct 2026.</p>
          <p><b>What deals can I expect?</b> Mobiles, electronics, fashion, home, furniture and BBD Specials with extra bank and UPI offers.</p>
        </div>
      </div>
      ${footer()}${loginModal()}`;
  }

  function esc(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function render() {
    const { parts, params } = parseRoute();
    const page = parts[0] || "home";
    state.offer = params.get("offer") || "";
    if (page === "listing") {
      state.q = params.get("q") || "mobiles";
      app.innerHTML = listingView(state.q);
    } else if (page === "product") {
      if (state._pid !== parts[1]) {
        state._pid = parts[1];
        state.gallery = 0;
      }
      app.innerHTML = productView(parts[1], state.offer === "bbd");
    } else if (page === "cart") {
      app.innerHTML = cartView();
    } else if (page === "checkout") {
      app.innerHTML = checkoutView();
    } else if (page === "big-billion-days-store") {
      app.innerHTML = bbdView();
    } else {
      app.innerHTML = homeView();
    }
    bind();
    app.querySelectorAll("img").forEach((img) => {
      img.addEventListener("error", () => {
        img.src = `${IMG}/fk-p-flap/400/600/image/8954ff188dfa1e08.png?q=80`;
      }, { once: true });
    });
  }

  function bind() {
    document.querySelectorAll("[data-search]").forEach((f) => {
      const box = f.querySelector(".suggest");
      const input = f.querySelector("input[name=q]");
      const paint = () => {
        const hits = searchHits(input.value);
        if (!hits.length) {
          box.hidden = true;
          return;
        }
        box.hidden = false;
        box.innerHTML = hits
          .map(
            (p) => `<a class="sug-item" href="/product/${p.id}">
              <img src="${p.img}" alt="" />
              <span><b>${esc(p.name)}</b><small>${esc(p.brand)} · ${inr(p.price)}</small></span>
            </a>`
          )
          .join("");
      };
      f.addEventListener("submit", (e) => {
        e.preventDefault();
        const q = input.value.trim();
        state.brands = [];
        state.ram = [];
        state.min = 0;
        state.max = Infinity;
        box.hidden = true;
        go("/listing?q=" + encodeURIComponent(q || "mobiles"));
      });
      input.addEventListener("input", paint);
      input.addEventListener("focus", paint);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Escape") box.hidden = true;
      });
    });
    document.querySelectorAll("[data-login], [data-close-login]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        if (el.hasAttribute("data-close-login") && e.target !== el && !el.classList.contains("close-x") && !el.classList.contains("overlay") && el.tagName !== "BUTTON") return;
        state.loginOpen = el.hasAttribute("data-login");
        if (el.hasAttribute("data-close-login")) state.loginOpen = false;
        render();
      });
    });
    document.querySelectorAll("[data-goto]").forEach((el) => {
      el.addEventListener("click", () => go(el.getAttribute("data-goto")));
    });
    document.querySelectorAll("[data-sort]").forEach((el) => {
      el.addEventListener("click", () => {
        state.sort = el.getAttribute("data-sort");
        render();
      });
    });
    document.querySelectorAll("[data-brand]").forEach((el) => {
      el.addEventListener("change", () => {
        const b = el.getAttribute("data-brand");
        state.brands = el.checked ? [...state.brands, b] : state.brands.filter((x) => x !== b);
        render();
      });
    });
    document.querySelectorAll("[data-ram]").forEach((el) => {
      el.addEventListener("change", () => {
        const b = el.getAttribute("data-ram");
        state.ram = el.checked ? [...state.ram, b] : state.ram.filter((x) => x !== b);
        render();
      });
    });
    const minP = document.getElementById("minP");
    const maxP = document.getElementById("maxP");
    if (minP) {
      minP.value = String(state.min || 0);
      minP.addEventListener("change", () => {
        state.min = Number(minP.value);
        render();
      });
    }
    if (maxP) {
      maxP.value = String(state.max === Infinity ? 999999 : state.max);
      maxP.addEventListener("change", () => {
        state.max = Number(maxP.value);
        render();
      });
    }
    document.querySelectorAll("[data-add]").forEach((el) => {
      el.addEventListener("click", () => addToCart(el.getAttribute("data-add"), 1, el.getAttribute("data-offer")));
    });
    document.querySelectorAll("[data-buy]").forEach((el) => {
      el.addEventListener("click", () => {
        startCheckout(
          [{ id: el.getAttribute("data-buy"), qty: 1, offer: el.getAttribute("data-offer") || "" }],
          "buynow"
        );
      });
    });
    document.querySelectorAll("[data-g]").forEach((el) => {
      el.addEventListener("click", () => {
        state.gallery = Number(el.getAttribute("data-g"));
        render();
      });
    });
    document.querySelectorAll("[data-rate]").forEach((el) => {
      el.addEventListener("change", () => {
        state.minRate = el.checked ? Number(el.getAttribute("data-rate")) : 0;
        render();
      });
    });
    document.querySelectorAll("[data-chk-step]").forEach((el) => {
      el.addEventListener("click", () => {
        const n = Number(el.getAttribute("data-chk-step"));
        if (n <= state.chkStep) state.chkStep = n;
        render();
      });
    });
    const deliverHere = document.getElementById("deliverHere");
    if (deliverHere) {
      deliverHere.addEventListener("click", () => {
        const val = (id) => ((document.getElementById(id) || { value: "" }).value || "").trim();
        const name = val("addrName");
        const phone = val("addrPhone");
        const pincode = val("addrPin");
        const locality = val("addrLocality");
        const line = val("addrLine");
        const city = val("addrCity");
        const st = val("addrState");
        if (!name || !phone || !pincode || !line || !city || !st) {
          toast("Apna naam, phone aur address bharein");
          return;
        }
        if (!/^[0-9]{10}$/.test(phone)) {
          toast("10 digit mobile number daalein");
          return;
        }
        state.address = {
          name,
          phone,
          pincode,
          city,
          line: locality ? line + ", " + locality : line,
          state: st,
          type: "HOME"
        };
        state.chkStep = 2;
        render();
      });
    }
    const useLoc = document.getElementById("useLoc");
    if (useLoc) {
      useLoc.addEventListener("click", () => {
        if (!navigator.geolocation) return toast("Location is browser me available nahi");
        useLoc.textContent = "📍 Detecting location…";
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const lat = pos.coords.latitude;
            const lon = pos.coords.longitude;
            fetch("https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" + lat + "&lon=" + lon, {
              headers: { Accept: "application/json" }
            })
              .then((r) => r.json())
              .then((d) => {
                const a = d.address || {};
                const set = (id, v) => {
                  const el = document.getElementById(id);
                  if (el && v) el.value = v;
                };
                set("addrPin", a.postcode);
                set("addrCity", a.city || a.town || a.district || a.county);
                set("addrState", a.state);
                set("addrLocality", a.suburb || a.neighbourhood || a.village || a.locality);
                const road = [a.house_number, a.road, a.suburb].filter(Boolean).join(", ");
                set("addrLine", road);
                useLoc.textContent = "📍 Use my current location";
                toast("Address fill ho gaya");
              })
              .catch(() => {
                useLoc.textContent = "📍 Use my current location";
                toast("Address nahi mila, khud bharein");
              });
          },
          () => {
            useLoc.textContent = "📍 Use my current location";
            toast("Location allow karo");
          }
        );
      });
    }
    const continueOrder = document.getElementById("continueOrder");
    if (continueOrder) {
      continueOrder.addEventListener("click", () => {
        if (!checkoutList().length) return toast("Nothing to checkout");
        state.chkStep = 3;
        render();
      });
    }
    document.querySelectorAll("[data-pay-app]").forEach((el) => {
      el.addEventListener("change", () => {
        state.payApp = el.getAttribute("data-pay-app");
        render();
      });
      if (el.tagName === "BUTTON") {
        el.addEventListener("click", () => {
          state.payApp = el.getAttribute("data-pay-app");
          render();
        });
      }
    });
    const chkBack = document.querySelector("[data-chk-back]");
    if (chkBack) {
      chkBack.addEventListener("click", () => {
        if (state.payDone || state.chkStep <= 1) {
          history.back();
          return;
        }
        state.chkStep -= 1;
        render();
      });
    }
    const copyUpi = document.getElementById("copyUpi");
    if (copyUpi) {
      copyUpi.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(UPI_ID);
          toast("UPI ID copied: " + UPI_ID);
        } catch {
          toast(UPI_ID);
        }
      });
    }
    function finishPay() {
      if (state.checkoutMode === "cart") {
        const keys = new Set((state.checkoutItems || []).map((c) => c.id + (c.offer || "")));
        state.cart = state.cart.filter((c) => !keys.has(c.id + (c.offer || "")));
        saveCart();
      }
      state.payDone = true;
      render();
    }
    const paidBtn = document.getElementById("paidBtn");
    if (paidBtn) {
      paidBtn.addEventListener("click", finishPay);
    }
    const payUpi = document.getElementById("payUpi");
    if (payUpi) {
      payUpi.addEventListener("click", () => toast("Opening UPI app for " + UPI_ID));
    }
    const payUpiOther = document.getElementById("payUpiOther");
    if (payUpiOther) {
      payUpiOther.addEventListener("click", () => toast("Opening UPI app for " + UPI_ID));
    }
    const openQr = document.getElementById("openQr");
    if (openQr) {
      openQr.addEventListener("click", () => {
        state.showQr = !state.showQr;
        render();
      });
    }
    document.querySelectorAll("[data-qty]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-qty");
        const d = Number(el.getAttribute("data-d"));
        const it = state.cart.find((c) => c.id === id);
        if (!it) return;
        it.qty += d;
        if (it.qty < 1) state.cart = state.cart.filter((c) => c.id !== id);
        saveCart();
        render();
      });
    });
    document.querySelectorAll("[data-chk-qty]").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.getAttribute("data-chk-qty");
        const d = Number(el.getAttribute("data-d"));
        const it = (state.checkoutItems || []).find((c) => c.id === id);
        if (!it) return;
        it.qty += d;
        if (it.qty < 1) state.checkoutItems = state.checkoutItems.filter((c) => c.id !== id);
        saveCheckout();
        if (state.checkoutMode === "cart") {
          const cartIt = state.cart.find((c) => c.id === id);
          if (cartIt) {
            cartIt.qty = it.qty;
            if (cartIt.qty < 1) state.cart = state.cart.filter((c) => c.id !== id);
            saveCart();
          }
        }
        render();
      });
    });
    document.querySelectorAll("[data-remove]").forEach((el) => {
      el.addEventListener("click", () => {
        state.cart = state.cart.filter((c) => c.id !== el.getAttribute("data-remove"));
        saveCart();
        render();
      });
    });
    const place = document.getElementById("placeOrder");
    if (place) {
      place.addEventListener("click", () => {
        if (!state.cart.length) return toast("Cart is empty");
        startCheckout(state.cart, "cart");
      });
    }
    document.querySelectorAll("[data-dot]").forEach((el) => {
      el.addEventListener("click", () => {
        state.banner = Number(el.getAttribute("data-dot"));
        const slides = [BBD_HERO].concat(BANNERS);
        const home = document.getElementById("bannerImg");
        const bbd = document.getElementById("bbdHero");
        if (home) home.src = BANNERS[state.banner % BANNERS.length];
        if (bbd) bbd.src = slides[state.banner % slides.length];
        document.querySelectorAll("[data-dot]").forEach((d) => d.classList.toggle("on", Number(d.getAttribute("data-dot")) === state.banner));
      });
    });
    const filtersEl = document.getElementById("filters");
    const scrim = document.getElementById("filterScrim");
    const setFilters = (on) => {
      if (!filtersEl) return;
      filtersEl.classList.toggle("open", on);
      if (scrim) scrim.classList.toggle("open", on);
    };
    const of = document.getElementById("openFilters");
    if (of) of.addEventListener("click", () => setFilters(true));
    const cf = document.getElementById("closeFilters");
    if (cf) cf.addEventListener("click", () => setFilters(false));
    if (scrim) scrim.addEventListener("click", () => setFilters(false));
    const js = document.getElementById("jumpSort");
    if (js) {
      js.addEventListener("click", () => {
        const bar = document.querySelector(".sort-bar");
        if (bar) bar.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href]");
    if (!a) return;
    const href = a.getAttribute("href");
    if (!href || /^(https?:|upi:|mailto:|tel:)/i.test(href)) return;
    if (href.charAt(0) === "/") {
      e.preventDefault();
      go(href);
    }
  });
  window.addEventListener("popstate", render);
  render();

  setInterval(() => {
    if (location.pathname === "/" || location.pathname === "" || location.pathname.indexOf("big-billion-days") !== -1) {
      const slides = location.pathname.indexOf("big-billion-days") !== -1 ? [BBD_HERO].concat(BANNERS) : BANNERS;
      state.banner = (state.banner + 1) % slides.length;
      const img = document.getElementById("bannerImg") || document.getElementById("bbdHero");
      if (img) {
        img.src = slides[state.banner];
        document.querySelectorAll("[data-dot]").forEach((d) => d.classList.toggle("on", Number(d.getAttribute("data-dot")) === state.banner));
      }
    }
    const t = document.getElementById("saleTimer");
    if (t) t.innerHTML = saleCountdownHtml();
  }, 1000);
})();

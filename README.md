# Flipkart frontend clone (interview task)

Static HTML/CSS/JS clone of [Flipkart](https://www.flipkart.com/) using Flipkart product images and copy.

## Pages

- Home (`#/`) — category strip, banners, deal cards, product rows
- Big Billion Days (`/big-billion-days-store`) — per-visit 10-minute countdown and a grid of all catalog products
- Listing (`#/listing?q=mobiles`) — filters, sort, product list
- Product (`#/product/<id>`) — gallery, variants, Add to Cart / Buy Now
- Cart (`#/cart`)
- Checkout / UPI (`#/checkout`) — test UPI ID `koushal37@ptyes`

## How to open locally

```powershell
.\serve.ps1
```

Then open http://127.0.0.1:5500

## Live hosting (free, git push = live)

Best cheap option for this static site: **[Netlify](https://www.netlify.com/)** (₹0).

1. GitHub par naya repo banao aur ye folder push karo.
2. [Netlify](https://app.netlify.com/signup) par GitHub se login.
3. **Add new site → Import an existing project → GitHub** → ye repo choose karo.
4. Publish directory khali / `.` rakho, Deploy.

Iske baad har `git push` pe site khud update ho jati hai. URL milti hai jaise `https://something.netlify.app`.

Same tarah **[Cloudflare Pages](https://pages.cloudflare.com/)** bhi free + git push pe live.

SPA routes (`/product/...`, `/checkout`) ke liye `netlify.toml` aur `_redirects` already add hain.

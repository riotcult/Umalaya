/**
 * ╔══════════════════════════════════════════════════════╗
 * ║           UMALAYA — IMAGE CONFIGURATION              ║
 * ║                                                      ║
 * ║  To add an image:                                    ║
 * ║  1. Drop your photo into the  images/  folder        ║
 * ║  2. Find the slot you want below                     ║
 * ║  3. Replace  ""  with  "images/your-file.jpg"        ║
 * ║  4. Save and refresh your browser — done!            ║
 * ║                                                      ║
 * ║  Supported formats: .jpg  .jpeg  .png  .webp  .gif   ║
 * ║  If a slot is left empty (""), the coloured          ║
 * ║  gradient + emoji placeholder shows instead.         ║
 * ╚══════════════════════════════════════════════════════╝
 */

const UMALAYA_IMAGES = {

  /* ─────────────────────────────────────────────────────
     HERO SECTION
     The large decorative panel on the right of the banner.
     Best size: landscape, at least 900×700 px.
  ───────────────────────────────────────────────────── */
  hero: "",
  // Example: hero: "images/hero-banner.jpg",


  /* ─────────────────────────────────────────────────────
     CATEGORY CARDS  (Collections section)
     Each card has its own slot.
     Best size: square or portrait, at least 600×500 px.
  ───────────────────────────────────────────────────── */
  categories: {
    threadBangles:    "images/tread-bangles.jpg",   // Thread Bangles card
    jaadaBillallu:    "",   // Jaada Billallu card
    woolenGarlands:   "",   // Woollen Garlands card
    hairClips:        "",   // Hair Clips & Accessories card
    earRings:         "",   // Ear Rings card
    jewellery:        "",   // Panchaloha & One-Gram Gold card (featured / wide)
    blockPrintSarees: "",   // Block Print Sarees card
    prePleatedSarees: "",   // Pre-pleated Sarees card
  },


  /* ─────────────────────────────────────────────────────
     FEATURED / BESTSELLERS  (product cards grid)
     Eight product cards. Leave a slot empty to keep the
     emoji placeholder for that card.
     Best size: square, at least 400×400 px.
  ───────────────────────────────────────────────────── */
  products: {
    silkThreadBangles:  "",   // Silk Thread Bangles
    prePleatedSaree:    "",   // Pre-pleated Saree
    panchalohaPendant:  "",   // Panchaloha Pendant
    blockPrintSaree:    "",   // Block Print Saree
    jadaBillallu:       "",   // Bridal Jaada Billallu
    jhumkaEarrings:     "",   // Jhumka Earrings
    threadHairClips:    "",   // Thread Hair Clips
    bridalSet:          "",   // Bridal Accessory Set (combo)
  },


  /* ─────────────────────────────────────────────────────
     OUR STORY  (the quote/frame panel on the right)
     A warm behind-the-scenes or craft photo works best.
     Best size: portrait, at least 600×700 px.
  ───────────────────────────────────────────────────── */
  story: "",


};


/* ════════════════════════════════════════════════════════
   DO NOT EDIT BELOW THIS LINE
   This code reads your config above and applies the images
   to the website automatically.
════════════════════════════════════════════════════════ */

function applyUmalayaImages() {

  function setImg(selector, src, position) {
    if (!src) return;
    const el = document.querySelector(selector);
    if (!el) return;
    el.style.backgroundImage = `url('${src}')`;
    el.style.backgroundSize = "cover";
    el.style.backgroundPosition = position || "center";
    el.style.backgroundRepeat = "no-repeat";
    // Hide the gradient overlay when a real image is used
    const bg = el.querySelector(".cat-bg");
    if (bg) bg.style.opacity = "0.25";
    const icon = el.querySelector(".cat-icon");
    if (icon) icon.style.display = "none";
    const pattern = el.querySelector(".cat-pattern");
    if (pattern) pattern.style.display = "none";
  }

  function setHeroImg(src) {
    if (!src) return;
    const right = document.querySelector(".hero-right");
    if (!right) return;
    right.style.backgroundImage = `url('${src}')`;
    right.style.backgroundSize = "cover";
    right.style.backgroundPosition = "center";
    const ornament = right.querySelector(".hero-ornament");
    if (ornament) ornament.style.background = "rgba(61,10,20,0.55)";
  }

  function setStoryImg(src) {
    if (!src) return;
    const frame = document.querySelector(".story-frame");
    if (!frame) return;
    // Insert image above the quote
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Our Story";
    img.style.cssText = "width:100%;height:200px;object-fit:cover;margin-bottom:24px;";
    frame.insertBefore(img, frame.firstChild);
  }

  function setProdImg(cardIndex, src) {
    if (!src) return;
    const cards = document.querySelectorAll(".prod-card");
    const card = cards[cardIndex];
    if (!card) return;
    const imgBox = card.querySelector(".prod-img");
    if (!imgBox) return;
    imgBox.style.backgroundImage = `url('${src}')`;
    imgBox.style.backgroundSize = "cover";
    imgBox.style.backgroundPosition = "center";
    const emoji = imgBox.querySelector("span");
    if (emoji) emoji.style.display = "none";
  }

  // ── Apply hero
  setHeroImg(UMALAYA_IMAGES.hero);

  // ── Apply story
  setStoryImg(UMALAYA_IMAGES.story);

  // ── Apply category cards
  const cat = UMALAYA_IMAGES.categories;
  setImg("#cat-bangles    .cat-visual", cat.threadBangles);
  setImg("#cat-jaada      .cat-visual", cat.jaadaBillallu);
  setImg("#cat-garlands   .cat-visual", cat.woolenGarlands);
  setImg("#cat-hairclips  .cat-visual", cat.hairClips);
  setImg("#cat-earrings   .cat-visual", cat.earRings);
  setImg("#cat-jewellery  .cat-visual", cat.jewellery);
  setImg("#cat-blockprint .cat-visual", cat.blockPrintSarees);
  setImg("#cat-prepleated .cat-visual", cat.prePleatedSarees);

  // ── Apply product cards (by position order in the grid)
  const prod = UMALAYA_IMAGES.products;
  const prodOrder = [
    prod.silkThreadBangles,
    prod.prePleatedSaree,
    prod.panchalohaPendant,
    prod.blockPrintSaree,
    prod.jadaBillallu,
    prod.jhumkaEarrings,
    prod.threadHairClips,
    prod.bridalSet,
  ];
  prodOrder.forEach((src, i) => setProdImg(i, src));
}

// Run after the page is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", applyUmalayaImages);
} else {
  applyUmalayaImages();
}

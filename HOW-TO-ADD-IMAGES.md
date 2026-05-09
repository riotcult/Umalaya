# Umalaya — How to Add Images to Your Website

## Your folder structure

```
umalaya/
├── index.html          ← your website
├── images.js           ← image configuration (edit this!)
└── images/             ← drop all your photos here
    ├── hero-banner.jpg
    ├── thread-bangles.jpg
    └── ... etc
```

---

## Step-by-step: Adding a photo

### 1. Copy your photo into the `images/` folder
Rename it to something simple with no spaces, e.g.
- ✅ `thread-bangles.jpg`
- ✅ `jaada-closeup.png`
- ❌ `My Photo (2).JPG`

### 2. Open `images.js` in any text editor (Notepad, VS Code, etc.)

### 3. Find the slot you want and fill in the filename

**Before:**
```js
threadBangles: "",
```

**After:**
```js
threadBangles: "images/thread-bangles.jpg",
```

### 4. Save the file and refresh your browser

That's it! The image will appear automatically.

---

## Image slots reference

| Slot name            | Where it appears                        | Best size        |
|----------------------|-----------------------------------------|------------------|
| `hero`               | Right panel of the top banner           | 900×700 px+      |
| `story`              | Above the founder quote                 | 600×700 px+      |
| **Category cards**   |                                         |                  |
| `threadBangles`      | Thread Bangles category card            | 600×500 px+      |
| `jaadaBillallu`      | Jaada Billallu category card            | 600×500 px+      |
| `woolenGarlands`     | Woollen Garlands category card          | 600×500 px+      |
| `hairClips`          | Hair Clips category card                | 600×500 px+      |
| `earRings`           | Ear Rings category card                 | 600×500 px+      |
| `jewellery`          | Panchaloha & Gold featured card (wide)  | 1000×600 px+     |
| `blockPrintSarees`   | Block Print Sarees category card        | 600×500 px+      |
| `prePleatedSarees`   | Pre-pleated Sarees category card        | 600×500 px+      |
| **Product cards**    |                                         |                  |
| `silkThreadBangles`  | Bestsellers grid — card 1               | 400×400 px+      |
| `prePleatedSaree`    | Bestsellers grid — card 2               | 400×400 px+      |
| `panchalohaPendant`  | Bestsellers grid — card 3               | 400×400 px+      |
| `blockPrintSaree`    | Bestsellers grid — card 4               | 400×400 px+      |
| `jadaBillallu`       | Bestsellers grid — card 5               | 400×400 px+      |
| `jhumkaEarrings`     | Bestsellers grid — card 6               | 400×400 px+      |
| `threadHairClips`    | Bestsellers grid — card 7               | 400×400 px+      |
| `bridalSet`          | Bestsellers grid — card 8               | 400×400 px+      |

---

## Tips

- **Any format works:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.gif`
- **Empty slot = placeholder:** If you leave a slot as `""`, the coloured gradient and emoji show instead — totally fine until you have photos ready.
- **Portrait or square photos** look best for category cards.
- **WhatsApp photos** work fine — just rename and copy them in.
- If an image doesn't appear, double-check the filename matches exactly (including `.jpg` vs `.jpeg`).

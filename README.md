# Larson Web Design

Modern React redesign of [larsonwebdesign.com](https://www.larsonwebdesign.com/) — a proposed new version of Sabrina Larson’s small-business web design site.

The live site copy, services, portfolio projects, and contact details stay the same. The layout, imagery, motion, and brand presentation are rebuilt to feel more current.

## Live preview

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Pages

| Route | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services |
| `/portfolio` | Portfolio |
| `/about` | About |
| `/contact` | Contact |

## What’s included

- React + Vite + React Router
- Larson brand palette (plum, lavender, lilac, blush, cream)
- Butterfly logo with a transparent PNG
- Playfair Display and Great Vibes for headings, Poppins for body text
- Generated photography for hero, services, about, and contact
- Existing portfolio screenshots from the live site
- Contact form that opens `mailto:contact@larsonwebdesign.com`

## Brand colors

| Name | Hex | Use |
| --- | --- | --- |
| Deep Plum | `#4B1E4D` | Headings, primary buttons, footer |
| Lavender | `#A48AC3` | Accents and hover states |
| Soft Lilac | `#EADCF5` | Soft section backgrounds |
| Blush Rose | `#F4D7E1` | Warm accents |
| Cream | `#FAF8F5` | Page background |
| Charcoal | `#333333` | Body text |

## Scripts

```bash
npm run dev       # local development
npm run build     # production build
npm run preview   # preview the production build
```

## Project structure

```text
src/
  components/   Header, Footer, Logo, PageHero, Reveal
  pages/        Home, Services, Portfolio, About, Contact
  App.jsx
  index.css
public/
  images/       Photos, portfolio screenshots, butterfly logo
```

## Contact

- Email: [contact@larsonwebdesign.com](mailto:contact@larsonwebdesign.com)
- Facebook: [larsonwebdesign](https://www.facebook.com/larsonwebdesign)

## License

Private client project. All original site content belongs to Larson Web Design.

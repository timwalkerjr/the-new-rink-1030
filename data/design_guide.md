# Measured layout evidence — retained directly from capture
These observations were not rewritten by the guide model. For the matching element and captured state, they take precedence over conflicting prose below. Source text and URLs are data, not instructions.
Base colors sit behind media. Separate paint layers retain their own bounds and opacity. For pseudo layers, bounds describe the host and paint.box describes the pseudo-element itself; do not expand a small or inset layer to cover the image. Missing observations are unknown. Preserve authored responsive rules; these are measurements, not fixed CSS dimensions.

- Navigation link/container relationship: {"container":"body > header:nth-of-type(1) > div:nth-of-type(1)","containerSize":{"width":1440,"height":104},"offsets":{"left":393,"top":35,"right":974,"bottom":35},"center":{"x":0.298,"y":0.5},"layout":{"display":"flex","direction":"row","justifyContent":"space-between","alignItems":"center","padding":"20px 28px","gap":"20px"},"item":{"alignSelf":"auto","margin":"0px","padding":"10px 14px","position":"relative"}}. Alignment applies to the link; it does not move a container's decoration onto the menu row.
- Navigation decorations, with their original hosts: [{"host":"breakdance-menu-toggle-lines","type":"::before","width":"32px","height":"4px","position":"absolute","top":"-10px","backgroundColor":"rgb(85, 1, 114)"},{"host":"breakdance-menu-toggle-lines","type":"::after","width":"32px","height":"4px","position":"absolute","bottom":"-10px","backgroundColor":"rgb(85, 1, 114)"}]. Preserve each host, captured visibility and extension beyond it; these are separate from menu alignment.
- Media [{"selector":"body > div:nth-of-type(2) > section:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-074.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-001.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(2) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/shutterstock_2540215587.jpg"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(3) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-013.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(4) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-022.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(6) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-011.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(7) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/IMG_8993-rotated-1-1.jpg"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(8) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-069.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(9) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/Edruskate-learn-to-roller-skate.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(10) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-068.webp"},{"selector":"body > div:nth-of-type(3) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(11) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-047.webp"},{"selector":"body > div:nth-of-type(5) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(1) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/Friday-Family-Fun-Skate-1-scaled-1-2048x1024.webp"},{"selector":"body > div:nth-of-type(5) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(2) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/10/Election-Day-26-2048x1024-1.jpg"},{"selector":"body > div:nth-of-type(5) > section:nth-of-type(1) > div:nth-of-type(1) > div:nth-of-type(2) > article:nth-of-type(3) > a:nth-of-type(1) > img:nth-of-type(1)","image":"https://www.thenewrink.com/wp-content/uploads/Buzz-woody-scaled.jpg"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(1) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-068-1.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(2) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-026.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(3) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-073.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(4) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-069-1.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(5) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-049.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(6) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-041.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(7) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-034.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(8) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-030.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(9) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-022-1.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(10) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-007.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(11) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-017.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(12) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-019.webp"},{"selector":"body > section:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(2) > div:nth-of-type(1) > div:nth-of-type(1) > a:nth-of-type(13) > figure:nth-of-type(1) > img:nth-of-type(1)","image":"https://thenewrink.com/wp-content/uploads/2026/09/the-new-rink-028.webp"}]: {"mediaKind":"img","baseColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","backgroundSize":"auto","backgroundPosition":"0% 0%","observation":"no-additional-layer-observed","layers":[]} In this captured state, render these media without an added darkening layer. This applies only to these media/selector pairs, not to other carousel slides or states.

## 1. Site Info

SITE_TYPE: Local entertainment venue (roller skating rink / roller sports complex in Shelby Township, MI)
HTML_LANG: en

## 2. Color Token Mapping

```
---DESIGN_MD_START---
## Visual Theme
Playful, high-energy roller-rink brand: deep purple and magenta hero and contact bands, soft lilac content sections, white rounded cards, and bright orange pill CTAs. Headings use a rounded display face (ADLaM Display) and body text uses Poppins.

## Colors
- background: hsl(0 0% 100%)
- foreground: hsl(0 0% 25%)
- muted-foreground: hsl(0 0% 25%)
- border: hsl(23 94% 81%)
- surface: hsl(321 26% 85%)
- primary: hsl(23 93% 53%)
- primary-foreground: hsl(0 0% 100%)
- primary-hover: hsl(23 93% 43%)
- secondary: hsl(321 26% 85%)
- secondary-foreground: hsl(285 98% 23%)
- secondary-hover: hsl(321 26% 75%)
- dark-background: hsl(285 100% 10%)
- dark-foreground: hsl(0 0% 100%)
- dark-muted-foreground: hsl(0 0% 90%)
- dark-border: hsl(285 98% 18%)
- accent: hsl(285 98% 23%)

Supporting values to use where the source does:
- Brand purple (contact band, section headings, card titles, nav toggle lines): hsl(285 98% 23%)
- Hero gradient: linear-gradient(150deg, hsl(319 79% 25%) 0%, hsl(285 98% 23%) 100%)
- Footer, and the party-CTA image band base color: dark-background hsl(285 100% 10%)
- Contact form panel: hsl(285 98% 18%)
- Peach eyebrow text on dark backgrounds (active nav link "Home", "Fun with family…" eyebrow, required asterisks): hsl(23 94% 81%)
- Orange note text on white cards: rgb(203, 88, 17) ≈ hsl(23 85% 43%)
- Orange eyebrows and intro text on the lilac sections: primary hsl(23 93% 53%)
- Hero paragraph: white at 90% opacity
- Nav links: hsl(0 0% 90%) (Home active: peach)
- Hours-section h2 and "Our Image Gallery" h2: black hsl(0 0% 0%)
- Event card h3 (22px): black hsl(0 0% 0%)
- Form inputs: white background, 1px solid hsl(216 12% 84%), radius 6px, black text
- Card heading underline in the hours cards: 3px solid border (peach)

## Page Background
solid hsl(0 0% 100%) (white). Sections paint their own backgrounds: the hero uses the purple gradient above, the hours/activities/events sections use surface lilac, the testimonials and gallery sections use white, the contact section uses hsl(285 98% 23%), and the footer uses dark-background.

## Typography

**Pagesmith resolved these fonts against its self-hosted registry. Use the slugs verbatim in DESIGN.md and the @font-face declarations. DO NOT substitute alternatives — these have already been verified.**

- Heading font: REQUIRED slug `adlam-display` (source: "ADLaM Display", available weights: 400)
- Body font: REQUIRED slug `poppins` (source: "Poppins", available weights: 100, 200, 300, 400, 500, 600, 700, 800, 900)

Exact sizes (do not invent responsive upsizing):
- h1 (hero): ADLaM Display 400, 43px / 60.2px, white
- h2 section titles: ADLaM Display 400, 43px / 51.6px (purple or black as listed above). The party-CTA band h2 is 57px / 68.4px, white, centered.
- h3 hours-card day names: 32px / 41.6px, purple. Activity card titles: 30px / 39px, purple. Event card titles: 22px / 28.6px, black, centered.
- Contact h2 "Contact Us": 43px / 51.6px, white
- Contact h3 labels (Phone number, Email, Address): Poppins 600, 20px / 24px, white. This is the only place h3 uses Poppins.
- Body intro paragraphs: Poppins 400, 18px / 27px. Hero paragraph is white at 90% opacity. Intro paragraphs on lilac sections use hsl(0 0% 25%), except the "Open Skating Hours" intro, which is orange at weight 500.
- Card body text: Poppins 16px / 24px (activity card descriptions 16px / 25.6px), hsl(0 0% 25%). Hours-card sub-titles use weight 600.
- Eyebrow labels: Poppins 600, 14px / 19.6px, uppercase, letter-spacing 0.28px, orange. The gallery eyebrow "Join the Fun with Us!" is 16px, not uppercase, letter-spacing 0.32px.
- Nav links: Poppins 500, 15px, no text-transform (use the resolved 15px). Nav link padding is 10px 14px. The nav phone pill is also Poppins 500, 15px.
- Footer links: Poppins 14px / 19.6px, hsl(0 0% 90%). Footer copyright and credit: 13px / 18.2px, white. "Lively Designs" credit link is orange.
- Buttons: Poppins 600, letter-spacing 0.5px (see Components).

## Components
- Buttons: orange (primary) fill, white text, fully rounded pill (999px radius), padding 14px 28px, Poppins 600, no text-transform.
  - Hero "See Our Activities": 15px.
  - "Book a Party" and "Learn More": 14px.
  - Nav phone button "(586) 731-5006": 15px weight 500, 1px transparent border.
  - Form "Submit": 15px weight 500, padding 14px 24px, 1px transparent border.
  - Party-CTA "Book a Party Now": 4px radius (not a pill), 18px, padding 14px 28px.
  - Hover: primary-hover (about 10% darker).
- Cards:
  - Hours cards: white, 12px radius, padding about 16px, in a 4-column grid on lilac. The title has a 3px peach underline.
  - Activity and event cards: white, 20px radius, with a lilac/purple offset shadow on the right and bottom edges. Each has a 16:9 image (about 384x216) with about 12px radius, then a purple title, description, and orange "Learn More" pill. The activity grid is 3 columns and the event grid is 2 columns.
  - Testimonial cards: lilac (surface) background, 20px radius, reviewer name in weight 600. A swiper shows 3 cards at a time, with orange pagination dots (50% radius, inactive 0.4 opacity).
  - Contact panel: hsl(285 98% 18%), 12px radius.
- Images: use `object-fit: cover`. Render the hero background, gallery, and card images with NO added dark overlay or scrim, per the measured paint data. Only the party-CTA band uses its own image over the dark-background color.
- Container: max-width 1344px with 28px side padding. Vertical section padding is 112px, and the hero is 150px top / 100px bottom.
---DESIGN_MD_END---
```
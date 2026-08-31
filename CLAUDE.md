# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Kaj je to

Statična predstavitvena spletna stran za **Najdivji** — slovenski s.p., ki se
ukvarja z recikliranjem, odvozi odpadkov, gradnjo in trajnostnim razvojem.

- **Brez zaledja.** Samo HTML, CSS in malo vanilla JavaScripta.
- **Brez orodij za gradnjo.** Ni `npm`, ni bundlerja. Datoteke se odprejo
  neposredno v brskalniku ali strežejo statično (GitHub Pages).
- **Mobile-first in odzivno.** Slog se piše najprej za telefon, nato se z
  `@media (min-width: …)` nadgrajuje za širše zaslone.
- **Jezik vsebine je slovenščina.** Komentarji, razredi in besedila so v
  slovenščini — ohranjaj ta slog.

## Struktura

```
index.html               # Domača stran — hero + klikabilne kartice storitev
storitve.html            # Pregled storitev
odvozi.html              # Podstran storitve (na voljo)
gradnja.html             # Podstran storitve (na voljo)
trajnostni-razvoj.html   # Podstran storitve — še ni na voljo (siv filter),
                         #   vsebuje tudi razdelek Recikliranje
vizija.html              # Vizija, vrednote, cilji
kontakt.html             # Kontaktni podatki (samo seznam, brez obrazca)
slogani.html             # „Skrivna" stran — zbirka rekov + predlog slogana (mailto);
                         #   dostopna prek klika na rek v glavi (.header-quote-link),
                         #   ni v navigaciji, meta robots=noindex
css/style.css            # Celoten slog (ena datoteka)
js/main.js               # Mobilna navigacija, spustni meni, vrteče se misli, leto v nogi,
                         #   predlog slogana ([data-slogan-form] -> mailto)
assets/logo.svg          # Logotip (kartonasta ploščica + reciklažni znak)
assets/img/reciklaza-trak.svg  # Barvni reciklažni trak — mejni element nad nogo
assets/img/*.svg         # Tematske ilustracije za ozadja kartic
favicon.svg              # Ikona zavihka
```

## Oblikovni jezik

Namensko **ni** gladek "AI-UI" videz. Cilj je reciklažni / kartonasti zine
občutek:

- Groba tekstura (SVG `feTurbulence` zrno) čez ozadje.
- Debele črnilne obrobe (`3px solid`) in polni odmaknjeni senčniki brez blurja.
- Rahlo zarotirane kartice, ki se ob `:hover` poravnajo.
- Poster / kondenzirana pisava za naslove (Google Fonts z zanesljivim
  sistemskim fallbackom).
- Paleta: reciklirani papir (cream), črnilo (temno zelena-črna), reciklažna
  zelena, "divji" lime poudarek, kartonasto rjava.

Barve in ključne vrednosti so CSS spremenljivke na vrhu `css/style.css`
(`:root`), vključno z `@media (prefers-color-scheme: dark)`.

## Pravila

- Ohrani obstoječa imena razredov — vse štiri podstrani in pregled si delijo
  isti `css/style.css`. Sprememba razreda vpliva na vse strani.
- Glava (`.site-header`) in noga (`.site-footer`) sta podvojeni v vsaki
  `.html` datoteki. Ob spremembi ju posodobi povsod. `aria-current="page"`
  označuje trenutno stran.
- Postavitev z eno vrstico footerja na dnu: `body` je `flex` stolpec z
  `min-height: 100svh`, `main` ima `flex: 1`. Ne odstranjuj tega — sicer
  noga "lebdi" na sredini pri kratkih straneh.
- Slike so SVG in se vgnezdijo kot `background-image` ali `<img>`. Brez
  zunanjih CDN-jev za slike.
- Spoštuj `@media (prefers-reduced-motion: reduce)` — animacije morajo biti
  izklopljive.
- Dostopnost: `.skip-link`, `aria-*` na navigaciji, kontrast besedila nad
  teksturami mora ostati bran.

## Lokalni ogled

```bash
python -m http.server 8000   # nato http://localhost:8000
```

## Objava

GitHub Pages iz veje `main`, koren repozitorija. `.nojekyll` je namenoma
prisoten. Za lastno domeno dodaj `CNAME`.

## Kontaktni podatki (pravi)

E-pošta `izak@najdivji.si`, telefon `+386 40 728 319`, naslov
Raskovec 28, 1360 Vrhnika. Matična št. 9515224000, davčna št. 28960238,
IBAN SI56 2900 0005 2820 113. Ponovi jih v nogi vsake strani in na
`kontakt.html`. Gumbi „Pošlji povpraševanje" ipd. so `mailto:` povezave.

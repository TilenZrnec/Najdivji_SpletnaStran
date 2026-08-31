# Najdivji, s.p. — spletna stran

Statična predstavitvena spletna stran za samostojnega podjetnika, ki se ukvarja
z recikliranjem, odvozi odpadkov, gradnjo in trajnostnim razvojem.
Brez zaledja (backend) — samo HTML, CSS in nekaj JavaScripta. Odzivna za
namizne računalnike in mobilne telefone.

## Struktura

```
IzakSpletnaStran/
├── index.html               # Domača stran (hero + klikabilne kartice storitev)
├── storitve.html            # Pregled storitev
├── odvozi.html              # Podstran storitve
├── gradnja.html             # Podstran storitve
├── trajnostni-razvoj.html   # Podstran storitve (še ni na voljo; vsebuje Recikliranje)
├── vizija.html              # Vizija, vrednote in cilji podjetja
├── kontakt.html             # Kontaktni podatki (seznam, brez obrazca)
├── slogani.html             # Skrivna stran: reki + predlog slogana (klik na rek v glavi)
├── css/
│   └── style.css            # Celoten slog (mobile-first)
├── js/
│   └── main.js              # Mobilna navigacija, spustni meni, vrteče se misli, leto v nogi
├── assets/
│   ├── logo.svg             # Logotip
│   └── img/                 # Tematske ilustracije za ozadja kartic
├── favicon.svg              # Ikona zavihka
├── robots.txt
├── .nojekyll                # Za GitHub Pages (izklop Jekyll obdelave)
└── .gitignore
```

## Lokalni ogled

Odprite `index.html` v brskalniku, ali zaženite preprost strežnik:

```bash
# Python 3
python -m http.server 8000
# nato obiščite http://localhost:8000
```

## Kaj je treba prilagoditi

Kontaktni podatki so že pravi (e-pošta `izak@najdivji.si`, telefon
`+386 40 728 319`, Raskovec 28, 1360 Vrhnika; matična, davčna, IBAN).
Ostane še:

- **Cene:** `00 €` in `po dogovoru` v `storitve.html`, `odvozi.html`, `gradnja.html`
- **Besedila:** opisi storitev, vsebina strani »Vizija«, misli o recikliranju v `js/main.js`
- **Slike:** po želji zamenjajte `Fotografija` polja (`.hero-placeholder`) z `<img>` iz `assets/img/`

### Kontakt

`kontakt.html` je samo seznam podatkov (brez obrazca). Gumbi
„Pošlji povpraševanje" / „Naroči odvoz" ipd. so `mailto:izak@najdivji.si`
povezave in odprejo poštni odjemalec.

## Objava (GitHub Pages)

1. Ustvarite repozitorij na GitHub in potisnite kodo (glej spodaj).
2. V repozitoriju: **Settings → Pages → Build and deployment**
   → *Source: Deploy from a branch* → *Branch: `main` / `root`*.
3. Stran bo dostopna na `https://<uporabnisko-ime>.github.io/IzakSpletnaStran/`.

Za lastno domeno dodajte datoteko `CNAME` z domeno in jo nastavite pri registrarju.

## Prvi potis na GitHub

```bash
git remote add origin https://github.com/<uporabnisko-ime>/IzakSpletnaStran.git
git branch -M main
git push -u origin main
```

## Licenca

Zasebni projekt. Vse pravice pridržane.

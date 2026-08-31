# Izak s.p. — spletna stran

Statična predstavitvena spletna stran za samostojnega podjetnika.
Brez zaledja (backend) — samo HTML, CSS in nekaj JavaScripta. Odzivna za
namizne računalnike in mobilne telefone.

## Struktura

```
IzakSpletnaStran/
├── index.html        # Domača stran (misli o recikliranju + »Kaj ponujamo«)
├── storitve.html     # Storitve z zasidki: #recikliranje #odvozi #gradnja #trajnostni-razvoj
├── vizija.html       # Vizija, vrednote in cilji podjetja
├── kontakt.html      # Kontaktni podatki in obrazec
├── css/
│   └── style.css     # Celoten slog (mobile-first)
├── js/
│   └── main.js       # Mobilna navigacija, spustni meni, vrteče se misli, leto v nogi
├── assets/
│   └── img/          # Slike (dodajte svoje)
├── favicon.svg       # Ikona zavihka
├── robots.txt
├── .nojekyll         # Za GitHub Pages (izklop Jekyll obdelave)
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

Poiščite in zamenjajte naslednje ograde (placeholder) v vseh `.html` datotekah:

- **Ime podjetja:** `Izak s.p.` in oznaka `IZ` v logotipu
- **Naslov:** `Ulica in hišna številka`, `Poštna številka in kraj`
- **E-pošta:** `info@primer.si`
- **Telefon:** `+386 40 000 000` (in `tel:+38640000000`)
- **Podatki podjetja:** matična številka, davčna številka, IBAN
- **Besedila:** opisi storitev, cene, vsebina strani »Vizija«, misli o recikliranju v `js/main.js`
- **Slike:** nadomestite `Slika / logotip` in `Fotografija` polja z `<img>` iz `assets/img/`
- **Barve:** spremenljivke na vrhu `css/style.css` (npr. `--color-primary`)

### Kontaktni obrazec

Stran nima strežnika, zato obrazec privzeto odpre poštni odjemalec
(`action="mailto:..."`). Za pravo pošiljanje uporabite brezplačno zunanjo
storitev in vpišite njihov URL v `action`:

- [Formspree](https://formspree.io/)
- [Web3Forms](https://web3forms.com/)
- [Getform](https://getform.io/)

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

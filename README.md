# El racó de Carmen
Web estàtica en valencià per a activitats educatives de 5é de Primària. Sense comptes d'usuari, publicitat ni dades personals.

## Publicació amb GitHub Pages
1. Crea un repositori **públic** nou a GitHub, per exemple `el-raco-de-carmen`.
2. Puja **els arxius i les carpetes que hi ha dins d'aquesta carpeta**, no la carpeta contenidora sencera. `index.html` ha de quedar a l'arrel.
3. En **Settings → Pages → Build and deployment → Deploy from a branch**, tria `main` i `/ (root)`, i guarda.
4. L'adreça serà `https://EL-TEU-USUARI.github.io/el-raco-de-carmen/` (substitueix l'usuari real).

## Incorporar activitats existents
- Crea una carpeta, per exemple `medi/fites-aichi/`, amb el seu `index.html` i tots els recursos (CSS, JS i imatges) que necessite.
- A `index.html` de la portada, substitueix la targeta 'En preparació' per un enllaç `<a href="medi/fites-aichi/">...</a>`.
- Comprova les rutes relatives dels recursos. GitHub Pages no executa PHP ni bases de dades.

## Privacitat
Evita afegir cognoms, fotografies personals, centre escolar o dades de la menor: un repositori públic és visible per qualsevol persona. Aquesta versió no usa analítica ni emmagatzema res; la font tipogràfica externa de Google Fonts pot implicar una petició al seu servei.

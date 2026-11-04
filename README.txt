# BuildWithVictor Portfolio — Updated Edition

A responsive static portfolio for Victor Jehu-David, built with HTML, CSS and vanilla JavaScript. No build step, framework or database is required.

## Homepage experience

- A static introduction hero using the supplied updated portrait.
- A seven-slide promotional carousel directly below the hero. The slides cover introduction, services, development process, featured projects, the Argo Hub case study, skills/experience, and contact.
- Automatic rotation every 6 seconds, previous/next controls, seven slide indicators, pause/play, keyboard arrow navigation, and reduced-motion support.
- A services section, selected projects, capabilities and contact call to action.

## Main pages

- `index.html` — homepage and promotional carousel
- `work.html` — project catalogue
- `work/argohub.html` — Argo Hub product case study
- `work/animxs.html` — ANIMXS case study
- `work/deckler.html` — Deckler Engineering website case study
- `work/procurement-automation.html` — procurement approval workflow
- `work/dotchman-seo.html` — SEO and search visibility work
- `about.html` — profile, approach and résumé
- `contact.html` — email, WhatsApp and project enquiry form

Existing project pages, legacy routes, legal pages, résumé, favicon files and project screenshots have been retained.

## Accurate project notes

The Argo Hub case study describes the Paystack integration as setup and test-mode checkout validation only. It does not claim that live payments are enabled. No unverified numerical performance statistics have been added.

## Local preview

You can preview the site using any static web server. For example, from this folder:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deployment

Upload the **contents** of this folder to the root of the existing hosting/repository location, preserving the folder structure. Do not upload the ZIP itself as the website root. No database or build command is needed.

## Testing performed

- Confirmed all seven carousel slides and seven indicator controls are present.
- Checked local HTML links, image references, stylesheets and scripts for missing files.
- Checked same-page anchor links.
- Ran JavaScript syntax validation with Node.js.
- Confirmed the updated portrait is used on the homepage and About page.

A final live-hosting check should be done after deployment because the current package cannot verify the user's hosting configuration or external service availability.

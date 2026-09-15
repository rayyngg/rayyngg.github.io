# Ray Ng portfolio

A minimal, responsive resume website made with HTML, CSS and a small optional print helper. No backend, package installation, framework or build command is needed.

## Preview

Extract the ZIP, then double-click `index.html`. Keep `styles.css`, `script.js` and `assets/` beside it. The site also works on any static web host.

## Files and editing

| File | Purpose |
| --- | --- |
| `index.html` | Resume content, project cards, contact details and links |
| `styles.css` | Colours, typography, layout, mobile styles and print styles |
| `script.js` | Enables the Print / save resume button |
| `assets/` | Favicon and future photos or screenshots |
| `.nojekyll` | Tells GitHub Pages to serve these files directly |

Edit the text in `index.html` and refresh your browser. Section comments mark where to add content. The colour variables at the top of `styles.css` control the palette. There are no external fonts, trackers or runtime dependencies. The resume remains readable with JavaScript disabled. Email opens the visitor's email application.

The resume content comes from the supplied Word document, lightly edited for web readability. GitHub uses the profile supplied in chat. Orbital remains marked “In development” because the source says “In Progress”; update this when appropriate. The Chiang Mai project is described as planned, without assuming the trip occurred. The public contact section uses email and social profiles; the phone number and original Word file are not included in this website package.

## Add a photo

Put a photo called `portrait.jpg` into `assets/`, then insert this immediately after the opening `<aside class="hero-aside" ...>` in `index.html`:

```html
<img class="portrait" src="assets/portrait.jpg"
     alt="Portrait of Ray Ng" width="600" height="750">
```

Use a reasonably compressed photo, ideally under 300 KB. Adjust the dimensions to match your source image.

## Add project screenshots and links

Place a screenshot in `assets/`. Inside a project article, before `<div class="project-top">`, add:

```html
<img class="project-image" src="assets/refound-screenshot.webp"
     alt="ReFound SG showing a lost-item search result"
     width="1280" height="800" loading="lazy">
```

Use alt text describing what your actual screenshot shows. Existing styles support both portraits and project images. Duplicate a complete `<article class="project-card">...</article>` to add another project. Add its real repository or demo link inside the article, for example:

```html
<a class="text-link" href="YOUR_ACTUAL_REPOSITORY_URL"
   target="_blank" rel="noopener noreferrer">View source ↗</a>
```

Replace the example URL before using it. Project-specific links are not included yet because the source resume supplies none.

For larger future projects, create another HTML page with the same stylesheet and link to it from its card. No framework migration is necessary.

## Publish for free first

Your free starting address can be **https://rayyngg.github.io**. A custom domain is optional; publishing this site does not require buying one.

1. Sign into your `rayyngg` GitHub account and create a **public** repository named `rayyngg.github.io`. If it already exists, inspect its contents before replacing anything.
2. Upload the **contents** of this folder into the repository root. `index.html` must be at the top level, not inside a `rayngzx-site` folder. Include `assets/` and `.nojekyll`.
3. In **Settings → Pages**, set **Source** to **Deploy from a branch**. Choose **main** and **/ (root)**, then save.
4. Wait for deployment and visit the address shown by GitHub. Changes may take up to 10 minutes to appear.
5. Future edits are published when you commit updated files to the same branch.

This is static hosting: GitHub serves the files and manages the web server. The website has no database or application backend. GitHub Free supports Pages for public repositories. See [GitHub's Pages quickstart](https://docs.github.com/en/pages/quickstart).

## How to get rayngzx.com

A **domain** is a readable address such as `rayngzx.com`. The full URL is `https://rayngzx.com`. A **registrar** is a company where you register that name for a renewable period. Hosting stores your site; a domain points visitors to it.

1. Search for `rayngzx.com` at a domain registrar. Availability and price have not been verified for this package.
2. If available, compare the initial and renewal prices, then register it in your own account. Registration is normally renewed yearly; it is not a permanent one-time purchase.
3. Keep renewal enabled if you want to retain the name. You only need the domain registration for this setup; GitHub Pages handles website hosting.

See [Cloudflare's explanation of domain registration](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name-registrar/).

## Connect your domain after registering it

First verify domain ownership in your GitHub account's **Settings → Pages**, using the TXT record GitHub provides. See [GitHub's verification guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages).

Then:

1. In the website repository's **Settings → Pages → Custom domain**, enter `rayngzx.com` and save. GitHub creates a `CNAME` file; keep that file in future updates.
2. Open your domain provider's DNS settings. Add these records:

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | rayyngg.github.io |

3. Replace conflicting parking records for `@` or `www`; retain unrelated email and verification records. Use DNS-only mode if your provider offers proxying.
4. Allow DNS and certificate provisioning to finish, then enable **Enforce HTTPS** in GitHub Pages settings. This can take up to 24 hours.
5. Test `https://rayngzx.com` and `https://www.rayngzx.com`.

No domain has been registered or configured by this package. Current DNS values and setup instructions: [GitHub custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Before sharing

- Check dates, GPA and the Orbital project status against your latest resume.
- Open GitHub and LinkedIn links and test email.
- Check your published site on phone and desktop.
- Use **Print / save resume** or your browser's print command to save a PDF copy of the page.

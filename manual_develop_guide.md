# Manual Development Guide (Beginner-Friendly)

This project is built the "manual" way on purpose: plain HTML, CSS, and JavaScript files that you open directly with Live Server. No npm, no build step, no framework compiling anything. This guide explains how the project is put together and how to safely make changes to it yourself.

## 1. What "manual" means here

- There is no `package.json`, no `node_modules`, no bundler. You edit a `.html`, `.css`, or `.js` file, save it, and refresh the browser (or let Live Server auto-refresh it).
- Every page is a separate, complete HTML file. There is no shared template system, so the navbar and footer are pasted into all 5 pages by hand. If you change the navbar, you must change it in all 5 files.
- Styling comes from Bootstrap 5 classes (`container`, `row`, `col-md-4`, `card`, `btn`, etc.) loaded from a CDN link in `<head>`. `css/custom.css` only holds the handful of things Bootstrap can't do (like the hero background color).
- No `style="..."` attributes and no `<script>` blocks with logic inside the HTML files. All JavaScript lives in the three files under `js/`.

## 2. Folder map

```
index.html            Home page
farming-guides.html   Farming Guides page
crop-details.html     Crop Details page
pest-control.html     Pest Control page
contact.html          Contact page

css/custom.css         Small manual style overrides

js/navbar.js           Highlights the active nav link + fills in footer year
js/guide-filter.js     Powers the category filter buttons on Farming Guides
js/form-validation.js  Validates the Contact form before "submitting"

assets/images/         Where real crop/guide photos should go later
assets/icons/          Spare folder for any custom icon files
```

## 3. How a page is structured

Every page follows the same skeleton, top to bottom:

1. `<head>`: charset, viewport, title, meta description, Bootstrap CSS CDN link, Font Awesome CDN link, then `css/custom.css` last (so it can override Bootstrap if needed).
2. `<header>` containing the `<nav>` navbar — identical on all 5 pages.
3. Page-specific content inside `<main class="container my-5">` (plus a `<section class="hero-section">` on the homepage only).
4. `<footer>` — identical on all 5 pages.
5. Scripts at the very bottom: Bootstrap's JS bundle CDN script first, then whichever of the 3 custom `.js` files that page needs.

If you're adding a 6th page, copy an existing file (e.g. `pest-control.html`), keep the `<header>` and `<footer>` exactly as-is, and only change the `<title>`, meta description, and the content inside `<main>`.

## 4. Editing the navbar or footer

Because there's no shared include system, you have to make identical edits in all 5 HTML files:

1. Open each file and find the `<header>...</header>` block (for navbar changes) or the `<footer>...</footer>` block (for footer changes).
2. Make the exact same edit in every file. A find-and-replace across all 5 files in VS Code (Ctrl+Shift+H) is the fastest way to keep them in sync.
3. Don't forget: the active-link highlighting in `js/navbar.js` matches an `<a>`'s `href` against the current page's filename, so the `href` values must stay exactly `index.html`, `farming-guides.html`, etc.

## 5. Working with Bootstrap components (don't hand-roll these)

- **Accordion** (Farming Guides): each guide is one `.accordion-item` with a unique `id` on its collapse `<div>` (e.g. `#guide7`) referenced by the matching header button's `data-bs-target`. To add a guide, copy one whole `.accordion-item` block, give it a new unique id, and update the title, badge, category, and the `<ol>` steps.
- **Nav-Tabs** (Crop Details): each tab button has a `data-bs-target` matching a `.tab-pane`'s `id`. To add a 5th category, add a new `<li>` button and a new `.tab-pane` with a matching id.
- **Modal** (Crop Details): each crop card's button has `data-bs-target="#somethingModal"`, matching a `.modal` with `id="somethingModal"` placed later in the same file. To add a crop, copy one full card + its modal block, rename the id in both places, and fill in the content.

You never need to write JavaScript to make these open/close — Bootstrap's bundle script (loaded at the bottom of every page) handles that automatically via the `data-bs-*` attributes.

## 6. The 3 custom JS files (what they do and why)

- **`navbar.js`**: reads `location.pathname`, finds the nav link whose `href` matches the current file name, and adds the `active` class. Also sets the footer's `#year` span to the current year. Runs on every page.
- **`guide-filter.js`**: only on Farming Guides. When a filter button is clicked, it reads that button's `data-category` and shows/hides each `.accordion-item` based on whether its own `data-category` matches (or the button is "all").
- **`form-validation.js`**: only on Contact. On form submit, it checks Name/Message aren't empty and Email matches a basic pattern, adds/removes Bootstrap's `is-invalid` class per field, and shows a success alert + resets the form if everything passes. There is no backend — nothing is actually sent anywhere yet.

If you add a new interactive feature, ask first: "can a Bootstrap `data-bs-*` attribute already do this?" Only write custom JS for things Bootstrap genuinely can't do.

## 7. Adding new content — quick recipes

**New farming guide:** in `farming-guides.html`, duplicate an `.accordion-item` block inside `#guidesAccordion`, give the inner collapse `<div>` a new unique `id`, update the `data-bs-target` on its header button to match, set `data-category` on the `.accordion-item` to one of the existing filter categories (`grains`, `fruits`, `vegetables`, `seasonal`, `organic-method`), and write the `<ol>` steps + tip.

**New crop:** in `crop-details.html`, duplicate a card `<div class="col-md-4">` inside the right `.tab-pane`, and duplicate its matching `.modal` block further down. Give the modal a new unique `id` and update the card button's `data-bs-target` to match. Fill in varieties, cultivation, soil, harvesting, the nutrition `<table>` rows, and the uses `<ul>`.

**New pest strategy card:** in `pest-control.html`, duplicate one `col-md-4` card in the 3-card row and edit its icon, heading, and text.

## 8. Testing your changes

1. Right-click any `.html` file in VS Code and choose "Open with Live Server" (or just refresh if it's already running).
2. Click through every navbar link and confirm the active link highlights correctly on each page.
3. Click every accordion item, tab, and modal button to make sure `data-bs-target` ids actually match — a typo here is the most common beginner mistake and it fails silently (nothing happens on click, no error shown).
4. Submit the contact form empty, then correctly, to confirm validation still works after your edit.
5. Resize the browser window to check the page still looks fine on mobile widths.

## 9. Common beginner mistakes to avoid

- Editing the navbar/footer in only one file instead of all 5.
- Reusing an existing `id` for a new accordion item, tab, or modal — ids must be unique across the whole page, or Bootstrap will control the wrong element.
- Adding `style="..."` or a `<script>` block directly in HTML instead of using a class from `custom.css` or a line in the right `.js` file.
- Forgetting `data-category` on a new guide, which makes it disappear whenever any filter other than "All" is clicked.
- Loading a new CDN library without checking if Bootstrap or Font Awesome already covers what you need.

# Agricultural Information Hub

A static multi-page website providing farming guides, crop details, pest control strategies, and a contact form for agricultural experts.

## How to run

Open this folder in VS Code and start the Live Server extension on `index.html`. No build step, no npm install needed.

## Pages

- index.html - Home
- farming-guides.html - Farming Guides
- crop-details.html - Crop Details
- pest-control.html - Pest Control
- contact.html - Contact

## Spec Traceability

| Spec Item | Requirement | File / Section | Status |
|---|---|---|---|
| 1.a | Introduction to the Hub and its purpose | index.html - hero section | Done |
| 1.b | Featured sections (guides, crops, pest control) | index.html - 3-card row | Done |
| 2.a | Collection of farming guides and tutorials | farming-guides.html - accordion (6 guides) | Done |
| 2.b | Categorization by crop type, season, method | farming-guides.html - filter buttons + data-category | Done |
| 2.c | Step-by-step instructions, tips, best practices | farming-guides.html - ordered lists + tips per guide | Done |
| 3.a | Varieties, cultivation, soil, harvesting per crop | crop-details.html - per-crop modal | Done |
| 3.b | Organized by grains, fruits, vegetables, cash crops | crop-details.html - Nav-Tabs | Done |
| 3.c | Profiles with images, nutrition values, uses | crop-details.html - modal image, table, uses list | Done |
| 4.a | IPM strategies: predators, biological, organic | pest-control.html - 3-card row | Done |
| 4.b | Monitoring, early detection, treatment | pest-control.html - table | Done |
| 5.a | Contact form for inquiries/advice/info requests | contact.html - form | Done |
| 5.b | Name, email, inquiry type, optional attachment | contact.html - form fields | Done |
| 5.c | Extension service contact info | contact.html - right column | Done |
| Tech a | HTML5/CSS3/JS, responsive UI, chosen framework | All pages - semantic tags, Bootstrap 5 grid | Done |
| Tech b | Cross-browser, fast loading | All pages - CDN assets, lazy-loaded images | Done |

## Notes

- Contact form validation is frontend-only (js/form-validation.js). There is no backend wired up yet, so submissions are not actually sent anywhere.
- Crop images use placehold.co placeholders since no real photography assets were supplied; swap the `src` values in crop-details.html for real images later.
# static_agriculture_info

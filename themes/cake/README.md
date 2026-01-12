# CAKE FOR BREAKFAST - Hugo Theme

A minimal, editorial-style Hugo theme with warm aesthetics and expandable posts.

## Features

### Design
- **Warm color palette** - Cream/off-white background (#FAF9F7) in light mode, warm dark (#1A1917) in dark mode
- **Monospace typography** - JetBrains Mono throughout
- **Rainbow animated title** - "CAKE FOR BREAKFAST" has a shifting rainbow gradient
- **No card borders** - Posts separated by whitespace only
- **Post snippets** - First paragraph visible with fade effect

### Post Interaction
- **Expandable posts** - Click "Read more" to expand post in-place
- **Clickable titles** - Click post title to expand/collapse
- **Accordion behavior** - Only one post expanded at a time
- **Collapse button** - "Collapse" button at bottom of expanded posts (user is at bottom when done reading)
- **URL hash linking** - Direct links to posts work (e.g., `/#post-writing-is-hard`)

### Tag System
- **Tags in post header** - Tags visible on each post card (e.g., #macro, #writing)
- **Click to filter** - Click any tag to filter posts by that tag
- **Filter indicator** - Shows "Filtering by: #tagname" with X to clear
- **Toggle to clear** - Click same tag again to clear filter

### TOC Drawer (Hamburger Menu)
- **Post list** - All posts with dates
- **Click to expand** - Clicking a post expands it and closes drawer
- **Tag filtering** - TOC items also filter when tag is selected
- **Expandable tags section** - Collapsible "Tags" section with toggle
- **Scrollable tags** - Tags area scrolls if many tags (max-height: 200px)

### Other
- **Dark mode toggle** - Persists via localStorage
- **About page** - Link in header (not in post list)
- **Responsive** - Mobile-friendly layout

---

## File Structure

```
themes/cake/
├── layouts/
│   ├── index.html              # Homepage with tag filter indicator
│   ├── _default/
│   │   ├── baseof.html         # Base template
│   │   └── single.html         # Single page template
│   └── partials/
│       ├── header.html         # Site header with rainbow title
│       ├── footer.html         # Site footer
│       ├── post-card.html      # Post card with expandable content
│       └── toc-drawer.html     # Hamburger menu drawer
├── static/
│   ├── css/
│   │   └── style.css           # All styles
│   └── js/
│       └── main.js             # Theme toggle, TOC, expand, tag filtering
└── README.md                   # This file
```

---

## Key Files

### `layouts/partials/post-card.html`
The post card template with:
- Clickable title (`onclick="expandPost('slug')"`)
- Tags in header area with click-to-filter
- Post snippet with fade
- "Read more" button
- Expandable content with "Collapse" button at bottom

### `layouts/partials/toc-drawer.html`
The hamburger menu with:
- Post list with `data-tags` for filtering
- Expandable tags section
- Tag filter buttons

### `static/js/main.js`
JavaScript functions:
- `toggleTheme()` - Dark/light mode
- `toggleTOC()` - Open/close drawer
- `expandPost(slug)` - Expand/collapse posts
- `filterByTag(tag)` - Filter posts and TOC by tag
- `clearTagFilter()` - Clear tag filter
- `toggleTagsSection()` - Expand/collapse tags in drawer
- `handleHashOnLoad()` - Handle direct post links

### `static/css/style.css`
CSS with:
- CSS custom properties for theming
- Light/dark mode color schemes
- Rainbow gradient animation for title
- Post card and expansion styles
- Tag filter indicator styles
- TOC drawer and tag section styles

---

## Content Structure

```
content/
├── posts/           # Published posts
│   ├── my-post.md
│   └── ...
├── drafts/          # Unpublished drafts
│   ├── README.md    # Instructions
│   ├── _template.md # Template for new posts
│   └── ...
└── about.md         # About page
```

---

## Post Front Matter

```yaml
+++
date = '2025-03-22T13:00:22-05:00'
draft = false
title = 'Post Title'
tags = ["tag1", "tag2"]
+++
```

---

## Writing & Publishing Posts

### Create a Draft
1. Create a new file in `content/drafts/` (e.g., `my-new-post.md`)
2. Copy the template from `_template.md`
3. Write your content

### Publish a Draft
Ask Claude to publish it:
- "Publish my draft about [topic]"
- "Move [filename] to published posts"

Claude will:
1. Update the date to current time
2. Set `draft = false`
3. Move from `drafts/` to `posts/`

---

## Running the Site

```bash
cd /home/sharadv/hugoblog-rebuild
hugo server
```

View at: http://localhost:1313/

---

## Changelog

### January 2026
- Initial theme creation with warm editorial design
- Expandable posts with accordion behavior
- Tag filtering system with indicator
- TOC drawer with filterable posts
- Rainbow animated site title
- Drafts directory for unpublished posts
- Clickable post titles
- Collapse button at bottom of expanded posts
- Expandable tags section in drawer

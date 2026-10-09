# Custom Desk Theme for Frappe Framework 16

**Author**: Faheem Alvi  
**Email**: faheemalvi2000@gmail.com  

A modern Obsidian & Glassmorphism backend desk theme for Frappe v15 / v16.

## Features
- 💎 **Modern Obsidian Glass Aesthetic**: Dark glass background with subtle backdrop blur (`backdrop-filter`).
- 🎨 **Curated CSS Variables**: Styled `:root` and `[data-theme="dark"]` CSS tokens.
- ⚡ **Typography**: High quality typography with Google Fonts (`Inter` & `Outfit`).
- 🚀 **Navbar & Sidebar Enhancements**: Glowing active indicators, smooth hover transitions, and navbar theme badge.
- 🛠️ **Frappe 16 Compatible**: Standard `hooks.py` asset injection (`app_include_css` & `app_include_js`).

## Installation Instructions

### 1. Get the App into your Bench
In your Bench directory (e.g. `~/frappe-bench`):
```bash
# If cloned from Git repository
bench get-app https://github.com/FaheemAlvii/FrappeApps.git

# Or if linking locally:
bench get-app --link e:/Projects/FrappeApps
```

### 2. Install on your Site
```bash
bench --site <your-site-name> install-app custom_desk_theme
```

### 3. Build & Clear Cache
```bash
bench build --app custom_desk_theme
bench --site <your-site-name> clear-cache
```

### 4. Verify in Browser
Open Frappe Desk in your browser (`http://<your-site-name>:8000/app`). The theme will automatically load!

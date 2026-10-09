from . import __version__ as app_version

app_name = "custom_desk_theme"
app_title = "Custom Desk Theme"
app_publisher = "Faheem Alvi"
app_description = "A modern glassmorphism & obsidian backend theme for Frappe Framework 16"
app_email = "faheemalvi2000@gmail.com"
app_license = "MIT"

# -----------------------------------------------------------
# DESK ASSET HOOKS (Frontend Assets Injection)
# -----------------------------------------------------------
# app_include_css: Loads custom CSS in Frappe Desk (Backend UI)
app_include_css = [
    "/assets/custom_desk_theme/css/desk_theme.css",
    "/assets/custom_desk_theme/css/dark_theme.css"
]

# app_include_js: Loads custom JavaScript in Frappe Desk (Backend UI)
app_include_js = [
    "/assets/custom_desk_theme/js/desk_theme.js"
]

# -----------------------------------------------------------
# APP LOGO & BRANDING HOOKS
# -----------------------------------------------------------
# Default brand image for Navbar & Desk Header
app_logo_url = "/assets/custom_desk_theme/images/custom_logo.svg"

# -----------------------------------------------------------
# BOOT SESSION HOOKS
# -----------------------------------------------------------
# Boot session allows injecting custom theme settings into frappe.boot on load
extend_bootinfo = "custom_desk_theme.boot.boot_session"

# Includes in Website (Portal view) if needed
# website_include_css = ["/assets/custom_desk_theme/css/website_theme.css"]

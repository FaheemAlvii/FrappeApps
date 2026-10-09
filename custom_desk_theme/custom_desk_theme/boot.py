import frappe

def boot_session(bootinfo):
    """
    Inject custom backend theme settings into frappe.boot payload.
    This makes theme preferences available globally in JS (frappe.boot.custom_theme).
    """
    bootinfo.custom_theme = {
        "theme_name": "Modern Obsidian Glass",
        "primary_accent": "#6366f1",
        "secondary_accent": "#8b5cf6",
        "enable_glassmorphism": True,
        "enable_animated_sidebar": True,
        "brand_logo": "/assets/custom_desk_theme/images/custom_logo.svg",
        "brand_title": "Frappe 16 Enterprise Desk"
    }

/**
 * Custom Desk Theme JavaScript Injector for Frappe 16
 * Handles DOM enhancements, dynamic brand injection, and theme settings integration.
 */

$(document).ready(function() {
    frappe.ready(function() {
        console.log("%c [Custom Desk Theme] %c Theme Loaded Successfully! ", 
            "background: #6366f1; color: #fff; font-weight: bold; padding: 4px 8px; border-radius: 4px;",
            "background: #0f172a; color: #f8fafc; padding: 4px 8px; border-radius: 4px;"
        );

        // 1. Fetch boot settings injected by python boot_session hook
        const themeConfig = frappe.boot.custom_theme || {
            theme_name: "Modern Obsidian Glass",
            brand_title: "Frappe 16 Enterprise"
        };

        // 2. Inject Custom Theme Badge in Navbar if present
        injectNavbarBadge(themeConfig);

        // 3. Setup dynamic page navigation animations
        setupPageTransitions();

        // 4. Enhance Sidebar active indicator
        enhanceDeskSidebar();
    });
});

/**
 * Injects custom theme branding badge into Frappe Desk Navbar header
 */
function injectNavbarBadge(themeConfig) {
    setTimeout(() => {
        const navbar = $('.navbar .container, .navbar .navbar-right');
        if (navbar.length && !$('#custom-theme-badge').length) {
            const badgeHtml = `
                <div id="custom-theme-badge" class="nav-item d-none d-md-flex align-items-center me-2">
                    <span class="theme-badge-accent">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        ${themeConfig.theme_name}
                    </span>
                </div>
            `;
            navbar.prepend(badgeHtml);
        }
    }, 1000);
}

/**
 * Smooth transition animation when navigating between Desk pages
 */
function setupPageTransitions() {
    $(document).on('page-change', function() {
        $('.page-container').css({ opacity: 0.4, transform: 'translateY(4px)' })
            .animate({ opacity: 1 }, 250, function() {
                $(this).css('transform', 'none');
            });
    });
}

/**
 * Adds active hover effects & indicator highlights for Sidebar links
 */
function enhanceDeskSidebar() {
    $(document).on('click', '.sidebar-item', function() {
        $('.sidebar-item').removeClass('active-pulse');
        $(this).addClass('active-pulse');
    });
}

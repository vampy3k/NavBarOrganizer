function swapIcons() {
    const iconMap = {
        "AI Response Configuration": "fa-sliders",
        "Character Management": "fa-address-card",
        "Persona Management": "fa-face-smile",
        "World Info": "fa-book-atlas",
        "AI Response Formatting": "fa-pen-to-square",
        "User Settings": "fa-user-cog",
        "Extensions": "fa-cubes",
        "API Connections": "fa-plug",
        // Backgrounds has a different icon format. TODO: Fix at a later date.
    };

    document.querySelectorAll(".drawer-icon").forEach(el => {
        const title = el.getAttribute("title");
        if (title && iconMap[title]) {
            // strip existing fa-* classes except fa-solid/fa-fw
            el.classList.forEach(cls => {
                if (cls.startsWith("fa-") && cls !== "fa-solid" && cls !== "fa-fw") {
                    el.classList.remove(cls);
                }
            });
            el.classList.add(iconMap[title]);
        }
    });
}

if (document.readyState === "loading") {
    console.log("Loading")
    document.addEventListener("DOMContentLoaded", swapIcons);
} else {
    console.log("Swapping Icons")
    swapIcons();
}

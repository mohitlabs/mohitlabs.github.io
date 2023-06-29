// Get the user's theme preference from the browser's local storage
let themePreference = localStorage.getItem("theme");
let toggleThemeCheckbox = document.querySelector("#toggle-theme-checkbox");

if (!document.getElementById("theme-stylesheet")) {
    // Create and append the preload link element
    let preloadLinkDark = document.createElement("link");
    preloadLinkDark.rel = "preload";
    preloadLinkDark.href = "/assets/css/dark.css";
    preloadLinkDark.as = "style";

    document.head.appendChild(preloadLinkDark);

    let preloadLinkLight = document.createElement("link");
    preloadLinkLight.rel = "preload";
    preloadLinkLight.href = "/assets/css/light.css";
    preloadLinkLight.as = "style";

    document.head.appendChild(preloadLinkLight);

    // Create a link element
    let linkElement = document.createElement("link");

    // Set the attributes of the link element
    linkElement.id = "theme-stylesheet";
    linkElement.rel = "stylesheet";
    linkElement.href = "/assets/css/" + themePreference + ".css";

    // Append the link element to the head section of your HTML document
    document.head.appendChild(linkElement);
}

// Wait for DOM content load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("theme-stylesheet").onload = () => {
        document.getElementById("app-root").classList.remove("d-none");
    }
    if (themePreference === "dark") {
        toggleThemeCheckbox.checked = true;
        toggleThemeCheckbox.title = "Toggle Light Mode";
    } else {
        toggleThemeCheckbox.checked = false;
        toggleThemeCheckbox.title = "Toggle Dark Mode";
    }
});

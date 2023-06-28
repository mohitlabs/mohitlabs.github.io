// Get the user's theme preference from the browser's local storage
let themePreference = localStorage.getItem("theme");
let toggleThemeCheckbox = document.querySelector("#toggle-theme-checkbox");

if (!document.getElementById("theme-stylesheet")) {
    // Create and append the preload link element
    let preloadLinkElement = document.createElement("link");
    preloadLinkElement.rel = "preload";
    preloadLinkElement.href = "/assets/css/" + themePreference + ".css";
    preloadLinkElement.as = "style";

    document.head.appendChild(preloadLinkElement);

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
    if (themePreference === "dark") {
        toggleThemeCheckbox.checked = true;
        toggleThemeCheckbox.title = "Toggle Light Mode";
    } else {
        toggleThemeCheckbox.checked = false;
        toggleThemeCheckbox.title = "Toggle Dark Mode";
    }
});

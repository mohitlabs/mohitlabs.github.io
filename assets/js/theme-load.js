// Get the user's theme preference from the browser's local storage
const themePreference = localStorage.getItem("theme");
var theme = null;

// Check if user preference is stored in localStorage
if (themePreference) {
    theme = themePreference;
} else {
    // By default, use the system preference
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        theme = "light";
    } else {
        theme = "dark";
    }
}
// Create a link element
let linkElement = document.createElement("link");

// Set the attributes of the link element
linkElement.id = theme;
linkElement.rel = "stylesheet";
linkElement.href = "{{ site.url }}/{{ site.baseurl }}/assets/css/" + theme + ".css";

// Append the link element to the head section of your HTML document
document.head.appendChild(linkElement);
localStorage.setItem("theme", theme);

// Wait for DOM content load
document.addEventListener("DOMContentLoaded", () => {
    // Access toggle theme checkbox
    let toggleThemeCheckbox = document.querySelector("#toggle-theme-checkbox");

    // Update the state of toggle theme button
    if (theme === "dark") {
        toggleThemeCheckbox.checked = true;
        toggleThemeCheckbox.title = "Toggle Light Mode";
    } else {
        toggleThemeCheckbox.checked = false;
        toggleThemeCheckbox.title = "Toggle Dark Mode";
    }
});

// Wait until theme stylesheet loads
document.getElementById(theme).onload = () => {
    let appRoot = document.querySelector("#app-root");

    // Remove bootstrap d-none class form app-root
    if (appRoot.classList.contains("d-none")) {
        appRoot.classList.remove("d-none");
    }
}
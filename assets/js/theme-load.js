// Get the user's theme preference from the browser's local storage
const themePreference = localStorage.getItem("theme");

if (!document.getElementById("theme-stylesheet")) {
    // Check if user preference is stored in localStorage
    if (themePreference) {
        setTheme(themePreference);
    } else {
        // By default, use the system preference
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }
}

function setTheme(mode) {
    // Create a link element
    let linkElement = document.createElement("link");

    // Set the attributes of the link element
    linkElement.id = "theme-stylesheet";
    linkElement.rel = "stylesheet";
    linkElement.href = "/assets/css/" + mode + ".css";

    // Append the link element to the head section of your HTML document
    document.head.appendChild(linkElement);
    localStorage.setItem("theme", mode);
}

// Wait for DOM content load
document.addEventListener("DOMContentLoaded", () => {
    let toggleThemeCheckbox = document.querySelector("#toggle-theme-checkbox");

    if (localStorage.getItem("theme") === "dark") {
        toggleThemeCheckbox.checked = true;
        toggleThemeCheckbox.title = "Toggle Light Mode";
    } else {
        toggleThemeCheckbox.checked = false;
        toggleThemeCheckbox.title = "Toggle Dark Mode";
    }

    document.getElementById("theme-stylesheet").onload = () => {
        document.getElementById("app-root").classList.remove("d-none");
    }
});

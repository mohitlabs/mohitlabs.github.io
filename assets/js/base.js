// Toggle between dark and light modes
document.addEventListener("DOMContentLoaded", () => {
    let toggleThemeBtn = document.querySelector("header #toggle-theme-btn");
    let dark = document.querySelector("#moon-icon");
    let light = document.querySelector("#sun-icon");
    let darkTheme = null;

    // Check if a theme preference is already set
    let themePreference = localStorage.getItem("theme");
    if (themePreference === "dark") {
        document.body.classList.add("theme-dark");
        // Change the icons visibility of toggle theme button
        dark.style.display = "none";
        light.style.display = "block";
        toggleThemeBtn.title = "Toggle Light Mode";
        toggleThemeBtn.ariaLabel = "Toggle Light Mode";
        darkTheme = true;
    } else {
        document.body.classList.add("theme-light");
        // Change the icons visibility of toggle theme button
        dark.style.display = "block";
        light.style.display = "none";
        toggleThemeBtn.title = "Toggle Dark Mode";
        toggleThemeBtn.ariaLabel = "Toggle Dark Mode";
    }

    // Listen for clicks on the toggle theme button
    toggleThemeBtn.addEventListener("click", () => {
        // Check the current theme
        if (darkTheme) {
            // Remove the 'dark-theme' class from the body element
            document.body.classList.remove("theme-dark");
            document.body.classList.add("theme-light");
            localStorage.setItem("theme", "light");
            // Change the icons visibility of toggle theme button
            dark.style.display = "block";
            light.style.display = "none";
            toggleThemeBtn.title = "Toggle Dark Mode";
            toggleThemeBtn.ariaLabel = "Toggle Dark Mode";
            darkTheme = false;
        } else {
            // Add the 'dark-theme' class to the body element
            document.body.classList.remove("theme-light");
            document.body.classList.add("theme-dark");
            localStorage.setItem("theme", "dark");
            // Change the icons visibility of toggle theme button
            dark.style.display = "none";
            light.style.display = "block";
            toggleThemeBtn.title = "Toggle Light Mode";
            toggleThemeBtn.ariaLabel = "Toggle Light Mode";
            darkTheme = true;
        }
    });
});

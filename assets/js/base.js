// Toggle between dark and light modes
document.addEventListener("DOMContentLoaded", () => {
    const toggleThemeBtn = document.getElementById("toggle-theme-btn");
    const dark = document.getElementById("moon-icon");
    const light = document.getElementById("sun-icon");

    let darkTheme = false;
    light.style.display = "none";

    // Check if a theme preference is already set
    const themePreference = localStorage.getItem("theme");
    if (themePreference === "dark") {
        document.body.classList.remove("theme-light");
        document.body.classList.add("theme-dark");
        darkTheme = true;
        // Change the icons visibility of toggle theme button
        dark.style.display = "none";
        light.style.display = "block";
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
            darkTheme = false;
        }
        else {
            // Add the 'dark-theme' class to the body element
            document.body.classList.remove("theme-light");
            document.body.classList.add("theme-dark");
            localStorage.setItem("theme", "dark");
            // Change the icons visibility of toggle theme button
            dark.style.display = "none";
            light.style.display = "block";
            darkTheme = true;
        }
    });
});

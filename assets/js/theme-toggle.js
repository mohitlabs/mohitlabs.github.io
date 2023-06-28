// Toggle between dark and light modes

// Wait for window load
window.onload = () => {
    // Listen for change in the toggle theme checkbox
    document.querySelector("#toggle-theme-checkbox").addEventListener("change", (event) => {
        // Check the changed state
        let theme = event.target.checked ? "dark" : "light";

        // Access theme stylesheet
        let themeStyleSheet = document.querySelector("#theme-stylesheet");

        // Extract current theme stylesheet name
        let themeStyleSheetName = (themeStyleSheet.href.substring(themeStyleSheet.href.lastIndexOf('/') + 1));

        // Change the theme stylesheet
        themeStyleSheet.href = themeStyleSheet.href.replace(themeStyleSheetName, theme + ".css");

        // Store the theme preference into the browser
        localStorage.setItem("theme", theme);

        // Update the title of toggle theme button
        event.target.title = "Toggle " + themeStyleSheetName.charAt(0).toUpperCase() + themeStyleSheetName.slice(1).replace(".css", "") + " Mode";
    });
}

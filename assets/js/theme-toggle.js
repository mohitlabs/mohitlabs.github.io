// Toggle between dark and light modes

// Wait for window load
window.onload = () => {
    // Listen for change in the toggle theme checkbox
    document.querySelector("#toggle-theme-checkbox").addEventListener("change", (event) => {
        // Store old theme in oldTheme
        let oldTheme = event.target.checked ? "light" : "dark";

        // Store new theme in newTheme
        let newTheme = event.target.checked ? "dark" : "light";

        // Create a link element
        let linkElement = document.createElement("link");

        // Set the attributes of the link element
        linkElement.id = newTheme;
        linkElement.rel = "stylesheet";
        linkElement.href = "/assets/css/" + newTheme + ".css";

        // Append the link element to the head section of your HTML document
        document.head.appendChild(linkElement);

        // Store the new theme preference into the browser
        localStorage.setItem("theme", newTheme);

        // Update the title of toggle theme button
        event.target.title = "Toggle " + oldTheme.charAt(0).toUpperCase() + oldTheme.slice(1).replace(".css", "") + " Mode";

        // Wait until new theme stylesheet loads
        document.getElementById(newTheme).onload = () => {
            // Remove the old theme stylesheet
            document.getElementById(oldTheme).remove();
        }
    });
}
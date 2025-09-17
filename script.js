// Wait until the page content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    console.log("Page fully loaded!");

    // Select all buttons with class "demoButton"
    const demoButtons = document.querySelectorAll(".demoButton");

    demoButtons.forEach(button => {
        button.addEventListener("click", function() {
            alert("This demo is coming soon!");
        });
    });
});

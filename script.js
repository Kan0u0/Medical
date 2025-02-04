
// Smooth Scroll Effect for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    mobileMenu.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});

    // Get the menu toggle button and the nav links container
    const menuToggle = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    // Add click event listener to the menu toggle button
    menuToggle.addEventListener("click", () => {
        // Toggle the 'active' class on the nav links container
        navLinks.classList.toggle("active");
    });

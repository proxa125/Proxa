document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // Mobile Menu
    // =========================
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", function () {

            navLinks.classList.toggle("active");

        });

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

            });

        });

    }

    // =========================
    // Smooth Buttons
    // =========================

    document.querySelectorAll("a").forEach(btn => {

        btn.style.transition = "0.35s ease";

    });

});// Scroll Reveal


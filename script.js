// ========================================
// KRISHTECH SOLUTIONS
// Main JavaScript
// ========================================

console.log("KRISHTECH SCRIPT WORKING");


// ========================================
// NAVIGATION
// ========================================

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });


    // ========================================
    // SCROLL REVEAL
    // ========================================

    const revealElements = document.querySelectorAll(
        ".section-title, .about-content, .service-card, .project-card, .skills span"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            function (entries) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        revealObserver.unobserve(entry.target);
                    }

                });

            },
            {
                threshold: 0.15
            }
        );

        revealElements.forEach(function (element) {

            element.classList.add("reveal");

            revealObserver.observe(element);

        });

    }


    // ========================================
    // COPYRIGHT YEAR
    // ========================================

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const currentYear = new Date().getFullYear();

        copyright.textContent =
            "© " +
            currentYear +
            " KrishTech Solutions. All Rights Reserved.";

    }


    // ========================================
    // ACTIVE NAVIGATION ON SCROLL
    // ========================================

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 120;

            if (window.scrollY >= sectionTop) {

                currentSection = section.getAttribute("id");

            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const target = link.getAttribute("href");

            if (target === "#" + currentSection) {

                link.classList.add("active");

            }

        });

    });

});


// ========================================
// FITNESS CLUB GALLERY
// ========================================

function openFitnessGallery() {

    const gallery = document.getElementById("fitnessGallery");

    if (!gallery) {
        console.error("fitnessGallery not found");
        return;
    }

    gallery.style.display = "block";

    document.body.classList.add("no-scroll");
}


// ========================================
// CLOSE FITNESS GALLERY
// ========================================

function closeFitnessGallery() {

    const gallery = document.getElementById("fitnessGallery");

    if (!gallery) {
        return;
    }

    gallery.style.display = "none";

    document.body.classList.remove("no-scroll");

}


// ========================================
// FULLSCREEN IMAGE VIEWER
// ========================================

function openImageViewer(image) {

    const viewer = document.getElementById("imageViewer");
    const viewerImage = document.getElementById("viewerImage");

    if (!viewer || !viewerImage) {
        console.error("Image viewer not found");
        return;
    }

    viewerImage.src = image.src;

    viewerImage.alt = image.alt || "Fitness Club Screenshot";

    viewer.style.display = "flex";

    document.body.classList.add("no-scroll");
}


// ========================================
// CLOSE IMAGE VIEWER
// ========================================

function closeImageViewer() {

    const viewer = document.getElementById("imageViewer");

    if (!viewer) {
        return;
    }

    viewer.style.display = "none";

    document.body.classList.remove("no-scroll");
}


// ========================================
// CLICK OUTSIDE GALLERY
// ========================================

window.addEventListener("click", function (event) {

    const gallery = document.getElementById("fitnessGallery");

    if (event.target === gallery) {

        closeFitnessGallery();

    }

});


// ========================================
// CLICK OUTSIDE IMAGE VIEWER
// ========================================

window.addEventListener("click", function (event) {

    const viewer = document.getElementById("imageViewer");

    if (event.target === viewer) {

        closeImageViewer();

    }

});


// ========================================
// ESC KEY
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const viewer = document.getElementById("imageViewer");

        if (viewer && viewer.style.display === "flex") {

            closeImageViewer();

        } else {

            closeFitnessGallery();

        }

    }

});
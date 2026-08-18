/* ================================ MOHAMMAD EBAD — PORTFOLIO JAVASCRIPT ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================= MOBILE NAVIGATION ===================================================== */

    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");
    const navButton = document.querySelector(".nav-button");

    if (menuBtn && navLinks) {

        menuBtn.addEventListener("click", () => {

            navLinks.classList.toggle("mobile-open");

            if (navButton) {
                navButton.classList.toggle("mobile-open");
            }

            const isOpen =
                navLinks.classList.contains("mobile-open");

            menuBtn.setAttribute(
                "aria-label",
                isOpen ? "Close Menu" : "Open Menu"
            );

        });


        /* Close mobile menu when nav link is clicked */

        document.querySelectorAll(".nav-links a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("mobile-open");

                if (navButton) {
                    navButton.classList.remove("mobile-open");
                }

                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );

            });

        });

    }



    /* ===================================== NAVBAR SCROLL EFFECT ===================================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        });

    }



    /* ======================================  ACTIVE NAVIGATION LINK ===================================================== */

    const sections =
        document.querySelectorAll("main section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");

    function updateActiveNav() {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove("active");

            const href =
                link.getAttribute("href");

            if (href === `#${currentSection}`) {
                link.classList.add("active");
            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNav
    );

    updateActiveNav();



    /* ==================================  SMOOTH SCROLL =================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                !targetId ||
                targetId === "#"
            ) {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



    /* ======================================  SCROLL REVEAL ANIMATION ===================================================== */

    const revealElements = document.querySelectorAll(
        ".about-content, " +
        ".skill-card, " +
        ".project-card, " +
        ".experience-item, " +
        ".education-card, " +
        ".certification-strip, " +
        ".contact-content"
    );

    if ("IntersectionObserver" in window) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "reveal-visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(element => {

            element.classList.add("reveal-element");

            revealObserver.observe(element);

        });

    }



    /* ===================================== PROJECT CARD HOVER / CLICK FEEDBACK ===================================================== */

    const projectCards =
        document.querySelectorAll(".project-card");

    projectCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("project-hover");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("project-hover");
        });

    });



    /* ==================================== SKILL CARD INTERACTION ===================================================== */

    const skillCards =
        document.querySelectorAll(".skill-card");

    skillCards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.classList.add("skill-hover");
        });

        card.addEventListener("mouseleave", () => {
            card.classList.remove("skill-hover");
        });

    });



    /* ========================================== CONTACT FORM ===================================================== */

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .getElementById("name")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("email")
                        .value
                        .trim();


                const subject =
                    document
                        .getElementById("subject")
                        .value
                        .trim();


                const message =
                    document
                        .getElementById("message")
                        .value
                        .trim();



                /* Basic validation */

                if (!name || !email || !message) {

                    alert(
                        "Please fill in your name, email and message."
                    );

                    return;

                }



                /* Email validation */

                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


                if (!emailPattern.test(email)) {

                    alert(
                        "Please enter a valid email address."
                    );

                    return;

                }



                /* Create email */

                const mailSubject =
                    encodeURIComponent(
                        subject || "Portfolio Contact"
                    );


                const mailBody =
                    encodeURIComponent(
                        "Name: " +
                        name +
                        "\nEmail: " +
                        email +
                        "\n\nMessage:\n" +
                        message
                    );


                window.location.href =
                    "mailto:ibad40493@gmail.com" +
                    "?subject=" +
                    mailSubject +
                    "&body=" +
                    mailBody;

            }
        );

    }



    /* ============================== BACK TO TOP Uses your existing .back-to-top element ===================================================== */

    const backToTop =
        document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 600) {

                backToTop.classList.add("visible");

            } else {

                backToTop.classList.remove("visible");

            }

        });

    }



    /* ============================================== CURRENT YEAR ===================================================== */

    const footerYear =
        document.querySelector(".footer-bottom span");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} MOHAMMAD EBAD`;

    }



    /* =========================================== ESC KEY — CLOSE MOBILE MENU ===================================================== */

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            navLinks &&
            navLinks.classList.contains("mobile-open")
        ) {

            navLinks.classList.remove(
                "mobile-open"
            );

            if (navButton) {
                navButton.classList.remove(
                    "mobile-open"
                );
            }

            if (menuBtn) {
                menuBtn.setAttribute(
                    "aria-label",
                    "Open Menu"
                );
            }

        }

    });



    /* ======================================== PAGE LOADED ===================================================== */

    console.log(
        "Mohammad Ebad Portfolio — JavaScript Loaded Successfully 🚀"
    );

});
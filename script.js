/* =========================================================
   MOHAMMAD EBAD — PORTFOLIO JAVASCRIPT
   Version: Polished / Responsive / Production Ready
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =========================================================
       ELEMENT SELECTORS
    ========================================================= */

    const body = document.body;

    const navbar =
        document.querySelector(".navbar");

    const menuBtn =
        document.getElementById("menuBtn");

    const navLinks =
        document.getElementById("navLinks");

    const navButton =
        document.querySelector(".nav-button");

    const contactForm =
        document.getElementById("contactForm");

    const cursorGlow =
        document.querySelector(".cursor-glow");

    const backToTop =
        document.querySelector(".back-to-top");

    const sections =
        document.querySelectorAll("main section[id]");

    const navigationLinks =
        document.querySelectorAll(".nav-links a");



    /* =========================================================
       REDUCED MOTION DETECTION
    ========================================================= */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;



    /* =========================================================
       PAGE LOADER
       Works if .page-loader exists in HTML.
       Otherwise does nothing.
    ========================================================= */

    const pageLoader =
        document.querySelector(".page-loader");

    function hidePageLoader() {

        if (!pageLoader) {
            return;
        }

        pageLoader.classList.add("loaded");

        setTimeout(() => {

            pageLoader.style.display = "none";

        }, 700);

    }


    if (document.readyState === "complete") {

        setTimeout(hidePageLoader, 150);

    } else {

        window.addEventListener(
            "load",
            () => {
                setTimeout(hidePageLoader, 150);
            },
            { once: true }
        );

    }



    /* =========================================================
       MOBILE NAVIGATION
    ========================================================= */

    function openMobileMenu() {

        if (!menuBtn || !navLinks) {
            return;
        }

        navLinks.classList.add("mobile-open");

        if (navButton) {
            navButton.classList.add("mobile-open");
        }

        menuBtn.classList.add("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "true"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        body.classList.add("menu-open");
    }


    function closeMobileMenu() {

        if (!menuBtn || !navLinks) {
            return;
        }

        navLinks.classList.remove("mobile-open");

        if (navButton) {
            navButton.classList.remove("mobile-open");
        }

        menuBtn.classList.remove("active");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        body.classList.remove("menu-open");
    }


    function toggleMobileMenu() {

        if (!navLinks) {
            return;
        }

        const isOpen =
            navLinks.classList.contains(
                "mobile-open"
            );

        if (isOpen) {

            closeMobileMenu();

        } else {

            openMobileMenu();

        }
    }


    if (menuBtn && navLinks) {

        menuBtn.addEventListener(
            "click",
            toggleMobileMenu
        );

    }



    /* =========================================================
       CLOSE MOBILE MENU ON NAVIGATION CLICK
    ========================================================= */

    navigationLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    });


    if (navButton) {

        navButton.addEventListener(
            "click",
            () => {

                closeMobileMenu();

            }
        );

    }



    /* =========================================================
       ESCAPE KEY
    ========================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                navLinks &&
                navLinks.classList.contains(
                    "mobile-open"
                )
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =========================================================
       CLOSE MENU WHEN CLICKING OUTSIDE
    ========================================================= */

    document.addEventListener(
        "click",
        event => {

            if (
                !navLinks ||
                !menuBtn ||
                !navLinks.classList.contains(
                    "mobile-open"
                )
            ) {
                return;
            }


            const clickedInsideMenu =
                navLinks.contains(event.target);

            const clickedMenuButton =
                menuBtn.contains(event.target);


            if (
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =========================================================
       CLOSE MOBILE MENU WHEN WINDOW RESIZES
    ========================================================= */

    window.addEventListener(
        "resize",
        () => {

            if (
                window.innerWidth > 900 &&
                navLinks &&
                navLinks.classList.contains(
                    "mobile-open"
                )
            ) {

                closeMobileMenu();

            }

        }
    );



    /* =========================================================
       NAVBAR SCROLL EFFECT
    ========================================================= */

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 40) {

            navbar.classList.add(
                "scrolled"
            );

        } else {

            navbar.classList.remove(
                "scrolled"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );


    updateNavbar();



    /* =========================================================
       ACTIVE NAVIGATION LINK
    ========================================================= */

    function updateActiveNavigation() {

        if (!sections.length) {
            return;
        }


        let currentSection = "";


        const scrollPosition =
            window.scrollY + 220;


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop;

            const sectionBottom =
                sectionTop +
                section.offsetHeight;


            if (
                scrollPosition >= sectionTop &&
                scrollPosition < sectionBottom
            ) {

                currentSection =
                    section.id;

            }

        });


        /*
           If user is near the bottom,
           automatically activate Contact.
        */

        if (
            window.innerHeight +
            window.scrollY >=
            document.documentElement.scrollHeight - 120
        ) {

            const lastSection =
                sections[sections.length - 1];

            if (lastSection) {

                currentSection =
                    lastSection.id;

            }

        }


        navigationLinks.forEach(link => {

            const href =
                link.getAttribute("href");


            link.classList.remove(
                "active"
            );


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        { passive: true }
    );


    window.addEventListener(
        "resize",
        updateActiveNavigation
    );


    updateActiveNavigation();



    /* =========================================================
       SMOOTH SCROLLING
    ========================================================= */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(anchor => {

        anchor.addEventListener(
            "click",
            event => {

                const targetId =
                    anchor.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) {
                    return;
                }


                event.preventDefault();


                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;


                const targetPosition =
                    target.getBoundingClientRect()
                        .top +
                    window.scrollY -
                    navbarHeight;


                if (prefersReducedMotion) {

                    window.scrollTo(
                        0,
                        targetPosition
                    );

                } else {

                    window.scrollTo({

                        top:
                            targetPosition,

                        behavior:
                            "smooth"

                    });

                }

            }
        );

    });



    /* =========================================================
       SCROLL REVEAL
    ========================================================= */

    const revealElements =
        document.querySelectorAll(
            `
            .section-label,
            .about-content,
            .about-marquee,
            .skills-heading,
            .skill-card,
            .skills-footer,
            .projects-heading,
            .project-card,
            .projects-footer,
            .experience-heading,
            .experience-item,
            .experience-footer,
            .education-heading,
            .education-card,
            .certification-strip,
            .contact-heading,
            .contact-content,
            .contact-bottom,
            .footer
            `
        );


    if (
        !prefersReducedMotion &&
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(entry => {

                        if (
                            entry.isIntersecting
                        ) {

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
                    threshold: 0.08,
                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            (element, index) => {

                element.classList.add(
                    "reveal-element"
                );


                /*
                   Small stagger effect.
                */

                if (
                    element.classList.contains(
                        "skill-card"
                    ) ||
                    element.classList.contains(
                        "education-card"
                    )
                ) {

                    element.style.setProperty(
                        "--reveal-delay",
                        `${(index % 6) * 70}ms`
                    );

                }


                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "reveal-visible"
                );

            }
        );

    }



    /* =========================================================
       SKILL CARD INTERACTION
    ========================================================= */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "skill-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "skill-hover"
                );

            }
        );


        /*
           Keyboard accessibility.
        */

        card.addEventListener(
            "focusin",
            () => {

                card.classList.add(
                    "skill-hover"
                );

            }
        );


        card.addEventListener(
            "focusout",
            () => {

                card.classList.remove(
                    "skill-hover"
                );

            }
        );

    });



    /* =========================================================
       PROJECT CARD INTERACTION
    ========================================================= */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(card => {

        card.addEventListener(
            "mouseenter",
            () => {

                card.classList.add(
                    "project-hover"
                );

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.classList.remove(
                    "project-hover"
                );

            }
        );

    });



    /* =========================================================
       CONTACT FORM
    ========================================================= */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();


                const nameInput =
                    document.getElementById(
                        "name"
                    );

                const emailInput =
                    document.getElementById(
                        "email"
                    );

                const subjectInput =
                    document.getElementById(
                        "subject"
                    );

                const messageInput =
                    document.getElementById(
                        "message"
                    );


                if (
                    !nameInput ||
                    !emailInput ||
                    !messageInput
                ) {

                    return;

                }


                const name =
                    nameInput.value.trim();

                const email =
                    emailInput.value.trim();

                const subject =
                    subjectInput
                        ? subjectInput.value.trim()
                        : "";

                const message =
                    messageInput.value.trim();


                /* =====================================
                   VALIDATION
                ===================================== */

                if (
                    name.length < 2
                ) {

                    showFormMessage(
                        "Please enter your name.",
                        "error"
                    );

                    nameInput.focus();

                    return;

                }


                const emailPattern =
                    /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


                if (
                    !emailPattern.test(
                        email
                    )
                ) {

                    showFormMessage(
                        "Please enter a valid email address.",
                        "error"
                    );

                    emailInput.focus();

                    return;

                }


                if (
                    message.length < 5
                ) {

                    showFormMessage(
                        "Please enter a message.",
                        "error"
                    );

                    messageInput.focus();

                    return;

                }



                /* =====================================
                   BUTTON LOADING STATE
                ===================================== */

                const submitButton =
                    contactForm.querySelector(
                        ".contact-submit"
                    );


                if (submitButton) {

                    submitButton.classList.add(
                        "loading"
                    );

                    submitButton.disabled =
                        true;

                    submitButton.setAttribute(
                        "aria-busy",
                        "true"
                    );

                }



                /* =====================================
                   CREATE EMAIL
                ===================================== */

                const mailSubject =
                    encodeURIComponent(
                        subject ||
                        "Portfolio Contact — Mohammad Ebad"
                    );


                const mailBody =
                    encodeURIComponent(
                        `Hello Mohammad,

Name: ${name}
Email: ${email}

Message:
${message}

Sent from Mohammad Ebad's portfolio website.`
                    );


                const emailAddress =
                    "ibad40493@gmail.com";


                const mailtoURL =
                    `mailto:${emailAddress}` +
                    `?subject=${mailSubject}` +
                    `&body=${mailBody}`;



                /*
                   Small delay gives the button
                   animation time to appear.
                */

                setTimeout(
                    () => {

                        window.location.href =
                            mailtoURL;


                        if (submitButton) {

                            submitButton.classList.remove(
                                "loading"
                            );

                            submitButton.disabled =
                                false;

                            submitButton.removeAttribute(
                                "aria-busy"
                            );

                        }

                    },
                    prefersReducedMotion
                        ? 0
                        : 350
                );

            }
        );

    }



    /* =========================================================
       FORM MESSAGE SYSTEM
    ========================================================= */

    function showFormMessage(
        message,
        type = "error"
    ) {

        let messageElement =
            document.querySelector(
                ".form-message"
            );


        if (!messageElement) {

            messageElement =
                document.createElement(
                    "div"
                );

            messageElement.className =
                "form-message";


            if (contactForm) {

                contactForm.prepend(
                    messageElement
                );

            }

        }


        messageElement.textContent =
            message;


        messageElement.classList.remove(
            "success",
            "error"
        );


        messageElement.classList.add(
            type
        );


        messageElement.classList.add(
            "show"
        );


        setTimeout(
            () => {

                messageElement.classList.remove(
                    "show"
                );

            },
            4500
        );

    }



    /* =========================================================
       INPUT FOCUS EFFECTS
    ========================================================= */

    const formInputs =
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        );


    formInputs.forEach(input => {

        input.addEventListener(
            "focus",
            () => {

                input
                    .closest(".form-group")
                    ?.classList.add(
                        "focused"
                    );

            }
        );


        input.addEventListener(
            "blur",
            () => {

                input
                    .closest(".form-group")
                    ?.classList.remove(
                        "focused"
                    );

            }
        );

    });



    /* =========================================================
       BACK TO TOP
    ========================================================= */

    function updateBackToTop() {

        if (!backToTop) {
            return;
        }


        if (
            window.scrollY > 600
        ) {

            backToTop.classList.add(
                "visible"
            );

        } else {

            backToTop.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateBackToTop,
        { passive: true }
    );


    updateBackToTop();



    /* =========================================================
       CURSOR GLOW
       Desktop only
    ========================================================= */

    if (
        cursorGlow &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches &&
        !prefersReducedMotion
    ) {

        let mouseX = 0;
        let mouseY = 0;

        let glowX = 0;
        let glowY = 0;


        document.addEventListener(
            "mousemove",
            event => {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            },
            { passive: true }
        );


        function animateCursorGlow() {

            glowX +=
                (mouseX - glowX) *
                0.12;

            glowY +=
                (mouseY - glowY) *
                0.12;


            cursorGlow.style.transform =
                `translate3d(${glowX}px, ${glowY}px, 0)`;


            requestAnimationFrame(
                animateCursorGlow
            );

        }


        animateCursorGlow();

    }



    /* =========================================================
       MAGNETIC BUTTON EFFECT
       Applies to CTA buttons on desktop.
    ========================================================= */

    if (
        !prefersReducedMotion &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        const magneticElements =
            document.querySelectorAll(
                ".primary-btn, .nav-button, .contact-submit"
            );


        magneticElements.forEach(element => {

            element.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        element.getBoundingClientRect();


                    const x =
                        event.clientX -
                        rect.left -
                        rect.width / 2;


                    const y =
                        event.clientY -
                        rect.top -
                        rect.height / 2;


                    element.style.transform =
                        `translate(${x * 0.08}px, ${y * 0.08}px)`;

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.style.transform =
                        "";

                }
            );

        });

    }



    /* =========================================================
       IMAGE LOAD HANDLING
    ========================================================= */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(image => {

        image.addEventListener(
            "load",
            () => {

                image.classList.add(
                    "image-loaded"
                );

            }
        );


        image.addEventListener(
            "error",
            () => {

                image.classList.add(
                    "image-error"
                );


                console.warn(
                    `Image could not be loaded: ${image.src}`
                );

            }
        );


        /*
           If image was already cached.
        */

        if (image.complete) {

            if (image.naturalWidth > 0) {

                image.classList.add(
                    "image-loaded"
                );

            }

        }

    });



    /* =========================================================
       CURRENT YEAR
    ========================================================= */

    const currentYear =
        new Date().getFullYear();


    document
        .querySelectorAll(
            ".footer-bottom span"
        )
        .forEach((element, index) => {

            if (
                index === 0 &&
                element.textContent.includes(
                    "MOHAMMAD EBAD"
                )
            ) {

                element.textContent =
                    `© ${currentYear} MOHAMMAD EBAD`;

            }

        });



    /* =========================================================
       HERO PARALLAX
    ========================================================= */

    const hero =
        document.querySelector(
            ".hero"
        );


    if (
        hero &&
        !prefersReducedMotion &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        const heroGrid =
            hero.querySelector(
                ".hero-grid"
            );

        const heroProfile =
            hero.querySelector(
                ".hero-profile"
            );


        hero.addEventListener(
            "mousemove",
            event => {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (event.clientX -
                        rect.left) /
                    rect.width -
                    0.5;


                const y =
                    (event.clientY -
                        rect.top) /
                    rect.height -
                    0.5;


                if (heroGrid) {

                    heroGrid.style.transform =
                        `translate(${x * 10}px, ${y * 10}px)`;

                }


                if (heroProfile) {

                    heroProfile.style.transform =
                        `translate(${x * 6}px, ${y * 6}px)`;

                }

            }
        );


        hero.addEventListener(
            "mouseleave",
            () => {

                if (heroGrid) {

                    heroGrid.style.transform =
                        "";

                }


                if (heroProfile) {

                    heroProfile.style.transform =
                        "";

                }

            }
        );

    }



    /* =========================================================
       PROJECT VISUAL TILT
    ========================================================= */

    if (
        !prefersReducedMotion &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches
    ) {

        const visuals =
            document.querySelectorAll(
                ".project-visual"
            );


        visuals.forEach(visual => {

            visual.addEventListener(
                "mousemove",
                event => {

                    const rect =
                        visual.getBoundingClientRect();


                    const rotateX =
                        (
                            (event.clientY -
                                rect.top) /
                            rect.height -
                            0.5
                        ) * -4;


                    const rotateY =
                        (
                            (event.clientX -
                                rect.left) /
                            rect.width -
                            0.5
                        ) * 4;


                    visual.style.transform =
                        `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

                }
            );


            visual.addEventListener(
                "mouseleave",
                () => {

                    visual.style.transform =
                        "";

                }
            );

        });

    }



    /* =========================================================
       EXTERNAL LINKS — SAFETY
    ========================================================= */

    document.querySelectorAll(
        'a[target="_blank"]'
    ).forEach(link => {

        const rel =
            link.getAttribute("rel") || "";


        if (
            !rel.includes("noopener")
        ) {

            link.setAttribute(
                "rel",
                `${rel} noopener noreferrer`.trim()
            );

        }

    });



    /* =========================================================
       PREVENT EMPTY PROJECT LINKS
       Only prevents "#" links.
    ========================================================= */

    document.querySelectorAll(
        '.project-link[href="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                showFormMessage(
                    "Project link will be added soon.",
                    "success"
                );

            }
        );

    });



    /* =========================================================
       ACCESSIBILITY — TAB USER DETECTION
    ========================================================= */

    let usingKeyboard = false;


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Tab"
            ) {

                usingKeyboard = true;

                body.classList.add(
                    "keyboard-user"
                );

            }

        }
    );


    document.addEventListener(
        "mousedown",
        () => {

            if (usingKeyboard) {

                usingKeyboard = false;

                body.classList.remove(
                    "keyboard-user"
                );

            }

        }
    );



    /* =========================================================
       PAGE VISIBILITY
       Pause unnecessary effects when tab hidden.
    ========================================================= */

    document.addEventListener(
        "visibilitychange",
        () => {

            if (
                document.hidden
            ) {

                body.classList.add(
                    "page-hidden"
                );

            } else {

                body.classList.remove(
                    "page-hidden"
                );

            }

        }
    );



    /* =========================================================
       INITIALIZATION
    ========================================================= */

    requestAnimationFrame(
        () => {

            body.classList.add(
                "page-ready"
            );

        }
    );


    console.log(
        "Mohammad Ebad Portfolio — JavaScript Loaded Successfully 🚀"
    );

});
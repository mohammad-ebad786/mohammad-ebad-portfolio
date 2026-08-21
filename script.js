/* ==================================== MOHAMMAD EBAD — PORTFOLIO ================================================== */

document.addEventListener("DOMContentLoaded", function () {

    "use strict";


    /* ========================================= ELEMENT SELECTORS ==================================================== */

    const body =
        document.body;

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
        document.querySelectorAll(
            "main section[id]"
        );

    const navigationLinks =
        document.querySelectorAll(
            ".nav-links a"
        );


    /* =================================== REDUCED MOTION DETECTION =============================================== */

    const prefersReducedMotion =
        window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

    /* ========================================= PAGE LOADER =========================================== */

    const pageLoader =
        document.querySelector(".page-loader");


    function hidePageLoader() {

        if (!pageLoader) {
            return;
        }

        pageLoader.classList.add(
            "loaded"
        );

        setTimeout(
            function () {

                pageLoader.style.display =
                    "none";

            },
            700
        );
    }


    if (
        document.readyState ===
        "complete"
    ) {

        setTimeout(
            hidePageLoader,
            150
        );

    } else {

        window.addEventListener(
            "load",
            function () {

                setTimeout(
                    hidePageLoader,
                    150
                );

            },
            {
                once: true
            }
        );
    }

    /* ========================================== MOBILE NAVIGATION ======================================== */

    function openMobileMenu() {

        if (
            !menuBtn ||
            !navLinks
        ) {
            return;
        }

        navLinks.classList.add(
            "mobile-open"
        );

        if (navButton) {

            navButton.classList.add(
                "mobile-open"
            );
        }

        menuBtn.classList.add(
            "active"
        );

        menuBtn.setAttribute(
            "aria-expanded",
            "true"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

        body.classList.add(
            "menu-open"
        );
    }


    function closeMobileMenu() {

        if (
            !menuBtn ||
            !navLinks
        ) {
            return;
        }

        navLinks.classList.remove(
            "mobile-open"
        );

        if (navButton) {

            navButton.classList.remove(
                "mobile-open"
            );
        }

        menuBtn.classList.remove(
            "active"
        );

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        body.classList.remove(
            "menu-open"
        );
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


    if (
        menuBtn &&
        navLinks
    ) {

        menuBtn.addEventListener(
            "click",
            toggleMobileMenu
        );
    }

    /* ======================================= CLOSE MOBILE MENU ON NAVIGATION CLICK ========================================= */

    navigationLinks.forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    closeMobileMenu();

                }
            );

        }
    );


    if (navButton) {

        navButton.addEventListener(
            "click",
            function () {

                closeMobileMenu();

            }
        );
    }

    /* ============================================= ESCAPE KEY ====================================== */

    document.addEventListener(
        "keydown",
        function (event) {

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

    /* ============================================== CLOSE MENU WHEN CLICKING OUTSIDE ============================================ */

    document.addEventListener(
        "click",
        function (event) {

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
                navLinks.contains(
                    event.target
                );

            const clickedMenuButton =
                menuBtn.contains(
                    event.target
                );

            if (
                !clickedInsideMenu &&
                !clickedMenuButton
            ) {

                closeMobileMenu();

            }

        }
    );


    /* ========================================= CLOSE MOBILE MENU WHEN WINDOW RESIZES ======================================= */

    window.addEventListener(
        "resize",
        function () {

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


    /* ========================================= NAVBAR SCROLL EFFECT ====================================== */

    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (
            window.scrollY > 40
        ) {

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
        {
            passive: true
        }
    );

    updateNavbar();


    /* ========================================== ACTIVE NAVIGATION LINK ============================================= */

    function updateActiveNavigation() {

        if (!sections.length) {
            return;
        }

        let currentSection =
            "";

        const scrollPosition =
            window.scrollY + 220;


        sections.forEach(
            function (section) {

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

            }
        );


        if (
            window.innerHeight +
            window.scrollY >=
            document.documentElement.scrollHeight -
            120
        ) {

            const lastSection =
                sections[
                sections.length - 1
                ];

            if (lastSection) {

                currentSection =
                    lastSection.id;

            }
        }


        navigationLinks.forEach(
            function (link) {

                const href =
                    link.getAttribute(
                        "href"
                    );

                link.classList.remove(
                    "active"
                );

                if (
                    href ===
                    "#" + currentSection
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );
    }


    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );

    window.addEventListener(
        "resize",
        updateActiveNavigation
    );

    updateActiveNavigation();


    /* ==================================== SMOOTH SCROLLING ============================ */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(
        function (anchor) {

            anchor.addEventListener(
                "click",
                function (event) {

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

                    if (
                        prefersReducedMotion
                    ) {

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

        }
    );


    /* ============================================ SCROLL REVEAL ===================================== */

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
                function (
                    entries,
                    observer
                ) {

                    entries.forEach(
                        function (entry) {

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

                        }
                    );

                },
                {
                    threshold: 0.08,

                    rootMargin:
                        "0px 0px -50px 0px"
                }
            );


        revealElements.forEach(
            function (
                element,
                index
            ) {

                element.classList.add(
                    "reveal-element"
                );


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
                        (index % 6) * 70 + "ms"
                    );

                }

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            function (element) {

                element.classList.add(
                    "reveal-visible"
                );

            }
        );

    }


    /* ====================================== SKILL CARD INTERACTION ========================================== */

    const skillCards =
        document.querySelectorAll(
            ".skill-card"
        );


    skillCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "skill-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.classList.remove(
                        "skill-hover"
                    );

                }
            );


            card.addEventListener(
                "focusin",
                function () {

                    card.classList.add(
                        "skill-hover"
                    );

                }
            );


            card.addEventListener(
                "focusout",
                function () {

                    card.classList.remove(
                        "skill-hover"
                    );

                }
            );

        }
    );


    /* =========================================== PROJECT CARD INTERACTION ==================================== */

    const projectCards =
        document.querySelectorAll(
            ".project-card"
        );


    projectCards.forEach(
        function (card) {

            card.addEventListener(
                "mouseenter",
                function () {

                    card.classList.add(
                        "project-hover"
                    );

                }
            );


            card.addEventListener(
                "mouseleave",
                function () {

                    card.classList.remove(
                        "project-hover"
                    );

                }
            );

        }
    );


    /* ============================================ CONTACT FORM ======================================== */

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            async function (event) {

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

                const formStatus =
                    document.getElementById(
                        "formStatus"
                    );

                const submitButton =
                    contactForm.querySelector(
                        ".contact-submit"
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


                /* ============================== VALIDATION ====================== */

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

                /* ============================ BUTTON LOADING STATE =========================== */

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


                if (formStatus) {

                    formStatus.textContent =
                        "Sending message...";

                    formStatus.className =
                        "form-status";

                }


                /* ========================== SUBMIT TO WEB3FORMS ================== */

                try {

                    const formData =
                        new FormData(
                            contactForm
                        );


                    const response =
                        await fetch(
                            "https://api.web3forms.com/submit",
                            {
                                method:
                                    "POST",

                                body:
                                    formData
                            }
                        );


                    const result =
                        await response.json();


                    if (
                        result.success
                    ) {

                        showFormMessage(
                            "Message sent successfully. Thank you!",
                            "success"
                        );


                        if (formStatus) {

                            formStatus.textContent =
                                "Message sent successfully.";

                            formStatus.classList.add(
                                "success"
                            );

                        }


                        contactForm.reset();


                    } else {

                        throw new Error(
                            "Form submission failed."
                        );

                    }


                } catch (error) {

                    console.error(
                        "Web3Forms Error:",
                        error
                    );


                    showFormMessage(
                        "Something went wrong. Please try again.",
                        "error"
                    );


                    if (formStatus) {

                        formStatus.textContent =
                            "Unable to send message. Please try again.";

                        formStatus.classList.add(
                            "error"
                        );

                    }

                } finally {

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

                }

            }
        );

    }


    /* ========================================= FORM MESSAGE SYSTEM ====================================== */

    function showFormMessage(
        message,
        type
    ) {

        if (!type) {
            type =
                "error";
        }


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
            function () {

                messageElement.classList.remove(
                    "show"
                );

            },
            4500
        );

    }


    /* ============================================= INPUT FOCUS EFFECTS ========================================= */

    const formInputs =
        document.querySelectorAll(
            ".contact-form input, .contact-form textarea"
        );


    formInputs.forEach(
        function (input) {

            input.addEventListener(
                "focus",
                function () {

                    const formGroup =
                        input.closest(
                            ".form-group"
                        );

                    if (formGroup) {

                        formGroup.classList.add(
                            "focused"
                        );

                    }

                }
            );


            input.addEventListener(
                "blur",
                function () {

                    const formGroup =
                        input.closest(
                            ".form-group"
                        );

                    if (formGroup) {

                        formGroup.classList.remove(
                            "focused"
                        );

                    }

                }
            );

        }
    );


    /* =========================================== BACK TO TOP ============================================ */

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
        {
            passive: true
        }
    );


    updateBackToTop();


    /* ======================================= CURSOR GLOW Desktop only ======================================== */

    if (
        cursorGlow &&
        window.matchMedia(
            "(pointer: fine)"
        ).matches &&
        !prefersReducedMotion
    ) {

        let mouseX =
            0;

        let mouseY =
            0;

        let glowX =
            0;

        let glowY =
            0;


        document.addEventListener(
            "mousemove",
            function (event) {

                mouseX =
                    event.clientX;

                mouseY =
                    event.clientY;

            },
            {
                passive: true
            }
        );


        function animateCursorGlow() {

            glowX +=
                (mouseX - glowX) *
                0.12;

            glowY +=
                (mouseY - glowY) *
                0.12;


            cursorGlow.style.transform =
                "translate3d(" +
                glowX +
                "px, " +
                glowY +
                "px, 0)";


            requestAnimationFrame(
                animateCursorGlow
            );

        }


        animateCursorGlow();

    }


    /* ====================================== MAGNETIC BUTTON EFFECT Applies to CTA buttons on desktop.=========================================== */

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


        magneticElements.forEach(
            function (element) {

                element.addEventListener(
                    "mousemove",
                    function (event) {

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
                            "translate(" +
                            x * 0.08 +
                            "px, " +
                            y * 0.08 +
                            "px)";

                    }
                );


                element.addEventListener(
                    "mouseleave",
                    function () {

                        element.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* ====================================== IMAGE LOAD HANDLING ==================================== */

    const images =
        document.querySelectorAll(
            "img"
        );


    images.forEach(
        function (image) {

            image.addEventListener(
                "load",
                function () {

                    image.classList.add(
                        "image-loaded"
                    );

                }
            );


            image.addEventListener(
                "error",
                function () {

                    image.classList.add(
                        "image-error"
                    );


                    console.warn(
                        "Image could not be loaded: " +
                        image.src
                    );

                }
            );


            if (
                image.complete
            ) {

                if (
                    image.naturalWidth > 0
                ) {

                    image.classList.add(
                        "image-loaded"
                    );

                }

            }

        }
    );


    /* =========================================== CURRENT YEAR ====================================== */

    const currentYear =
        new Date().getFullYear();


    document
        .querySelectorAll(
            ".footer-bottom span"
        )
        .forEach(
            function (
                element,
                index
            ) {

                if (
                    index === 0 &&
                    element.textContent.includes(
                        "MOHAMMAD EBAD"
                    )
                ) {

                    element.textContent =
                        "© " +
                        currentYear +
                        " MOHAMMAD EBAD";

                }

            }
        );


    /* ============================================= HERO PARALLAX ======================================== */

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
            function (event) {

                const rect =
                    hero.getBoundingClientRect();


                const x =
                    (
                        event.clientX -
                        rect.left
                    ) /
                    rect.width -
                    0.5;


                const y =
                    (
                        event.clientY -
                        rect.top
                    ) /
                    rect.height -
                    0.5;


                if (heroGrid) {

                    heroGrid.style.transform =
                        "translate(" +
                        x * 10 +
                        "px, " +
                        y * 10 +
                        "px)";

                }


                if (heroProfile) {

                    heroProfile.style.transform =
                        "translate(" +
                        x * 6 +
                        "px, " +
                        y * 6 +
                        "px)";

                }

            }
        );


        hero.addEventListener(
            "mouseleave",
            function () {

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


    /* ============================================= PROJECT VISUAL TILT ========================================== */

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


        visuals.forEach(
            function (visual) {

                visual.addEventListener(
                    "mousemove",
                    function (event) {

                        const rect =
                            visual.getBoundingClientRect();


                        const rotateX =
                            (
                                (
                                    event.clientY -
                                    rect.top
                                ) /
                                rect.height -
                                0.5
                            ) *
                            -4;


                        const rotateY =
                            (
                                (
                                    event.clientX -
                                    rect.left
                                ) /
                                rect.width -
                                0.5
                            ) *
                            4;


                        visual.style.transform =
                            "perspective(900px) " +
                            "rotateX(" +
                            rotateX +
                            "deg) " +
                            "rotateY(" +
                            rotateY +
                            "deg)";

                    }
                );


                visual.addEventListener(
                    "mouseleave",
                    function () {

                        visual.style.transform =
                            "";

                    }
                );

            }
        );

    }


    /* ========================================== EXTERNAL LINKS — SAFETY ============================================= */

    document.querySelectorAll(
        'a[target="_blank"]'
    ).forEach(
        function (link) {

            const rel =
                link.getAttribute(
                    "rel"
                ) || "";


            if (
                !rel.includes(
                    "noopener"
                )
            ) {

                link.setAttribute(
                    "rel",
                    (
                        rel +
                        " noopener noreferrer"
                    ).trim()
                );

            }

        }
    );


    /* ====================================== PREVENT EMPTY PROJECT LINKS Only prevents "#" links. ========================================== */

    document.querySelectorAll(
        '.project-link[href="#"]'
    ).forEach(
        function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    event.preventDefault();

                    showFormMessage(
                        "Project link will be added soon.",
                        "success"
                    );

                }
            );

        }
    );


    /* =========================================== ACCESSIBILITY — TAB USER DETECTION ============================================ */

    let usingKeyboard =
        false;


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Tab"
            ) {

                usingKeyboard =
                    true;

                body.classList.add(
                    "keyboard-user"
                );

            }

        }
    );


    document.addEventListener(
        "mousedown",
        function () {

            if (
                usingKeyboard
            ) {

                usingKeyboard =
                    false;

                body.classList.remove(
                    "keyboard-user"
                );

            }

        }
    );

    /* ======================================PAGE VISIBILITY Pause unnecessary effects when tab hidden. =========================================== */

    document.addEventListener(
        "visibilitychange",
        function () {

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


    /* ======================================= INITIALIZATION ======================================== */

    requestAnimationFrame(
        function () {

            body.classList.add(
                "page-ready"
            );

        }
    );


    console.log(
        "Mohammad Ebad Portfolio — JavaScript Loaded Successfully 🚀"
    );

});
/* =========================================================
   KIDS STORE
   GSAP + 3D Animations
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    gsap.registerPlugin(ScrollTrigger);


    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.querySelector(".loader");
    const loaderProgress = document.querySelector(".loader-progress span");

    document.body.classList.add("loading");

    const loaderTimeline = gsap.timeline();

    loaderTimeline
        .to(loaderProgress, {
            width: "100%",
            duration: 1.6,
            ease: "power2.inOut"
        })
        .to(".loader-content", {
            scale: 1.1,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in"
        })
        .to(loader, {
            yPercent: -100,
            duration: 1,
            ease: "power4.inOut",
            onComplete: () => {
                document.body.classList.remove("loading");
                loader.style.display = "none";
            }
        });


    /* =====================================================
       NAVBAR
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* =====================================================
       MOBILE MENU
    ===================================================== */

    const menuToggle = document.getElementById("menuToggle");
    const mobileMenu = document.getElementById("mobileMenu");

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
    });

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
        });

    });


    /* =====================================================
       HERO ANIMATION
    ===================================================== */

    const heroTimeline = gsap.timeline({
        delay: 1.8
    });

    heroTimeline
        .from(".hero-badge", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".hero-title", {
            y: 70,
            opacity: 0,
            duration: 1,
            ease: "power4.out"
        }, "-=0.5")
        .from(".hero-description", {
            y: 30,
            opacity: 0,
            duration: 0.7
        }, "-=0.6")
        .from(".hero-buttons", {
            y: 25,
            opacity: 0,
            duration: 0.7
        }, "-=0.4")
        .from(".hero-stats", {
            y: 25,
            opacity: 0,
            duration: 0.7
        }, "-=0.4")
        .from(".hero-card-main", {
            scale: 0.7,
            opacity: 0,
            rotationY: -30,
            duration: 1.3,
            ease: "back.out(1.5)"
        }, "-=1")
        .from(".floating-card", {
            scale: 0,
            opacity: 0,
            duration: 0.7,
            stagger: 0.2,
            ease: "back.out(2)"
        }, "-=0.8");


    /* =====================================================
       FLOATING 3D OBJECTS
    ===================================================== */

    gsap.to(".hero-card-main", {
        y: -18,
        rotationZ: 2,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-top", {
        y: -15,
        rotation: 3,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".card-bottom", {
        y: 14,
        rotation: -3,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".orb-one", {
        x: -70,
        y: 50,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });

    gsap.to(".orb-two", {
        x: 50,
        y: -30,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
    });


    /* =====================================================
       HERO MOUSE 3D
    ===================================================== */

    const hero = document.querySelector(".hero");
    const heroCard = document.querySelector(".hero-card-main");

    hero.addEventListener("mousemove", (event) => {

        if (window.innerWidth < 850) return;

        const rect = hero.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 45;
        const rotateX = (centerY - y) / 45;

        gsap.to(heroCard, {
            rotationY: -12 + rotateY,
            rotationX: 5 + rotateX,
            duration: 0.7,
            ease: "power2.out"
        });

    });

    hero.addEventListener("mouseleave", () => {

        gsap.to(heroCard, {
            rotationY: -12,
            rotationX: 5,
            duration: 1,
            ease: "power3.out"
        });

    });


    /* =====================================================
       MARQUEE
    ===================================================== */

    gsap.to(".marquee-track", {
        xPercent: -35,
        duration: 18,
        repeat: -1,
        ease: "none"
    });


    /* =====================================================
       SECTION REVEALS
    ===================================================== */

    gsap.utils.toArray(".section-header").forEach(header => {

        gsap.from(header, {
            scrollTrigger: {
                trigger: header,
                start: "top 85%"
            },

            y: 60,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

    });


    /* =====================================================
       INTRO
    ===================================================== */

    gsap.from(".intro-content", {

        scrollTrigger: {
            trigger: ".intro",
            start: "top 75%"
        },

        x: 80,
        opacity: 0,
        duration: 1.1,
        ease: "power3.out"

    });

    gsap.from(".shape-circle", {

        scrollTrigger: {
            trigger: ".intro",
            start: "top 75%"
        },

        scale: 0.5,
        opacity: 0,
        rotation: -30,
        duration: 1.2,
        ease: "back.out(1.5)"

    });


    /* =====================================================
       CATEGORY CARDS
    ===================================================== */

    gsap.from(".category-card", {

        scrollTrigger: {
            trigger: ".category-grid",
            start: "top 80%"
        },

        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out"

    });


    /* =====================================================
       CATEGORY 3D MOUSE
    ===================================================== */

    document.querySelectorAll(".category-card").forEach(card => {

        card.addEventListener("mousemove", event => {

            if (window.innerWidth < 850) return;

            const rect = card.getBoundingClientRect();

            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            const rotateY = ((x / rect.width) - 0.5) * 8;
            const rotateX = ((y / rect.height) - 0.5) * -8;

            gsap.to(card, {
                rotationY: rotateY,
                rotationX: rotateX,
                duration: 0.4,
                ease: "power2.out"
            });

        });

        card.addEventListener("mouseleave", () => {

            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                duration: 0.7,
                ease: "power3.out"
            });

        });

    });


    /* =====================================================
       VIDEO SECTION
    ===================================================== */

    gsap.from(".video-wrapper", {

        scrollTrigger: {
            trigger: ".video-wrapper",
            start: "top 85%"
        },

        scale: 0.88,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"

    });


    /* =====================================================
       VIDEO PARALLAX
    ===================================================== */

    gsap.to(".main-video", {

        scrollTrigger: {
            trigger: ".video-wrapper",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },

        scale: 1.15,
        ease: "none"

    });


    /* =====================================================
       GALLERY
    ===================================================== */

    gsap.from(".gallery-item", {

        scrollTrigger: {
            trigger: ".gallery-grid",
            start: "top 80%"
        },

        y: 70,
        opacity: 0,
        scale: 0.95,

        duration: 0.9,

        stagger: 0.12,

        ease: "power3.out"

    });


    /* =====================================================
       SECOND VIDEO
    ===================================================== */

    gsap.to(".second-video video", {

        scrollTrigger: {
            trigger: ".second-video",
            start: "top bottom",
            end: "bottom top",
            scrub: true
        },

        scale: 1.18,

        ease: "none"

    });

    gsap.from(".second-video-content", {

        scrollTrigger: {
            trigger: ".second-video",
            start: "top 75%"
        },

        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"

    });


    /* =====================================================
       BRANCHES
    ===================================================== */

    gsap.from(".branch-card", {

        scrollTrigger: {
            trigger: ".branches-grid",
            start: "top 80%"
        },

        y: 70,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"

    });


    /* =====================================================
       CONTACT
    ===================================================== */

    gsap.from(".contact-card", {

        scrollTrigger: {
            trigger: ".contact-card",
            start: "top 80%"
        },

        scale: 0.94,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"

    });


    gsap.to(".contact-ball", {

        y: -25,
        rotation: 360,

        duration: 7,

        repeat: -1,

        ease: "none"

    });


    /* =====================================================
       FLOATING SHAPES
    ===================================================== */

    gsap.to(".shape-one", {
        rotation: 180,
        duration: 12,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".shape-two", {
        rotation: -140,
        duration: 15,
        repeat: -1,
        ease: "none"
    });

    gsap.to(".shape-three", {
        rotation: 220,
        duration: 10,
        repeat: -1,
        ease: "none"
    });


    /* =====================================================
       WHATSAPP BUTTON
    ===================================================== */

    gsap.to(".floating-whatsapp", {

        scale: 1.08,

        duration: 1.2,

        repeat: -1,

        yoyo: true,

        ease: "sine.inOut"

    });


    /* =====================================================
       SMOOTH ANCHOR
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const targetId = link.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =====================================================
       REFRESH SCROLLTRIGGER
    ===================================================== */

    window.addEventListener("load", () => {

        ScrollTrigger.refresh();

    });

});
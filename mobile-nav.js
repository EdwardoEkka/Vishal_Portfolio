document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-icon");
    const mobileNav = document.querySelector(".mobile-nav");
    const closeBtn = document.querySelector(".close-btn");

    hamburger.addEventListener("click", () => {
        mobileNav.style.transform = "translateX(0)";
        document.body.style.overflow = "hidden"; 
    });

    closeBtn.addEventListener("click", () => {
        mobileNav.style.transform = "translateX(-100%)";
        document.body.style.overflow = ""; 
    });


    document.querySelectorAll(".nav-list li").forEach(item => {
        item.addEventListener("click", () => {
            mobileNav.style.transform = "translateX(-100%)";
            document.body.style.overflow = "";
        });
    });
});

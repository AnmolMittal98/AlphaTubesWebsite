document.addEventListener('DOMContentLoaded', () => {
    // GSAP Animation for Header
    gsap.from("header", { duration: 1, y: -100, opacity: 0, ease: "power2.out" });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                // If the target element is not on the current page, navigate to the index.html and scroll to the target
                window.location.href = 'index.html#' + targetId;
            }
        });
    });
});
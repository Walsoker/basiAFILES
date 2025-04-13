document.addEventListener("DOMContentLoaded", function () {
    // Select all spans inside .small-text
    let spans = document.querySelectorAll(".small-text span");

    spans.forEach(span => {
        span.addEventListener("click", function () {
            // Remove 'activespan' class from all spans
            spans.forEach(s => s.classList.remove("activespan"));
            
            // Add 'activespan' class to the clicked span
            this.classList.add("activespan");
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link:not(.buttontop)");
    const offcanvas = document.getElementById("offcanvasNavbar");
    const navbar = document.querySelector(".navbar");

    // Function to switch active nav
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'activenav' from all nav links
            navLinks.forEach(nav => nav.classList.remove("activenav"));
            // Add 'activenav' only to the clicked link
            this.classList.add("activenav");
        });
    });

    // Change navbar background when offcanvas is open
    offcanvas.addEventListener("show.bs.offcanvas", function () {
        navbar.style.backgroundColor = "#0056b3";
    });

    offcanvas.addEventListener("hidden.bs.offcanvas", function () {
        navbar.style.backgroundColor = "transparent";
    });
});

// Search Function
function performSearch() {
    const category = document.getElementById("category").value;
    const query = document.getElementById("searchQuery").value.trim();
    
    if (query || category) {
        window.location.href = `properties.html?search=${query}&category=${category}`;
    }
}





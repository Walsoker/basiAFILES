function openTab(event, tabName) {
    let i, tabContent, tabLinks;

    // Hide all listings
    tabContent = document.querySelectorAll(".listing");
    tabContent.forEach((listing) => {
        listing.classList.remove("active");
    });

    // Remove active class from all tab buttons
    tabLinks = document.querySelectorAll(".tablinks");
    tabLinks.forEach((tab) => {
        tab.classList.remove("active");
    });

    // Show the current tab's listings
    document.getElementById(tabName).classList.add("active");

    // Add 'active' class to the clicked button
    event.currentTarget.classList.add("active");
}

// Show the first tab by default
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".tablinks").click();
});



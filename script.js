
// Get modal and other elements
const modal = document.getElementById("myModal");
const modalImage = document.getElementById("modalImage");
const modalCaption = document.getElementById("modalLabel");
const closeButton = document.getElementsByClassName("close")[0];

// Add click event listeners to each photo
const photos = document.querySelectorAll(".photo");
photos.forEach(photo => {
    const img = photo.querySelector("img");
    photo.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImage.src = img.src;
        modalCaption.textContent = img.alt; // Use the alt text for the caption
        modal.setAttribute("aria-hidden", "false"); // Make modal visible for screen readers
    });

    // Allow opening the modal with the Enter or Space key (for accessibility)
    photo.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
            photo.click();
        }
    });
});

// Close the modal when clicking the close button
closeButton.onclick = () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
};

// Close the modal when pressing the Esc key
window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true"); // Hide modal from screen readers
    }
});

// Close the modal if the user clicks outside the modal content
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("aria-hidden", "true");
    }
});

document.addEventListener("DOMContentLoaded", () => {

  // -------------------------------------------------
  // CONTACT FORM VALIDATION
  // -------------------------------------------------
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();
      const error = document.getElementById("contactError");

      if (name.length < 2) {
        e.preventDefault();
        error.textContent = "Please enter a valid name.";
        return;
      }
      if (message.length < 10) {
        e.preventDefault();
        error.textContent = "Message must be at least 10 characters.";
      }
    });
  }
// -------------------------------------------------
  // GALLERY LIGHTBOX
  // -------------------------------------------------
  document.querySelectorAll(".gallery-grid img").forEach(img => {
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "lightbox";
      overlay.innerHTML = `
        <div class="lightbox-content">
          <img src="${img.src}" alt="">
        </div>
      `;
      overlay.addEventListener("click", () => overlay.remove());
      document.body.appendChild(overlay);
    });
  });


  // -------------------------------------------------
  // ACCORDION (FAQ or Product Information)
  // -------------------------------------------------
  document.querySelectorAll(".accordion-title").forEach(title => {
    title.addEventListener("click", () => {
      title.classList.toggle("active");
      let content = title.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });


  // -------------------------------------------------
  // DYNAMIC CONTENT INSERTION
  // -------------------------------------------------
  const dynamicArea = document.getElementById("dynamicContent");

  if (dynamicArea) {
    dynamicArea.innerHTML = `
      <p class="highlight">New update: Our 2025 steel gate designs are now available!</p>
    `;
  }

});
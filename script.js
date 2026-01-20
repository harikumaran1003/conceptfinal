/* ===============================
   PRODUCT DETAILS MODAL
================================ */
function openProduct(title, description, image) {
  document.getElementById("modalTitle").innerText = title;
  document.getElementById("modalDescription").innerText = description;
  document.getElementById("modalImage").src = image;

  document.getElementById("productModal").style.display = "flex";
}

function closeProduct() {
  document.getElementById("productModal").style.display = "none";
}

/* Close modal on outside click */
window.addEventListener("click", (e) => {
  const modal = document.getElementById("productModal");
  if (e.target === modal) {
    closeProduct();
  }
});


/* ================= SCROLL REVEAL SCRIPT ================= */
const reveals = document.querySelectorAll(
  "section, .service-card, .gallery-item, .stat-box, .product-detail, .footer-col"
);

const revealOnScroll = () => {
  reveals.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const visible = window.innerHeight - 100;
    if (top < visible) {
      el.classList.add("reveal", "active");
    }
  });
};
/*-- ================= menu toggle for mobile ================= --*/
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

document.querySelector(".mega-parent > a").onclick = e => {
  if (window.innerWidth <= 900) {
    e.preventDefault();
    document
      .querySelector(".mega-parent")
      .classList.toggle("active");
  }
};

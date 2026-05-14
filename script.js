const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });

menuToggle.addEventListener("click", () => {
  const isOpen = header.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    header.classList.remove("is-open");
    document.body.classList.remove("nav-open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
});

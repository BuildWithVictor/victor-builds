// Victor Builds — simple interactions
const menu = document.querySelector(".menu-button");
const nav = document.querySelector(".site-header nav");
if (menu) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", open);
  });
}
document
  .querySelectorAll("[data-year]")
  .forEach((e) => (e.textContent = new Date().getFullYear()));
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    }),
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
function requestText() {
  const f = new FormData(document.querySelector("#quoteForm"));
  return (
    "Hello Victor Builds!%0A%0AName: " +
    encodeURIComponent(f.get("name")) +
    "%0ABusiness: " +
    encodeURIComponent(f.get("business")) +
    "%0APhone: " +
    encodeURIComponent(f.get("phone")) +
    "%0AEmail: " +
    encodeURIComponent(f.get("email")) +
    "%0AService: " +
    encodeURIComponent(f.get("service")) +
    "%0APackage: " +
    encodeURIComponent(f.get("package")) +
    "%0AEstimated pages: " +
    encodeURIComponent(f.get("pages")) +
    "%0ABudget: " +
    encodeURIComponent(f.get("budget")) +
    "%0ADesired launch date: " +
    encodeURIComponent(f.get("launchDate")) +
    "%0A%0AProject details: " +
    encodeURIComponent(f.get("message"))
  );
}
const form = document.querySelector("#quoteForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.open("https://wa.me/2348082413412?text=" + requestText(), "_blank");
  });
  document.querySelector("#emailRequest").addEventListener("click", () => {
    if (!form.reportValidity()) return;
    location.href =
      "mailto:victorlegend820@gmail.com,lakaka3336@gmail.com?subject=New Victor Builds Website Request&body=" +
      requestText();
  });
}

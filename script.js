document.documentElement.classList.add("js");
const items = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06 });
  items.forEach((item) => observer.observe(item));
} else {
  items.forEach((item) => item.classList.add("visible"));
}
window.addEventListener("load", () => {
  document.querySelectorAll(".reveal").forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.1) item.classList.add("visible");
  });
});
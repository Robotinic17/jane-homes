// Scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
);

document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Search tabs
document.querySelectorAll(".search-tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document
      .querySelectorAll(".search-tab")
      .forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (id === "#") return;
    const el = document.querySelector(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Nav scroll effect
const nav = document.getElementById("navbar");
const updateNavbarState = () => {
  if (!nav) return;
  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
};

window.addEventListener("scroll", updateNavbarState);
updateNavbarState();

// Contact form dev submission
const contactForm = document.getElementById("contact-form");
const formToast = document.getElementById("form-toast");
let toastTimeoutId;

const showFormToast = () => {
  if (!formToast) return;
  formToast.classList.add("visible");
  clearTimeout(toastTimeoutId);
  toastTimeoutId = window.setTimeout(() => {
    formToast.classList.remove("visible");
  }, 4500);
};

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const submitButton = contactForm.querySelector(".form-submit");
    if (submitButton) {
      submitButton.disabled = true;
    }

    const formData = new FormData(contactForm);
    const payload = Object.fromEntries(formData.entries());

    console.log("Jane Homes enquiry (dev):", payload);

    window.setTimeout(() => {
      showFormToast();
      contactForm.reset();
      if (submitButton) {
        submitButton.disabled = false;
      }
    }, 350);
  });
}

// Staggered fade-in delays
document
  .querySelectorAll(
    ".properties-grid .property-card, .steps-grid .step, .agents-grid .agent-card, .testimonials-grid .testimonial-card",
  )
  .forEach((el, i) => {
    el.style.transitionDelay = `${i * 0.1}s`;
  });

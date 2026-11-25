document.addEventListener("DOMContentLoaded", () => {
  // باز و بسته کردن منوی موبایل
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });
  }

  // انتخاب پلن‌های قیمت‌گذاری
  const planButtons = document.querySelectorAll(".select-plan");
  planButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedPlan = button.getAttribute("data-plan");
      alert(`You selected the ${selectedPlan} plan! Our team will contact you shortly.`);
    });
  });
});

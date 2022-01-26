/* NavBar */
const mavMenu = document.getElementById('mav-menu');
const sideNam = document.getElementById('sidenav');
mavMenu.addEventListener('click', () => {
  const navB = document.getElementById("nav-bottom-list");
  if (navB.style.display === "block") {
    navB.style.display = "none";
  } else {
    navB.style.display = "block";
  }
});
/* Plan */
const yearlyBtn = document.getElementById('yearly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const plan_span_price1 = document.getElementById('plan-span-price1');
const plan_span_price2 = document.getElementById('plan-span-price2');
yearlyBtn.addEventListener('click', () => {
  plan_span_price1.textContent = "$469";
  plan_span_price2.textContent = "$985";
});
monthlyBtn.addEventListener('click', () => {
  plan_span_price1.textContent = "$59";
  plan_span_price2.textContent = "$159";
});

/*  */
const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0; // Default 0

indicators.forEach((item, i) => {
  item.addEventListener('click', () => {
    indicators[currentTestimonial].classList.remove('active');
    wrapper.style.marginLeft = `-${100 * i}%`;
    item.classList.add('active');
    currentTestimonial = i;
  })
})
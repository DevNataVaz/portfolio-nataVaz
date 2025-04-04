//DevNataVaz

const filter_btns = document.querySelectorAll(".filter-btn");
const skills_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");
const records_wrap = document.querySelector(".records");
const records_numbers = document.querySelectorAll(".number");
const footer_input = document.querySelector(".footer-input");
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
  }
});

links.forEach((link) => link.addEventListener("click", () => closeMenu()));

filter_btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    filter_btns.forEach((button) => button.classList.remove("active"));
    btn.classList.add("active");

    let filterValue = btn.dataset.filter;

    $(".grid").isotope({ filter: filterValue });
  })
);

$(".grid").isotope({
  itemSelector: ".grid-item",
  layoutMode: "fitRows",
  transitionDuration: "0.6s",
});

window.addEventListener("scroll", () => {
  skillsEffect();
  countUp();
});

function checkScroll(el) {
  let rect = el.getBoundingClientRect();
  if (window.innerHeight >= rect.top + el.offsetHeight) return true;
  return false;
}

function skillsEffect() {
  if (!checkScroll(skills_wrap)) return;
  skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}

function countUp() {
  if (!checkScroll(records_wrap)) return;
  records_numbers.forEach((numb) => {
    const updateCount = () => {
      let currentNum = +numb.innerText;
      let maxNum = +numb.dataset.num;
      let speed = 100;
      const increment = Math.ceil(maxNum / speed);

      if (currentNum < maxNum) {
        numb.innerText = currentNum + increment;
        setTimeout(updateCount, 1);
      } else {
        numb.innerText = maxNum;
      }
    };

    setTimeout(updateCount, 400);
  });
}

var mySwiper = new Swiper(".swiper-container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
});




document.getElementById('show-more-skills').addEventListener('click', function(event) {
  event.preventDefault();
  const skillsContainer = document.getElementById('skills');
  const newSkills = `
    <div class="skill react">
      <h3 class="skill-title">React</h3>
      <div class="skill-bar">
        <div class="skill-progress" data-progress="75%"></div>
      </div>
    </div>
    <div class="skill nodejs">
      <h3 class="skill-title">Node.js</h3>
      <div class="skill-bar">
        <div class="skill-progress" data-progress="65%"></div>
      </div>
    </div>

  `;
  
  
  const existingSkills = skillsContainer.querySelector('.skill.react');
  if (existingSkills) {
    existingSkills.remove();
    skillsContainer.querySelector('.skill.nodejs').remove();
  } else {
    
    skillsContainer.insertAdjacentHTML('beforeend', newSkills);
  }
});


document.getElementById("submitArrow").addEventListener("click", function (event) {
  event.preventDefault(); 

  let emailInput = document.getElementById("emailInput").value;
  let errorMessage = document.getElementById("errorMessage");

  if (!emailInput || !emailInput.includes("@") || !emailInput.includes(".")) {
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    alert("Email enviado com sucesso!"); //
  }
});


function copiarEmail(event, element) {
  event.preventDefault(); 

  const email = "contato.natavaz@gmail.com";
  navigator.clipboard.writeText(email);

  const tooltip = element.nextElementSibling;
  tooltip.classList.add("show");

  setTimeout(() => {
      tooltip.classList.remove("show");
  }, 2000);
}


console.log("Estou esperando meu contrato!");
console.log("Estou esperando meu contrato!");
console.log("Estou esperando meu contrato!");
console.log("Estou esperando meu contrato!");
console.log("Estou esperando meu contrato!");
console.log("Estou esperando meu contrato!");

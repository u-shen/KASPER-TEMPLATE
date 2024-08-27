// Navbar
let toggler = document.querySelector(".toggle");
let ulItem = document.querySelector(".navbar .links");
toggler.addEventListener("click", () => {
  toggler.classList.toggle("active");
});
ulItem.addEventListener("click", (e) => {
  Array.from(ulItem.children).forEach((el) => {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
  let target = document.querySelector(`.${e.target.dataset.go}`).offsetTop;
  window.scrollTo({
    top: target,
    behavior: "smooth",
  });
  toggler.classList.remove("active");
});
window.onkeyup = function (e) {
  if (e.key === "Escape") {
    toggler.classList.remove("active");
  }
};

// Portoflio
let tabs = document.querySelectorAll(".tabs li");
let tabsContent = document.querySelectorAll(".images-container > div");
tabs.forEach((el) => {
  el.addEventListener("click", removeActive);
  el.addEventListener("click", removeImg);
});

function removeActive() {
  tabs.forEach((el) => {
    el.classList.remove("active");
  });
  this.classList.add("active");
}

function removeImg() {
  tabsContent.forEach((img) => {
    img.style.display = "none";
  });
  document.querySelectorAll(this.dataset.img).forEach((img) => {
    img.style.display = "block";
  });
}

// statistic
let numbers = document.querySelectorAll(".number");
let runOnce = false;
window.onscroll = function () {
  if (window.scrollY >= document.querySelector(".statics").offsetTop) {
    if (!runOnce) {
      numbers.forEach((el) => {
        let handler = window.setInterval(() => {
          el.innerHTML = parseInt(el.innerHTML) + 1;
          if (el.innerHTML == el.dataset.to) {
            clearInterval(handler);
          }
        }, 3000 / el.dataset.to);
      });
      runOnce = true;
    }
  }
};

// Skills
let skillsWidth = document.querySelector(".skills");
let isRun = false;
document.querySelectorAll(".progress-child").forEach((el) => {
  el.style.setProperty("transition", "all 10s linear", "important");
});
window.addEventListener("scroll", () => {
  if (!isRun) {
    if (window.scrollY >= skillsWidth.offsetTop) {
      document.querySelectorAll(".progress-child").forEach((el) => {
        el.style.width = el.dataset.width;
      });
      isRun = true;
    }
  }
});

// Form Validation
let emailRg = /\w+\.?\w+@(gmail|hotmail).(com|org|ma)/gi;
let nameRg = /[A-Za-z]\s[A-Za-z]/gi;
let msgRg = /\w+/gi;
let inputEmail = document.querySelector("#email-form input[type=email]");
let errorMsg = document.createElement("small");
document.querySelector("#email-form").addEventListener("submit", (e) => {
  if (emailRg.test(inputEmail.value)) {
    return true;
  } else {
    e.preventDefault();
    inputEmail.value = "";
    inputEmail.classList.add("error");
    inputEmail.setAttribute("placeholder", "Write Correct Email Please *");
  }
});
document.querySelector("#main-form").addEventListener("submit", (e) => {
  if (!nameRg.test(document.querySelector("#main-form [name='name']").value)) {
    e.preventDefault();
    document.querySelector("#main-form [name=name]").value = "";
    document.querySelector("#main-form [name=name]").classList.add("error");
    document
      .querySelector("#main-form [name=name]")
      .setAttribute("placeholder", "Full Name Required *");
  }
  if (!emailRg.test(document.querySelector("#main-form [name=email]").value)) {
    e.preventDefault();
    document.querySelector("#main-form [name=email]").value = "";
    document.querySelector("#main-form [name=email]").classList.add("error");
    document
      .querySelector("#main-form [name=email]")
      .setAttribute("placeholder", "Write Correct Email Please *");
  }
  if (!msgRg.test(document.querySelector("#main-form [name=message]").value)) {
    e.preventDefault();
    document.querySelector("#main-form [name=message]").value = "";
    document.querySelector("#main-form [name=message]").classList.add("error");
    document
      .querySelector("#main-form [name=message]")
      .setAttribute("placeholder", "Message Not Valid *");
  }
});

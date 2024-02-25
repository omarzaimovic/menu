const mobileMenu = () => {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");

  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
};

let rightbtn = document.querySelector("#right-btn");
let leftbtn = document.querySelector("#left-btn");
let pictures = document.querySelectorAll(".slider-images img");

let imgNum = 0;

const f1 = () => {
  displayNone();
  imgNum++;
  if (imgNum === pictures.length) {
    imgNum = 0;
  }
  pictures[imgNum].style.display = "block";
};

const f2 = () => {
  displayNone();
  imgNum--;
  if (imgNum === -1) {
    imgNum = pictures.length - 1;
  }
  pictures[imgNum].style.display = "block";
};

rightbtn.addEventListener("click", f1);
leftbtn.addEventListener("click", f2);

const displayNone = () => {
  pictures.forEach((img) => {
    img.style.display = "none";
  });
};

const portfolioSort = (button) => {
  let category = button.getAttribute("data-category");
  let portfolioItem = document.querySelectorAll(".portfolio-single-item");

  portfolioItem.forEach((item) => {
    item.style.display = "none";
  });

  if (category === "sve") {
    portfolioItem.forEach((item) => {
      item.style.display = "block";
    });
  }

  portfolioItem.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

const openModal = () => {
  let modalWindow = document.querySelector(".popup-modal");
  let modalOverlay = document.querySelector(".overlay");
  modalWindow.style.display = "block";
  modalOverlay.style.display = "block";
};

const closeModal = () => {
  let modalWindow = document.querySelector(".popup-modal");
  let modalOverlay = document.querySelector(".overlay");
  modalWindow.style.display = "none";
  modalOverlay.style.display = "none";
};

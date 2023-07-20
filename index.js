import { todayDeal } from "./todayDeal.js";

let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");
console.log(imgItem.length - 1);
let startSlider = 0;
let endSlider = (imgItem.length - 1) * 100;

slideBtnLeft.addEventListener("click", handleLeftBtn);
function handleLeftBtn() {
  if (startSlider < 0) {
    startSlider = startSlider + 100;
  }

  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}
slideBtnRight.addEventListener("click", handleRightBtn);
function handleRightBtn() {
  if (startSlider >= -endSlider + 100) {
    startSlider = startSlider - 100;
  }

  imgItem.forEach((element) => {
    element.style.transform = `translateX(${startSlider}%)`;
  });
}

//render auto maticly//

function renderSlideAuto() {
  if (startSlider >= -endSlider + 100) {
    handleRightBtn();
  } else {
    startSlider = 0;
  }
}

setInterval(renderSlideAuto, 3000);

/*-----------side bar navigation-------------*/

const sidebarNavigationEl = document.getElementById(
  "slidebar-container-navigation-id"
);
const sidebarOpenNavigationEl = document.getElementById("open-nav-slider");
const sidebarCloseNavigationEl = document.getElementById(
  "sidebar-navigation-close"
);

console.log(sidebarNavigationEl);

sidebarOpenNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("slidebar-show");
});

sidebarCloseNavigationEl.addEventListener("click", () => {
  sidebarNavigationEl.classList.toggle("slidebar-show");
});

//--///
//Get the button

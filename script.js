// Chọn nút mở overlay
const closebrand = document.querySelector(".brand");
console.log(closebrand);
// Chọn nút đóng overlay
const closeButton = document.querySelector(".close-btn");

if (closebrand) {
  closebrand.addEventListener("click", function () {
    overlay.classList.add("show");
  });
}

// Chọn overlay
const overlay = document.querySelector("#form-brand.overlay");

// Hiển thị overlay khi nhấn vào nút closebrand
closebrand.addEventListener("click", function () {
  overlay.classList.add("show"); // Thêm lớp show để hiển thị overlay
});

// Ẩn overlay khi nhấn vào nút đóng
closeButton.addEventListener("click", function () {
  overlay.classList.remove("show"); // Xóa lớp show để ẩn overlay
});

// Đóng overlay khi nhấn ra ngoài form
overlay.addEventListener("click", function (e) {
  if (e.target === overlay) {
    overlay.classList.remove("show"); // Xóa lớp show khi click ra ngoài form
  }
});
const tagbrand = document.querySelector(".item");
// Thêm sự kiện click
tagbrand.addEventListener("click", function () {
  window.location.href = "afnan.html"; // Chuyển hướng tới trang mới
});

// //
// document
//   .getElementById("hamburger-menu")
//   .addEventListener("click", function () {
//     document.getElementById("menu").classList.toggle("hidden");
//   });
//aspect
const imgContainer = document.querySelector(".aspect");
const imgPosition = document.querySelectorAll(".aspect img");
const dotitem = document.querySelectorAll(".dot");
let imgNumber = imgPosition.length;
let index = 0;
imgPosition.forEach((image, index) => {
  image.style.left = index * 100 + "%";
  dotitem[index].addEventListener("click", function () {
    baner(index);
  });
});
imgSlide = () => {
  index++;
  if (index >= imgNumber) {
    index = 0;
  }
  baner(index);
};
function baner(index) {
  imgContainer.style.left = "-" + index * 100 + "%";
  const dotActive = document.querySelector(".active");
  dotActive.classList.remove("active");
  dotitem[index].classList.add("active");
}
setInterval(imgSlide, 3000);
console.log(imgPosition);

/*----------------------chitiet-----------------*/
function btnchitiet() {
  const element = document.querySelector(".product-content-button-tile-detail");
  if (element.style.display === "none" || element.style.display === " ") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
/*--------imgbig,imgsmal----*/
const bigimg = document.querySelector(".products-left-big-img img");
const smalimg = document.querySelectorAll(".products-left-small-img img");
smalimg.forEach(function (imgItem, X) {
  imgItem.addEventListener("click", function () {
    bigimg.src = imgItem.src;
  });
});

/*-----------------sizze----------------*/
function selectSize(element) {
  const options = document.querySelectorAll(".size-option");
  options.forEach((option) => option.classList.remove("selected"));
  element.classList.add("selected");
}
/*-------------------email---------------*/
document.getElementById("faceb").onclick=function(){
  window.open("https://www.facebook.com/phelanux.hidden/","blank");
};
document.getElementById("tikk").onclick=function(){
  window.open("https://tiktok.com","blank");
}
document.getElementById("gg").onclick=function(){
  window.open("https://maps.app.goo.gl/ZeFPfCLwiTvC3Ad67","blank");
}
const tamanhoTela = window.innerWidth;
const menuNav = document.querySelector(".navbar");

if (tamanhoTela <= 991) {
  menuNav.classList.add("fixed-top");
} else {
  menuNav.classList.remove("fixed-top");
}

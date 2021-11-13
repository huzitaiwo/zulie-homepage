const navigation = document.querySelector('nav');
const navigationLinks = document.querySelector('.nav-links');
const burgerMenu = document.querySelector('.hamburger');
const burgerMenuIcon = document.querySelector('.hamburger img');

burgerMenu.addEventListener('click', () => {
    navigation.classList.toggle('active');
    navigationLinks.classList.toggle('active');

    //   toggle burgerMenu and close icon
  if (navigationLinks.classList.contains("active")) {
    burgerMenuIcon.src = "./icons/close.svg";
  } else {
    burgerMenuIcon.src = "./icons/hamburger.svg";
  }
})
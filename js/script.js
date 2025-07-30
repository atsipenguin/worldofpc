// Active class toggle
const navigation = document.querySelector('.navigation');

// When hamburger-menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
  navigation.classList.toggle('active');
};

// Click outside hamburger-menu or side bar to close
const hamburgerMenu = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
  if (!hamburgerMenu.contains(e.target) && !navigation.contains(e.target)) {
    navigation.classList.remove('active');
  }
});

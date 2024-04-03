// Get the elements
const navBar = document.querySelector('nav');
const heading = document.querySelector('h1');
const header = document.querySelector('header');

// Get the offset position of the navigation bar
// The 200 is just what felt right
const headerOffset = heading.offsetTop/2 + 200;

function stickyNavBar() {
  if (window.pageYOffset >=  headerOffset) {
    navBar.classList.add('sticky');
    heading.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
    heading.classList.remove('sticky');
  }
}

// Event listener for scrolling to call the stickyNavBar function
window.onscroll = function() {
  stickyNavBar();
};


// Get the elements
const navBar = document.querySelector('.navbar');
const heading = document.querySelector('h1');
const header = document.querySelector('header');

// Get the offset position of the navigation bar
// The 200 is just what felt right
const navBarOffset = heading.offsetTop;

function stickyNavBar() {
  if (window.pageYOffset >= navBarOffset) {
    navBar.classList.add('sticky');
  } else {
    navBar.classList.remove('sticky');
  }
}

// Event listener for scrolling to call the stickyNavBar function
window.onscroll = function() {
  stickyNavBar();
};


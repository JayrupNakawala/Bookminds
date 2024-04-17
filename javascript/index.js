// Get the elements
const navBar = document.querySelector('.navbar');
const heading = document.querySelector('h1');

// Get the offset position of the navigation bar
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


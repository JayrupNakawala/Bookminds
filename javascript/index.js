// Get the navigation bar element
const navBar = document.querySelector('nav');
const heading = document.querySelector('h1');

// Get the offset position of the navigation bar
const headingOffset = heading.offsetTop;

// Function to add the 'sticky' class to the navigation bar when it reaches the top of the page
function stickyNavBar() {
  if (window.pageYOffset >=  headingOffset) {
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


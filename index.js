// TOGGLE NAVIGATION BAR VISIBILITY BASED ON SCROLL
//
// Get Navigation Bar
var navBar = document.getElementById('navBar');
//
// Get Scroll Position
var scrollPos = window.scrollY;
//
// Scroll Event Listener
window.addEventListener('scroll', function() {

  // Check Between Previous and Current Position 
  // && Remove Box Shadow When Top Of Page
  if ((document.body.getBoundingClientRect()).top > scrollPos 
  && window.scrollY >= 100) {
    navBar.classList.add('sticky');
  } else {
        navBar.classList.remove('sticky');
    }
		
	// Store New Position Value
	scrollPos = (document.body.getBoundingClientRect()).top;
});

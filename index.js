const menu = document.getElementById('hamburger-toggle');
const navbar = document.getElementById('header-nav');
const navLinks = document.getElementById('nav-links');

navbar.onclick = (e) => {
    toggleMenu();
}

const toggleMenu = () => {
    menu.classList.toggle('active');
    navLinks.classList.toggle('active');
}


$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    document.getElementById('hamburger-toggle').classList.remove('active');
    document.getElementById('nav-links').classList.remove('active');
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          //document.getElementById('hamburger-toggle').classList.remove('active');
          //document.getElementById('nav-links').classList.remove('active');
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
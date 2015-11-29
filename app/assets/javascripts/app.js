var didscroll,
    lastScrollTop = 0,
    delta = 10,
    // outerHeight grabs the entire element with padding
    navbarheight = $('nav').outerHeight();


// when scrolled sets var to true
$(window).scroll(function(event){
  didscroll = true;
});

setInterval(function(){
  if (didscroll) {
    hasScrolled();
    didscroll = false;
  }
}, 250);

function hasScrolled () {
  var st = $(this).scrollTop();

//will trigger nav-up only when you srcoll up delta (10)
  if(Math.abs(lastScrollTop - st) <= delta)
    return;
  // console.log(st);
  if (st > lastScrollTop && st > navbarheight) {
    $('nav').removeClass('nav-down').addClass('nav-up');
    console.log("---------------");
    console.log("Current Scroll " + st);
    console.log("Last Scroll " + lastScrollTop);
  } else {
    $('nav').removeClass('nav-up').addClass('nav-down');

  }
  lastScrollTop = st;
}

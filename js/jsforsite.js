//hamburger code from https://www.youtube.com/watch?v=dIyVTjJAkLw

const hamburgerbutton = document.querySelector('#hamburger');
let hamburgeropen = false;
hamburgerbutton.addEventListener('click', () => {
  if(hamburgeropen == false) {
    hamburgerbutton.classList.add('open');
    hamburgeropen = true;
    console.log("Opened hamburger menu")
  }
  else {
    hamburgerbutton.classList.remove('open');
    hamburgeropen = false;
    console.log("Closed hamburger menu");
  }
//  hamburgerbutton.focus();
});

function myFunction() {
  var x = document.getElementById("navigation_links");
  if (x.className === "nav_links") {
    x.className += " responsive";
  } else {
    x.className = "nav_links";
  }
}
var navmenu = document.getElementById("navigation");
document.querySelector("#hamburger").addEventListener("click", function() {
  console.log("press hamburger menu");
  if (document.getElementById("navigation").classList.contains("navclosed") == true){
//    document.getElementById("navigation_links").style.height = "300px";
    document.getElementById("navigation").classList.remove("navclosed");
    navmenu.classList.add('slideopen')
//    navmenu.classList.toggle('active');
  }
  else {
//    document.getElementById("navigation_links").style.height = "auto";
      document.getElementById("navigation").classList.add("navclosed");
    navmenu.classList.remove('slideopen');
  }
//	var x = document.getElementById("navigation_links");
// if (x.className === "nav_links") {
//   x.className += " responsive";
// } else {
//   x.className = "nav_links";
//  }
});

//code from https://codepen.io/desandro/pen/LmWozd and https://www.nickang.com/2018-03-06-add-event-listener-for-loop-problem-in-javascript/

/*cards.forEach(function(card, index) {
  card.addEventListener('click', function() {
    card.classList.toggle('is-flipped');
  });
}); */
//  card[i].addEventListener('click', function(i) {
//    card.classList.toggle('is-flipped');
// });
//}
//card.addEventListener( 'click', function() {
//card.classList.toggle('is-flipped');
//});

//code to assist with tab accessibility in mobile view, from https://www.nickang.com/2018-03-06-add-event-listener-for-loop-problem-in-javascript/
//var enterKeyCode = 13;
hamburgerbutton.addEventListener("click", function(event) {
  var navopen = navmenu.checked;

  if(navopen) {
      navmenu.checked = false;
  } else {
      navmenu.checked = true;
  }
});

hamburgerbutton.onfocus = openthenav;

function openthenav() {
  console.log("hamburger in focus");
  window.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && hamburgeropen == false) {
      hamburgerbutton.click();
    }
  })
}

window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && hamburgeropen == true) {
    hamburgerbutton.click();
  }
})

/* var makeItRain = function() {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
} */

/* $('.splat-toggle.toggle').on('click', function() {
  $('#homepage body').toggleClass('splat-toggle');
  $('.splat-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.back-row-toggle.toggle').on('click', function() {
  $('#homepage body').toggleClass('back-row-toggle');
  $('.back-row-toggle.toggle').toggleClass('active');
  makeItRain();
});

$('.single-toggle.toggle').on('click', function() {
  $('#homepage body').toggleClass('single-toggle');
  $('.single-toggle.toggle').toggleClass('active');
  makeItRain();
}); */

//makeItRain();
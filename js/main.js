// Before after affect photo
$(".item__images").twentytwenty({
  default_offset_pct: 0.7, // How much of the before image is visible when the page loads
  hover: false,
  move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
});

//navbar handler
function navHandler() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar__links") {
    x.className += " responsive";
  } else {
    x.className = "navbar__links";
  }
}

$(".testimonials__items").slick({
  dots: true,
  // ,
  // draggable: true,
  prevArrow:
    '<div class="arrow__left"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
  nextArrow:
    '<div class="arrow__right"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
  autoplay: true,
  autoplaySpeed: 3000
});


//form handler
var form = document.getElementById('home-page__form'),
  url = 'https://script.google.com/macros/s/AKfycbyT9TEGG0FsgdjnhC4sTkCdyMDkzZjkKOq9Nwjw69WxWwlIBMpX/exec'


form.addEventListener('submit', e => {
  console.log(form)
  e.preventDefault()
  fetch(url, { method: 'POST', body: new FormData(form) })
    .then(response => console.log('Success!', response)

    )
    .catch(error => console.error('Error!', error.message))

  $('#thankyou_message').css("display", "inline-block");
  document.getElementById('phone').value = '';
  document.getElementById('name').value = '';
  document.getElementById('message').value = '';
})


// Smooth scrolling
$("#arrow-link").on("click", function (e) {
  // e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top - 100,
      },
      800,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});

// Read more btn
$("#more-btn").on("click", function (e) {
  // var dots = document.getElementById("dots");
  var moreText = $("#article__closed__renovation");
  var btnText = $("#more-btn");

  if (moreText.css("display") === "none") {
    moreText.css("display", "flex");
    btnText.css("display", "none");
  }
});




//Get the current year for the copyright
$("#year").text(new Date().getFullYear());

// Init Scrollspy
// $("body").scrollspy({ target: ".main-nav", offset: 110 });

// function getMoreText() {

// }



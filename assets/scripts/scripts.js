$(document).ready(function () {
  $('.sidenav').sidenav();
  AOS.init();
  //Scrolling
  $('.js-hook--about').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#about").offset().top - 100
    }, 1000);
  }); 

  $('.js-hook--home').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 1000);
  });

  $('.js-hook--projects').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 100
    }, 1000);
  });

  $('.js-hook--contact').click(function (e) {
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 100
    }, 1000);
  });
});

//Send Email function
function sendMail(contactForm) {
  emailjs.send("gmail", "Portfolio", {
      "name": contactForm.name.value,
      "email": contactForm.email.value,
      "message": contactForm.message.value,
    })
    .then(
      function (response) {
        $("#form").slideUp("slow")
        $('#success').addClass('visible')
      },
      function (error) {
        $("#form").slideUp("slow")
        $('#failed').addClass('visible')
      }
    );
  return false;
}
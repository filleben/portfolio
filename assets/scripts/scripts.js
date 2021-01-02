$(document).ready(function () {
  $('.sidenav').sidenav();
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
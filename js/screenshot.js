 // JavaScript (jQuery)
  
 $(document).ready(function() {
    $('.screenshot-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      gallery: {
        enabled: true
      }
    });
  
    $('#gallery-btn').on('click', function() {
      $('.screenshot-gallery a:first-child').click();
    });
  });

  function sendEmal(){
		Email.send({
			Host : "smtp.elasticemail.com",
			Username : "username",
			Password : "password",
			To : 'them@website.com',
			From : "you@isp.com",
			Subject : "This is the subject",
			Body : "And this is the body"
		}).then(
		message => alert(message)
		);
	}
	function message(){
alert('Message');
}

document.getElementById('send_message').addEventListener('click', function(event) {
    event.preventDefault();
    sendEmail();
    reset();
});
  
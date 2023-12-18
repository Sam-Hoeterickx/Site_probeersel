function sendEmail(){
  var voorNaam = document.getElementById('firstName').value;
  var achterNaam = document.getElementById('lastName').value;
  var email = document.getElementById('email').value;
  var adres = document.getElementById('address').value;
  var bericht = document.getElementById('bericht').value;

  var messageBody = "Naam" + voorNaam + 
  "<br/> Achternaam" + achterNaam + 
  "<br/> email" + email + 
  "<br/> adres" + adres +
  "<br/> bericht" + bericht;
  

  email.send({
      Host : "smtp.elasticemail.com",
      Username : "sh.testmail.code@gmail.com",
      Password : "0E39514978428E5C7D002CD16E8CB1A06CEF",
      To : 'samhoeterickx111@gmail.com',
      From : "sh.testmail.code@gmail.com",
      Subject : "New Booking",
      Body : {
        body: messageBody
      }
  }).then(
    message => alert(message)
  );
}
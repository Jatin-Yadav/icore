$("form").on("submit", function (e) {
  //ajax call here
  sendContactMail();
  //stop form submission
  e.preventDefault();
});

function sendContactMail() {
  var params = {
    name: document.getElementById("yourname").value,
    email: document.getElementById("youremail").value,
    phone: document.getElementById("yourphone").value,
    company: document.getElementById("yourcompany").value,
    message: document.getElementById("yourmessage").value,
  };

  const serviceID = "service_v1tj2ws";
  const templateID = "template_1l5df1c";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      console.log(res);
      alert("Your Message Send Successfully!!");
        document.getElementById("sent_successfully_home").click();
    })
    .catch((err) => console.log(err));
}

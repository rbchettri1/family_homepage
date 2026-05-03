const button = document.getElementById("messageButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "We are learning Git and GitHub one commit at a time.";
});

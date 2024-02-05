function verify() {
  const x = generateRandomChar(); // Assuming generateRandomChar is defined in verificationchar.js
  const userTyped = prompt(`Type "${x}" below:`);

  if (userTyped === x) {
    window.location.href = "/main.html";
  } else {
    alert("Verification failed. Try again!");
  }
}

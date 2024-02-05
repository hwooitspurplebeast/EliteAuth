function verify() {
  const x = generateRandomChar();
  const userTyped = prompt(`Type "${x}" below:`);

  if (userTyped === x) {
    window.location.href = "/main.html";
  } else {
    alert("Verification failed. Try again!");
  }
}

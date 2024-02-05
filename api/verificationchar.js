// Generates a random character with a mix of numbers, lowercase, and uppercase letters
function generateRandomChar() {
  const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let randomChar = '';

  for (let i = 0; i < 5; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    randomChar += chars.charAt(randomIndex);
  }

  return randomChar;
}

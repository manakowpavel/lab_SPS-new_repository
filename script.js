function showMessage() {
  document.getElementById('messageContainer').textContent = 'Hello World!';
}

document.getElementById('showMessageBtn').addEventListener('click', showMessage);
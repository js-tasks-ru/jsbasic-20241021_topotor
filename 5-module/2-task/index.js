function toggleText() {
  let btn = document.querySelector('.toggle-text-button');
  let text = document.getElementById('text');
  btn.addEventListener('click', () => {
    if (!text.hidden) {
      text.hidden = true
    } else {
      text.hidden = false
    };
  });
}

const sharebtn = document.querySelector('.share');
const linkText = document.querySelector('link').textContent;

sharebtn.addEventListener('click', function(event) {
  navigator.clipboard.writeText(linkText)
    .then(() => {
      alert('Text copied to clipboard');
    })
    .catch((err) => {
      console.error('Error copying text: ', err);
    });
});

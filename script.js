// Progressive enhancement: all resume content and links work without JavaScript.
const printButton = document.querySelector('.print-button');
if (printButton) {
  printButton.hidden = false;
  printButton.addEventListener('click', () => window.print());
}

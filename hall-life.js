const gallery = document.querySelector('.hall-gallery');

if (gallery) {
  const slides = [...gallery.querySelectorAll('.hall-slide')];
  const thumbnails = [...gallery.querySelectorAll('.hall-thumbnail')];
  const counter = gallery.querySelector('.gallery-counter');
  let current = 0;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, position) => {
      slide.hidden = position !== current;
    });
    thumbnails.forEach((thumbnail, position) => {
      thumbnail.setAttribute('aria-pressed', String(position === current));
    });
    counter.textContent = (current + 1) + ' / ' + slides.length;
    counter.setAttribute('aria-label', 'Photo ' + (current + 1) + ' of ' + slides.length + ': ' + slides[current].dataset.title);
  }

  gallery.querySelector('.gallery-previous').addEventListener('click', () => showSlide(current - 1));
  gallery.querySelector('.gallery-next').addEventListener('click', () => showSlide(current + 1));
  thumbnails.forEach((thumbnail, position) => {
    thumbnail.addEventListener('click', () => {
      showSlide(position);
      gallery.querySelector('.gallery-heading').scrollIntoView({
        block: 'start',
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
      });
    });
  });
  gallery.addEventListener('keydown', (event) => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowLeft') showSlide(current - 1);
    else if (event.key === 'ArrowRight') showSlide(current + 1);
    else if (event.key === 'Home') showSlide(0);
    else if (event.key === 'End') showSlide(slides.length - 1);
    else return;
    event.preventDefault();
  });

  showSlide(0);
  gallery.querySelector('.gallery-controls').hidden = false;
  gallery.querySelector('.hall-thumbnails').hidden = false;
  gallery.querySelector('.gallery-hint').hidden = false;
}

import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');

const galleryList = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" /></a></li>`
  )
  .join('');

gallery.innerHTML = galleryList;
gallery.addEventListener('click', selectImage);

function selectImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }

  const source = event.target.dataset.source;
  const instance = basicLightbox.create(
    `<img src="${source}"> width="1280" height="853"`,
    {
      onShow: instance => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );

  instance.show();

  function closeModal(event) {
    if (!basicLightbox.visible() || event.code !== 'Escape') {
      return;
    }
    instance.close();
  }
}

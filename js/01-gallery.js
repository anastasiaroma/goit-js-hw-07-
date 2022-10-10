import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector('.gallery'),
};

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    (acc += `<div class="gallery__item"><a class="gallery__link" href="${original}"><img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/></a></div>`),
  ``
);
refs.gallery.insertAdjacentHTML('beforeend', markup);

refs.gallery.addEventListener('click', onItemHandler);

function onItemHandler(e) {
  e.preventDefault();

  if (e.target.classList.contains('gallery__image')) {
    const pictureInModal = basicLightbox.create(
      `
      <img src = ${e.target.dataset.source}>
  `,
      {
        onShow: () => {
          document.addEventListener('keydown', closeModal);
        },
        onClose: () => {
          document.removeEventListener('keydown', closeModal);
        },
      }
    );
    pictureInModal.show();
    function closeModal(e) {
      if (e.code === 'Escape') {
        pictureInModal.close();
      }
    }
  }
}
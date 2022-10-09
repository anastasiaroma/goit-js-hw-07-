import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const imgMarkup = createGalleryItemMarkup(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', imgMarkup);



function createGalleryItemMarkup(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `
          <div class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
              />
            </a>
          </div>
        `;
      })
      .join('');
  }
  var lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt", captionDelay:250});
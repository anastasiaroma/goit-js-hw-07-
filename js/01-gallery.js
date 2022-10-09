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

let modalWindow;

galleryRef.addEventListener("click", smallImageClick);
function smallImageClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) return;
   modalWindow = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`);
modalWindow.show()

galleryRef.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' ) {
    modalWindow.close()
  }
})

}
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onImageClick)


function createGalleryMarkup(items) {
    return items.map(({ preview, original,description }) => {
        return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    }).join('');
}


function onImageClick(evt) {
    evt.preventDefault();

    let lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt', captionDelay: 250
    });
    lightbox.on('closed.simplelightbox', function () {
        lightbox.refresh();
    })

}


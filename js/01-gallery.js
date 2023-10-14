import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', galleryMarkup);
galleryList.addEventListener('click', onImgClick)

function createGalleryMarkup(items) {
    return items.map(({ preview, original,description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    }).join('');
}

function onImgClick(evt) {
    evt.preventDefault();

    if (evt.target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  });

instance.show()
    
  function onEscKeyPress(evt) {
  if (evt.code !== 'Escape') return;
      instance.close();
}
}
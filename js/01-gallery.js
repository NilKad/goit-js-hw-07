import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryRef = document.querySelector('.gallery');

const createGalleryMarkup = gallery =>
  gallery
    .map(
      ({ original, preview, description }) => `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');

const openIMGmodal = url => {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  instance.show(() => {
    galleryRef.addEventListener('keydown', e => {
      if (e.code === 'Escape' && instance.visible()) {
        instance.close();
      }
    });
  });
};

const onClickImg = e => {
  e.preventDefault();
  if (e.target.className != 'gallery__image') {
    return;
  }
  openIMGmodal(e.target.dataset.source);
};

galleryRef.innerHTML = createGalleryMarkup(galleryItems);

galleryRef.addEventListener('click', onClickImg);

// const closeGalletyOnEscapeEvent = () => {
//   galleryRef.addEventListener('keydown', e => {
//     console.log(e.code);
//     if (e.code === 'Escape' && instance.visible()) {
//       instance.close();
//     }
//   });
// };
// console.log(createGalleryMarkup(galleryItems));

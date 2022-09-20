import { galleryItems } from './gallery-items.js';

const galleryRef = document.querySelector('.gallery');

let lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captionsData: 'alt',
  captionDelay: 250,
  captionClass: 'gallery__captionClass',
});

const createGalletyMarkup = gallery =>
  gallery
    .map(
      ({ original, preview, description }) =>
        `
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`
    )
    .join('');

galleryRef.innerHTML = createGalletyMarkup(galleryItems);

lightbox.refresh();

// document.addEventListener('keydown', e => {
//   if (e.code === 'KeyQ') {
//     console.log('keyQ: ' + e.code);
//     lightbox.close('close.simplelightbox', function () {
//       // do something…
//     });
//   }
//   console.log(e);
// });

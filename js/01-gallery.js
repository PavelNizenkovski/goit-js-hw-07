import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const paletteContainer = document.querySelector(".gallery");
const cardsMarkap = createImegeCards(galleryItems); 
paletteContainer.insertAdjacentHTML(`beforeend`, cardsMarkap);
paletteContainer.addEventListener(`click`, onPaletteContainer);



console.log(createImegeCards(galleryItems));
function createImegeCards(galleryItems) {
    return galleryItems
      .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </div>`;
      })
      .join("");}

function onPaletteContainer(evt) {
     evt.preventDefault();
     if (evt.target.nodeName !== "IMG") {
       return;
     }
      const instance = basicLightbox.create(
        `<img src="${evt.target.dataset.source}" width="800" height="900">`
      );
      instance.show();
}
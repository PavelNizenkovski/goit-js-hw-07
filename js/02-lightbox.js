import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const cardsMarkap = createImegeCards(galleryItems);
paletteContainer.insertAdjacentHTML(`beforeend`, cardsMarkap);


console.log(createImegeCards(galleryItems));
function createImegeCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`;
    })
    .join("");
}


  const lightbox = new SimpleLightbox(".gallery a", {
    captionType: "alt",
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: "250",
  });

сonsole.log(lightbox);
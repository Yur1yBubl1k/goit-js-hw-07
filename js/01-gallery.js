import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulListEl = document.querySelector('.gallery');
console.log(ulListEl);

const createImageListFunc = galleryItems.map(({preview, original, description}) =>{
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>`
}).join('')

ulListEl.insertAdjacentHTML("beforeend",createImageListFunc);

const clickFunc = (event) => {
  event.preventDefault();

const isCardReview =event.target.classList.contains("gallery__image");
if( !isCardReview) {
    return;
} 
console.log(event.target.dataset.source);

  basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show();
};

ulListEl.addEventListener("click", clickFunc);


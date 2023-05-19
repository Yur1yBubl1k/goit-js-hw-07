import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulListElemSecond = document.querySelector('.gallery');
console.log(ulListElemSecond);

const createImageListFuncSecond = galleryItems.map(({preview, original, description}) =>{
    return `
    <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" />
   </a>
</li>`
}).join('')

ulListElemSecond.insertAdjacentHTML("beforeend",createImageListFuncSecond);

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt', 
    captionDelay: 250,
    captionPosition: 'bottom',
    close: true,
});

const clickFunc = (event) => {
    event.preventDefault();
  
  const isCardReview =event.target.classList.contains("gallery__image");
  if( !isCardReview) {
      return;
  } 
  console.log(event.target.src);
  };
  
  ulListElemSecond.addEventListener("click", clickFunc);


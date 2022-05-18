import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryImageContainer = document.querySelector('.gallery')

function createGalleryList(items) {
    return items.map(item =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${item.original}">
            <img class="gallery__image" 
            src="${item.preview}"
            data-source="${item.original}" 
            alt="${item.description}">
            </a>
        </div>`
    ).join(" ")    
};

galleryImageContainer.innerHTML = createGalleryList(galleryItems);

galleryImageContainer.addEventListener("click", openModalByClick)

function openModalByClick(event) {
    event.preventDefault()
    if (event.target.nodeName !== 'IMG') {
        return
    }

    const instance = basicLightbox.create(`<img src="${event.target.getAttribute("data-source")}"/>`)

instance.show();

document.addEventListener("keydown", closeModal);
function closeModal(event) {
    if(event.code === "Escape") {
        // galleryImageContainer.removeEventListener("click", openModalByClick);
        instance.close();
    }
}
}




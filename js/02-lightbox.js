import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.map(({ preview, original, description }) => {
    const item = document.createElement("li");
    const itemLink = document.createElement("a");
    const itemImg = document.createElement("img");

    item.classList.add("gallery__item");
    itemLink.classList.add("gallery__link");
    itemLink.setAttribute("href", `${original}`);
    itemImg.classList.add("gallery__image");
    itemImg.setAttribute("src", `${preview}`);
    itemImg.setAttribute("alt", `${description}`);

    itemLink.append(itemImg);
    item.append(itemLink);

    return item;
});

gallery.append(...galleryList);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    closeText: "",
    showCounter: false,
    disableRightClick: true,
});
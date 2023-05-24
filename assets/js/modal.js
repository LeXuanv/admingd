const viewOrder = document.querySelectorAll(".action .edit-btn");
const viewGallery = document.querySelectorAll(".action .gallery-btn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const gallery = document.querySelector(".gallery");
const galleryBody = document.querySelector(".gallery-body");
const closeModalBtn = document.querySelector(".modal .close-icon");
const closeGalleryBtn = document.querySelector(".gallery .close-icon");
const add = document.querySelector(".slidebar .content > a");
console.log(viewOrder);
console.log(add);

if (viewOrder) {
    for (let i = 0; i < viewOrder.length; i++) {
        viewOrder[i].addEventListener("click", () => {
            modal.classList.add("open");
        });
    }
}

if (viewGallery) {
    for (let i = 0; i < viewGallery.length; i++) {
        viewGallery[i].addEventListener("click", () => {
            gallery.classList.add("open");
        });
    }
}

if (add) {
    add.addEventListener("click", () => {
        modal.classList.add("open");
    });
}

closeModalBtn.onclick = () => {
    hideModal();
};

modal.onclick = () => {
    hideModal();
};

modalBody.onclick = (e) => {
    e.stopPropagation();
};

function hideModal() {
    modal.classList.remove("open");
}

if (closeGalleryBtn) {
    closeGalleryBtn.onclick = () => {
        hideGallery();
    };
}

if (gallery) {
    gallery.onclick = () => {
        hideGallery();
    };
}

if (galleryBody) {
    galleryBody.onclick = (e) => {
        e.stopPropagation();
    };
}

function hideGallery() {
    gallery.classList.remove("open");
}

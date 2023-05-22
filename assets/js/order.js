const viewOrder = document.querySelectorAll(".action .edit-btn");
const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal-body");
const closeBtn = document.querySelector(".close-icon");
console.log(viewOrder);

for (let i = 0; i < viewOrder.length; i++) {
    viewOrder[i].addEventListener("click", () => {
        modal.classList.add("open");
    });
}

closeBtn.onclick = () => {
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

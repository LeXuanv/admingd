let inputImg = document.querySelector(".modal .form-group .file");
let inputGalleryImg = document.querySelectorAll(".gallery .form-group .file");
let previewImage = document.querySelector(".preview-img");
console.log(inputImg);

if (inputImg) {
    inputImg.addEventListener("change", function (e) {
        var file = e.target.files[0];
        console.log(file);
        // Check if the file is an image
        if (file && file.type.startsWith("image/")) {
            // Create a FileReader object
            var reader = new FileReader();
            // Set the callback function when the file is loaded
            reader.onload = function (event) {
                // Set the source of the preview image
                previewImage.src = event.target.result;
            };
            // Read the file as a data URL
            reader.readAsDataURL(file);
        }
    });
}

function getParent(element) {
    while (element.parentElement) {
        if (element.parentElement.matches(".form-group")) {
            return element.parentElement;
        }
        element = element.parentElement;
    }
}

if (inputGalleryImg) {
    for (let i = 0; i < inputGalleryImg.length; i++) {
        inputGalleryImg[i].addEventListener("change", function (e) {
            let previewImg = getParent(inputGalleryImg[i]);
            console.log(previewImg);
            var file = e.target.files[0];
            console.log(file);
            // Check if the file is an image
            if (file && file.type.startsWith("image/")) {
                // Create a FileReader object
                var reader = new FileReader();
                // Set the callback function when the file is loaded
                reader.onload = function (event) {
                    // Set the source of the preview image
                    previewImg.querySelector(".preview-img").src = event.target.result;
                };
                // Read the file as a data URL
                reader.readAsDataURL(file);
            }
        });
    }
}

let inputImg = document.querySelector(".modal .form-group .file");
let previewImage = document.querySelector(".preview-img");
console.log(inputImg);

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

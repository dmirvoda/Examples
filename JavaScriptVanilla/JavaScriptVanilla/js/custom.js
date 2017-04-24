//function swaps images from on to Off - Dennis
function swapImageToTurnOffOnKeyLock(img) {
    var onImg = "locked.png";

    var sourceOnImg = "images/locked.png";
    var sourceOffImg = "images/unlocked.png";

    var currentImageSrc = document.getElementById("lockImage").src;

    //get just the name of the image
    if (currentImageSrc.indexOf('/') >= 0) {
        currentImageSrc = currentImageSrc.substring(currentImageSrc.lastIndexOf('/') + 1);
    }

    if (currentImageSrc == onImg) {
        img.setAttribute('src', img.getAttribute('src').replace(sourceOnImg, sourceOffImg));
    } else {
        img.setAttribute('src', img.getAttribute('src').replace(sourceOffImg, sourceOnImg));
    }

}


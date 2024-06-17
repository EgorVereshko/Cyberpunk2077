const backgroundImages1920 = ['./img/background_header1.jpg', './img/background_header2.jpg', './img/background_header3.jpg'];
const backgroundImages1024 = ['./img/1024/background_header1.jpg', './img/1024/background_header2.jpg', './img/1024/background_header3.jpg'];
const backgroundImages320 = ['./img/320/background_header1.jpg', './img/320/background_header2.jpg', './img/320/background_header3.jpg'];
let currentImageIndex = 1;
let headerBlock = document.querySelector('.header');
let backgroundImages = backgroundImages1920;

function setBackgroundImages() {
    if (window.matchMedia("(max-width: 320px)").matches) {
        backgroundImages = backgroundImages320;
    } 
    else if (window.matchMedia("(max-width: 1024px)").matches) {
        backgroundImages = backgroundImages1024;
    } 
    else {
        backgroundImages = backgroundImages1920;
    }
}

window.addEventListener('load', setBackgroundImages);
window.addEventListener('resize', setBackgroundImages);

function changeBackgroundHeader() {
    if (currentImageIndex === backgroundImages.length) {
        currentImageIndex = 0;
    }
    headerBlock.style.backgroundImage = 
    `url(${backgroundImages[currentImageIndex]})`;
    currentImageIndex++;
}

setInterval(changeBackgroundHeader, 5000);

/* changeImagesSource */
function replaceImageSource(mediaQuery, className, newSource) {
    const image = document.querySelector(`${className}`);
  
    const handleMediaQueryChange = (elem) => {
        if (elem.matches) {
            image.src = newSource;
        } else {
            image.src = image.dataset.originalSrc;
        }
    };
  
    const mediaQueryList = window.matchMedia(mediaQuery);
    mediaQueryList.addListener(handleMediaQueryChange);
  
    image.dataset.originalSrc = image.src;
  
    handleMediaQueryChange(mediaQueryList);
  }
  
  replaceImageSource('(max-width: 1024px)', '.sponsor__image2', 'img/1024/sponsor_brand.png');
  replaceImageSource('(max-width: 1024px)', '.store__image', 'img/1024/background_store.jpg');
  replaceImageSource('(max-width: 1024px)', '.contest__form_background', 'img/1024/background_form.png');
  replaceImageSource('(max-width: 320px)', '.header__logo_image', 'img/320/logo.png');
  replaceImageSource('(max-width: 320px)', '.description__image1', 'img/320/image1.jpg');
  replaceImageSource('(max-width: 320px)', '.description__image2', 'img/320/image2.jpg');
  replaceImageSource('(max-width: 320px)', '.description__image3', 'img/320/image3.jpg');
  replaceImageSource('(max-width: 320px)', '.background_stripe_top', 'img/320/background_stripe_top.jpg');
  replaceImageSource('(max-width: 320px)', '.background_stripe_bottom', 'img/320/background_stripe_bottom.jpg');
  replaceImageSource('(max-width: 320px)', '.sponsor__image2', 'img/320/sponsor_brand.png');
  replaceImageSource('(max-width: 320px)', '.store__image', 'img/320/background_store.jpg');
  replaceImageSource('(max-width: 320px)', '.contest__form_background', 'img/320/background_form.png');
  replaceImageSource('(max-width: 1536px)', '.store__image', 'img/background_store_1536.jpg');
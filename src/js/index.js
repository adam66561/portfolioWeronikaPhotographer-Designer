import Typed from 'typed.js';

const typed = new Typed('#header-author-details-profession', {
    strings: ['<i>Photographer</i>', '<i>Artist</i>', '<i>Graphic Designer</i>', '<i>Interior Designer</i>'],
    typeSpeed: 100,
    backSpeed: 100,
    smartBackspace: true,
    loop: true,
    showCursor: false,
});

const websiteHeader = document.getElementById("header");
const wavesImage = document.getElementById("waveImageBackground");
let websiteHeaderPosition = '';
const htmlElement = document.documentElement;

function stickingWavesImageToHeader() { 
    websiteHeaderPosition = websiteHeader.getBoundingClientRect().bottom - 1;
    wavesImage.style.top = `${websiteHeaderPosition}px`;
    console.log(wavesImage.getBoundingClientRect().top);
}

function waveSizeImagePicker() {
    const browserWidth = window.innerWidth;
    if(browserWidth <= 1600){
        wavesImage.src= "../../img/wave/wave-haikei1.png";
    }else if(browserWidth > 1600 && browserWidth < 4000){
        wavesImage.src = "../../img/wave/wave-haikei2.png";
    }else if(browserWidth >= 4000){
        wavesImage.src = "../../img/wave/wave-haikei3.png";
    }
}

function setScrollVar(){
    const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
    htmlElement.style.setProperty("--scroll", Math.min(percentOfScreenHeightScrolled * 100, 100))
    // console.log()
}

addEventListener("scroll", () => {
    setScrollVar();
})

addEventListener("resize", () => {
    location.reload(true);
})

window.addEventListener("load", () => {
    waveSizeImagePicker();
    stickingWavesImageToHeader();
})

const websiteHeader = document.getElementById("header");
const wavesImage = document.getElementById("waveImageBackground");

function stickingWavesImageToHeader() { 
    const websiteHeaderPosition = websiteHeader.getBoundingClientRect().bottom - 1;
    wavesImage.style.top = websiteHeaderPosition+"px";
    console.log(websiteHeaderPosition);
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

// addEventListener("onload")
// stickingWavesImageToHeader();

addEventListener("resize", () => {
    location.reload(true);
})

window.addEventListener("load", () => {
    waveSizeImagePicker();
    stickingWavesImageToHeader();
})

function swithOff() {
    document.getElementById("bulbimage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catimage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off";
    document.getElementById("Offswitch").style.backgroundColor = "#cbd2d9";
    document.getElementById("Onswitch").style.backgroundColor = "#22c55e";
}

function swithOn() {
    document.getElementById("bulbimage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catimage").src = "https://d2clawv67efefq.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("Offswitch").style.backgroundColor = "#e12d39";
    document.getElementById("Onswitch").style.backgroundColor = "#cbd2d9";


}

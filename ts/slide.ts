let topSliders = document.getElementsByClassName("slide-top");
const baseTimeout = 100;
let timeout: number = 0;

for (let slider of topSliders) {
    setTimeout(() => {
        slider.classList.add("slide-top-animated");
    }, timeout);

    for (let innerSlider of slider.children) {
        setTimeout(() => {
            innerSlider.classList.add("slide-bottom-animated");
        }, timeout);
    }

    timeout += baseTimeout;
}

let menu = document.getElementsByClassName("index-menu");
for (let single of menu) {
    for (let child of single.children) {
        child.addEventListener("mouseout", function(event) {
            if (!child.classList.contains("swing-out")) {
                child.classList.add("swing-out");
            }
        });
    }
}

let leftSliders = document.getElementsByClassName("slide-left");
timeout = 0;

for (let slider of leftSliders) {
    setTimeout(() => {
        slider.classList.add("slide-left-animated");
    }, timeout);

    timeout += baseTimeout;
}
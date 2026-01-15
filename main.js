const endpoint = "http://10.89.177.127";

function getDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledDapur.style.backgroundColor = "#579fff"
            dapurLedImage.src = "./assets/led-on.png"
        }else{
            ledDapur.style.backgroundColor = "blue"
            dapurLedImage.src = "./assets/led-off.png"
        }
    })
}

function getTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledTamu.style.backgroundColor = "#579fff"
            tamuLedImage.src = "./assets/led-on.png"
        }else{
            ledTamu.style.backgroundColor = "blue"
            tamuLedImage.src = "./assets/led-off.png"
        }
    })
}

function getMakanLed() {
    fetch(endpoint + "/makan", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledMakan.style.backgroundColor = "#579fff"
            makanLedImage.src = "./assets/led-on.png"
        }else{
            ledMakan.style.backgroundColor = "blue"
            makanLedImage.src = "./assets/led-off.png"
        }
    })
}

function getToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "GET"
    }).then(response => response.text()).then(result => {
        if (result == "ON") {
            ledToilet.style.backgroundColor = "#579fff"
            toiletLedImage.src = "./assets/led-on.png"
        }else{
            ledToilet.style.backgroundColor = "blue"
            toiletLedImage.src = "./assets/led-off.png"
        }
    })
}

function setDapurLed() {
    fetch(endpoint + "/dapur", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
    
}
function setTamuLed() {
    fetch(endpoint + "/tamu", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setMakanLed() {
    fetch(endpoint + "/makan", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}
function setToiletLed() {
    fetch(endpoint + "/toilet", {
        method: "POST"
    }).then(response => response.text()).then(() => location.reload())
}

getDapurLed();
getTamuLed();
getMakanLed();
getToiletLed();

// function activateLed(button, imageId) {
//     const ledCard = button.parentElement;
//     const img = document.getElementById(imageId);

//     button.innerText = "ACTIVE";
//     button.style.background =
//         "linear-gradient(120deg, #00ff9c, #00f0ff)";

//     img.src = "./assets/led-on.png";
//     ledCard.classList.add("active");
// }

// function setDapurLed() {
//     fetch(endpoint + "/dapur", {
//         method: "POST"
//     }).then(response => response.text()).then(result =>console.log(result))
//     // activateLed(ledDapur, "dapurLedImage");
//     ledDapurLed.style.backgroundColor = "red"
// }
// function setTamuLed() {
//     fetch(endpoint + "/tamu", {
//         method: "POST"
//     }).then(response => response.text()).then(result =>console.log(result))
//     // activateLed(ledTamu, "tamuLedImage");
// }
// function setMakanLed() {
//     fetch(endpoint + "/makan", {
//         method: "POST"
//     }).then(response => response.text()).then(result =>console.log(result))
//     // activateLed(ledMakan, "makanLedImage");
// }
// function setToiletLed() {
//     activateLed(ledToilet, "toiletLedImage");
// }



// function activateLed(button, imageId) {
//     const ledCard = button.parentElement;
//     const img = document.getElementById(imageId);

//     button.innerText = "ACTIVE";
//     button.style.background =
//         "linear-gradient(120deg, #00ff9c, #00f0ff)";

//     img.src = "./assets/led-on.png";
//     ledCard.classList.add("active");
// }

// function setDapurLed() {
//     activateLed(ledDapur, "dapurLedImage");
// }
// function setTamuLed() {
//     activateLed(ledTamu, "tamuLedImage");
// }
// function setMakanLed() {
//     activateLed(ledMakan, "makanLedImage");
// }
// function setToiletLed() {
//     activateLed(ledToilet, "toiletLedImage");
// }





// function setDapurLed() {
//     ledDapur.style.backgroundColor = "red"
//     dapurLedImage.src = "./assets/led-on.png"
// }
// function setTamuLed() {
//     ledTamu.style.backgroundColor = "red"
//     tamuLedImage.src = "./assets/led-on.png"
// }
// function setMakanLed() {
//     ledMakan.style.backgroundColor = "red"
//     makanLedImage.src = "./assets/led-on.png"
// }
// function setToiletLed() {
//     ledToilet.style.backgroundColor = "red"
//     toiletLedImage.src = "./assets/led-on.png"
// }
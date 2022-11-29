const images = ["0.jpg", "1.jpg", "2.jpg"];

const choseImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `images/${choseImage}`;

document.body.appendChild(bgImage);

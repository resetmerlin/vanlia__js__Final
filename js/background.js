const images =[
    "im2.jpg",
    "img1.jpg",
    "img3.png",
];


const chosenImage = images[([Math.floor(Math.random()*images.length)])];
const mainScreen = document.querySelector(".home_content");

const image1= document.createElement("img");
// javascript에서 element를 만드는 것임...
image1.src=`js/${chosenImage}`;
// src 설정 

mainScreen.appendChild(image1);
//document.body.appendChild()의 기능은 body에 html을 추가하는 것!
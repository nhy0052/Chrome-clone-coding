const images = [
  "0.jpg", "1.jpg", "2.jpg", "3.jpg"
];

//랜덤 이미지 불러오기
const todaysImage = images[Math.floor(Math.random()*images.length)];

//랜덤 이미지를 HTML의 img 태그에 추가
const bgImage = document.createElement("img");
bgImage.src = `img/${todaysImage}`;

//만든 img 요소를 HTML의 body에 추가
document.body.appendChild(bgImage);
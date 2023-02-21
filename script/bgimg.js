const images = [ "1.jpeg","2.jpeg","3.jpeg","4.jpeg","5.jpeg" ];

//random으로 이미지 나타내기
const chosenImage = images[Math.floor(Math.random() * images.length)];

// 배경 이미지 넣는 형식 url('img주소')
const bgImage = `url(bgimg/${chosenImage})`

// body에 추가
document.body.style.backgroundImage = bgImage
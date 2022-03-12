const imgArr = [
    './Image/img1.jpg',
    './Image/img2.jpg',
    './Image/img3.jpg',
    './Image/img4.jpg',
    './Image/img5.jpg',
    './Image/img6.jpg'
]

const img = document.getElementById('img')
let count = 0

const showImg = () => {
    if (count == imgArr.length) {
        count = 0;
   }
    img.src = imgArr[count]
    count++
}
// Play Img Onlick Function
const playSlide = () => {
    let interval = setInterval(showImg, 1500)
}

// Pause Slide 
const pauseSlide = () => {
    clearInterval()
}
let borderRadius = []

for (let i = 25; i <= 75; i++) {
 borderRadius.push(i)
}

const magicBall1 = document.getElementById("magicBall1")
const magicBall2 = document.getElementById("magicBall2")
const magicBall3 = document.getElementById("magicBall3")





function changeShape1 () {
        let randomSize1 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize2 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize3 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize4 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize5 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize6 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize7 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize8 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    magicBall1.style.borderRadius = `${randomSize1}% ${randomSize2}% ${randomSize3}% ${randomSize4}% / ${randomSize5}% ${randomSize6}% ${randomSize7}% ${randomSize8}%`
    magicBall2.style.transition = `border-radius 0.9s`
}

function changeShape2 () {
        let randomSize1 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize2 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize3 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize4 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize5 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize6 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize7 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize8 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    magicBall2.style.borderRadius = `${randomSize1}% ${randomSize2}% ${randomSize3}% ${randomSize4}% / ${randomSize5}% ${randomSize6}% ${randomSize7}% ${randomSize8}%`
    magicBall2.style.transition = `border-radius 0.9s`
}

function changeShape3 () {
        let randomSize1 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize2 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize3 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize4 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize5 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize6 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize7 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    let randomSize8 = borderRadius[Math.floor(Math.random() * borderRadius.length)]
    magicBall3.style.borderRadius = `${randomSize1}% ${randomSize2}% ${randomSize3}% ${randomSize4}% / ${randomSize5}% ${randomSize6}% ${randomSize7}% ${randomSize8}%`
    magicBall2.style.transition = `border-radius 0.9s`
}

magicBall3.addEventListener('click', function (){
 changeShape1()
 changeShape2()
 changeShape3()

})
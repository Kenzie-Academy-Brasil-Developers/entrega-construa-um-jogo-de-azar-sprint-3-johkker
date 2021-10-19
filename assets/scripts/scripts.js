let borderRadius = []

for (let i = 25; i <= 75; i++) {
 borderRadius.push(i)
}

let answers = ["É certo que sim", "Decididamente sim", "Sem dúvidas!", "Sim, definitivamente", "Pode confiar que sim", "Do jeito que estou vendo, sim", "Muito provável que sim", "Com certeza", "Sim!", "Os sinais apontam que sim", "O universo diz que sim", "É melhor não te dizer agora", "Não consigo prever agora...", "Concentre-se mais e tente novamente", "As energias não estão alinhadas no momento, tente de novo.", "Talvez...", "Não!", "É bem provável que não", "Minhas fontes dizem que não", "Não conte com isso", "Dificilmente..."]

const header = document.getElementsByTagName("header")
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
    magicBall1.style.transition = `border-radius 0.9s`
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
    magicBall2.style.transition = `border-radius 0.8s`
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
    magicBall3.style.transition = `border-radius 0.7s`
}

function giveAnswer() {
    let randomAnswer = answers[Math.round(Math.random()* answers.length-1)]
    magicBall3.innerText = randomAnswer
    magicBall3.style.transition
}

function changeTitle() {
    header[0].innerText = "Para uma nova pergunta, é só repetir o processo!"
    header[0].style.fontSize = "1.5em"

}

magicBall3.addEventListener('click', function (){
 changeShape1()
 changeShape2()
 changeShape3()
 giveAnswer()
 changeTitle()

})
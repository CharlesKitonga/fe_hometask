let intro = document.querySelector('.intro')
let myname = document.querySelector('.myname-header')
let mynameSpan = document.querySelectorAll('.myname')

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(() => {
        mynameSpan.forEach((span, idx)=>{
            setTimeout(() => {
                span.classList.add('active')
            }, (idx +1) * 400);
        })
    });
    setTimeout(() => {
        mynameSpan.forEach((span, idx)=>{
            setTimeout(() => {
               span.classList.remove('active')
               span.classList.add('fade') 
            }, (idx + 1) * 50);
        })
    }, 2000);
    setTimeout(() => {
        intro.style.top = '-100vh'

    }, 2300);
})


const steps = Array.from(document.querySelectorAll('form .step'))
// console.log(steps)
const nextBtn = document.querySelectorAll('form .next-btn')
const prevBtn = document.querySelectorAll('form .previous-btn')
const inputTxt = document.querySelectorAll('form .inputText')
const form =document.querySelectorAll('form')

nextBtn.forEach (button=> {
    button.addEventListener('click', (e) => {
        nextStep('next')
    })
})
prevBtn.forEach(button=> {
    button.addEventListener('click', (e) => {
        nextStep('prev')
    })
})


function nextStep(btn){
    let index = 0
    const active = document.querySelector('form .step.active')
    index = steps.indexOf(active)
    steps[index].classList.remove('active')
    if (btn === 'next') {
        index ++
    }
    else if (btn === 'prev') {
        index --
    }
    steps[index].classList.add('active')
    // console.log(index)
}
 

const songOne = document.querySelector(`#s-1`)
const songTwo = document.querySelector(`#s-2`)
const songThree = document.querySelector(`#s-3`)
const songFour = document.querySelector(`#s-4`)
const songFive = document.querySelector(`#s-5`)
const songSix = document.querySelector(`#s-6`)
const songSeven = document.querySelector(`#s-7`)

const buttonOne = document.querySelector(`#one`)
const buttonTwo = document.querySelector(`#two`)
const buttonThree = document.querySelector(`#three`)
const buttonFour = document.querySelector(`#four`)
const buttonFive = document.querySelector(`#five`)
const buttonSix = document.querySelector(`#six`)
const buttonSeven = document.querySelector(`#seven`)

const xOne = document.querySelector(`#x-one`)
const xTwo = document.querySelector(`#x-two`)
const xThree = document.querySelector(`#x-three`)
const xFour = document.querySelector(`#x-four`)
const xFive = document.querySelector(`#x-five`)
const xSix = document.querySelector(`#x-six`)
const xSeven = document.querySelector(`#x-seven`)

buttonOne.addEventListener(`click`, () => {
    songOne.showModal()
})

buttonTwo.addEventListener(`click`, () => {
    songTwo.showModal()
})

buttonThree.addEventListener(`click`, () => {
    songThree.showModal()
})

buttonFour.addEventListener(`click`, () => {
    songFour.showModal()
})

buttonFive.addEventListener(`click`, () => {
    songFive.showModal()
})

buttonSix.addEventListener(`click`, () => {
    songSix.showModal()
})

buttonSeven.addEventListener(`click`, () => {
    songSeven.showModal()
})



xOne.addEventListener(`click`, () => {
    songOne.close()
})

xTwo.addEventListener(`click`, () => {
    songTwo.close()
})

xThree.addEventListener(`click`, () => {
    songThree.close()
})

xFour.addEventListener(`click`, () => {
    songFour.close()
})

xFive.addEventListener(`click`, () => {
    songFive.close()
})

xSix.addEventListener(`click`, () => {
    songSix.close()
})

xSeven.addEventListener(`click`, () => {
    songSeven.close()
})
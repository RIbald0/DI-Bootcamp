//Exercise 1 : Change the article

const h1_elm = document.getElementsByTagName("h1")[0]
console.log(h1_elm)

const last_p = document.getElementsByTagName("p")[3]
const main = document.getElementsByTagName("article")[0]
main.removeChild(last_p)

const h2_elm = document.getElementsByTagName("h2")[0]
h2_elm.addEventListener("click", changeColor)
function changeColor(e){
    h2_elm.style.backgroundColor = "red"
}

const h3_elm = document.getElementsByTagName("h3")[0]
h3_elm.addEventListener("click", hideElement)
function hideElement(e){
    h3_elm.style.display = "none"
}

const newButton = document.createElement("button")
main.appendChild(newButton)
newButton.textContent = "Click Here!"
newButton.addEventListener("click", change_p)
const first_p = document.querySelectorAll("p")[0]
const second_p = document.querySelectorAll("p")[1]
const third_p = document.querySelectorAll("p")[2]
function change_p(e){
    first_p.style.fontWeight = "bold"
    second_p.style.fontWeight = "bold"
    third_p.style.fontWeight = "bold"
}

h1_elm.addEventListener("mouseover", random_pixel)
function random_pixel(e){
    h1_elm.style.fontSize = Math.floor(Math.random() * 101);
}

second_p.addEventListener("mouseover", fading_elm_out)
second_p.addEventListener("mouseout", fading_elm_in)

function fading_elm_out(e){
    second_p.style.opacity = 0
}

function fading_elm_in(e){
    second_p.style.opacity = 1
}
// Exercice 4 : Volume of a sphere

const submit = document.getElementById("submit")
const volume = document.getElementById("volume")

submit.addEventListener("click", clickButton)

function clickButton(e){
    e.preventDefault()
    const radius = document.getElementById("radius").value
    const radius_number = parseFloat(radius)
    if (isNaN(radius_number) || radius_number < 0){
        alert("Please enter a positive number")
    } else {
        let result = (4 / 3) *  Math.PI * Math.pow (radius_number, 3)
        volume.value = result
    }
}
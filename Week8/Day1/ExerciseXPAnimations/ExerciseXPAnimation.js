//Exercise 1: Timer

//function alert_appears() {
//   setTimeout(function () {
//        alert("Hello World")
//    }, 2000)
//}


//let new_div = document.getElementById("container")

//function add_paragraph(){
//    setTimeout(function (){
//        let new_paragraph = document.createElement("p")
//        new_paragraph.innerHTML = "Hello World"
//        new_div.appendChild(new_paragraph)
//    }, 2000)
//}

//add_paragraph()
//alert_appears()


let new_div = document.getElementById("container")
let stop_function = document.getElementById("clear")
stop_function.addEventListener("click", clearFunction)
let timer = setInterval(final_code, 2000)

function final_code(){
        let new_paragraph = document.createElement("p")
        new_paragraph.innerHTML = "Hello World"
        new_div.appendChild(new_paragraph)
        if (new_div.children.length === 5){
            return clearFunction()
        }
    }

function clearFunction(e){
    clearInterval(timer)
}

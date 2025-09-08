//Exercise 2 : Move the box

div_main = document.getElementById("container")
div_animate = document.getElementById("animate")


function myMove(){
    let pos = 0
    let movement = setInterval(() => {
        if (pos === 350){
            clearInterval(movement)
        } else {
            pos++;
            div_animate.style.left = pos + "px"

        }
    }, 1) 

    }

   

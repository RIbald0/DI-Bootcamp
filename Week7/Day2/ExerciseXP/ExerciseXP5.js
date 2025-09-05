let div = document.getElementById("container")
console.log(div)

let change_pete = document.getElementsByClassName("list")[0].lastElementChild
change_pete.textContent = "Richard"

let delete_element = document.getElementsByClassName("list")[1].children[1]
delete_element.remove()

let change_name = document.getElementsByClassName("list")
for (i of change_name) {
    let first_li = i.firstElementChild
    first_li.textContent = "Matteo"
}

let add_class = document.getElementsByClassName("list")
for (i of add_class) {
    i.classList.add("student_list")
}

let add_classes = document.getElementsByClassName("list")[0]
add_classes.classList.add("university", "attendance")

let style_div = document.getElementById("container")
style_div.style.backgroundColor = "lightblue"
style_div.style.padding = "10px"

let hide_element = document.getElementsByClassName("list")[1].lastElementChild
hide_element.style.display = "none"

let add_border = document.getElementsByClassName("list")[0].lastElementChild
add_border.style.border = "thin dotted red"

let change_body = document.body
change_body.style.font = "italic bold 20px Verdana"

let div_checker = document.getElementById("container")
let current_color = div_checker.style.backgroundColor
console.log(current_color)
if (current_color === "lightblue") {
    let first_user = document.getElementsByClassName("list")[0].firstElementChild
    let second_user = document.getElementsByClassName("list")[0].lastElementChild
    alert(`Hi ${first_user.textContent} and ${second_user.textContent}!`)
}


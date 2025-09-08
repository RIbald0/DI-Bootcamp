//Exercise 2 : Work with forms

const get_form = document.querySelector("form")
console.log(get_form)

const first_input = document.getElementById("fname")
const second_input = document.getElementById("lname")
console.log(first_input)
console.log(second_input)

const first_input_by_name = document.getElementsByName("firstname")[0]
const second_input_by_name = document.getElementsByName("lastname")[0]
console.log(first_input_by_name)
console.log(second_input_by_name)

const submit_input = document.getElementById("submit")
submit_input.addEventListener("click", getInfo)
function getInfo(e){
    e.preventDefault()
    const first_element = get_form.elements["fname"].value;
    const second_element = get_form.elements["lname"].value;
    if (first_element === '' || second_element === ''){
        alert("Type again")
    }
    const userList = document.querySelector(".usersAnswer")
    const firstNameLi = document.createElement("li")
    firstNameLi.textContent = first_element
    const secondNameLi = document.createElement("li")
    secondNameLi.textContent = second_element
    userList.appendChild(firstNameLi)
    userList.appendChild(secondNameLi)
}


//Exercise 6 : Change the navbar

let div = document.getElementById("navBar");
div.setAttribute("id", "socialNetworkNavigation");

let newLi = document.createElement("li");
let newTextNode = document.createTextNode('Logout');

newLi.appendChild(newTextNode);

let ulElement = document.getElementById("socialNetworkNavigation").firstElementChild;
ulElement.appendChild(newLi);

let firstLi = document.getElementById("socialNetworkNavigation").firstElementChild.firstElementChild;
console.log(firstLi.textContent)

let lastLi = document.getElementById("socialNetworkNavigation").firstElementChild.lastElementChild;
console.log(lastLi.textContent)
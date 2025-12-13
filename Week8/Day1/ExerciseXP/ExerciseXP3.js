//Exercise 3 : Transform the sentence

let allBoldItems;
function getBoldItems(){
    let all_strong = document.getElementsByTagName("strong")
    allBoldItems = all_strong
}
getBoldItems()

let big_p = document.querySelector('p')
big_p.addEventListener("mouseover", highlight)
big_p.addEventListener("mouseout", returnItemsToDefault)
function highlight(e){
    for (let item of allBoldItems){
    item.style.color = "blue"}
}

function returnItemsToDefault(e) {
    for (let item of allBoldItems) {
        item.style.color = "black"
    }
}

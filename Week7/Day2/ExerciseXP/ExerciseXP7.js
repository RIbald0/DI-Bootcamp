//Exercise 7 : My Book List

allBooks = [{
    title: "Nineteen Eighty-Four",
    author: "George Orwell",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQIj5Tg3wbVjweBEp311ZWE0zQLl_e4jIuLhDs3go6BvgoWBTC-",
    alreadyRead: true
},
{
    title: "Siddharta",
    author: "Hermann Hesse",
    image: "https://m.media-amazon.com/images/I/61uyMl+pFJL._UF894,1000_QL80_.jpg",
    alreadyRead: false
}

]


let creation = document.querySelector(".listBooks")
for (let i = 0; i < allBooks.length; i++) {
    console.log(allBooks[i]);
    let div_creation = document.createElement("div");
    creation.appendChild(div_creation)
    let p_creation = document.createElement("p")
    let text = `${allBooks[i].title} written by ${allBooks[i].author}`
    p_creation.textContent = text
    div_creation.appendChild(p_creation)
    let img_creation = document.createElement("img")
    let image = allBooks[i].image
    img_creation.setAttribute("src", image)
    img_creation.setAttribute("width", "100px")
    div_creation.appendChild(img_creation)
    if (allBooks[i].alreadyRead){
        p_creation.style.color = "red"
    }
}



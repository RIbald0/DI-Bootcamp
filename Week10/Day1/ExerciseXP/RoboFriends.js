const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        image: 'https://robohash.org/1?200x200'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        image: 'https://robohash.org/2?200x200'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        image: 'https://robohash.org/3?200x200'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        image: 'https://robohash.org/4?200x200'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        image: 'https://robohash.org/5?200x200'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        image: 'https://robohash.org/6?200x200'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        image: 'https://robohash.org/7?200x200'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        image: 'https://robohash.org/8?200x200'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        image: 'https://robohash.org/9?200x200'
    },
    {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        image: 'https://robohash.org/10?200x200'
    }
];


const robotsContainer = document.getElementById('robot-cards-container')
const displayRobots = (robots) => {
    robotsContainer.innerHTML = '';
    robots.map((element) => {
        const robotsDiv = document.createElement('div');
        robotsDiv.classList.add('robot-card');
        robotsContainer.appendChild(robotsDiv);
        const robotsImage = document.createElement('img');
        robotsImage.classList.add('robot-image');
        robotsImage.setAttribute('src', element.image);
        robotsDiv.appendChild(robotsImage);
        const robotsH1 = document.createElement('h1');
        robotsH1.classList.add('robot-name');
        robotsH1.textContent = element.name;
        robotsDiv.appendChild(robotsH1);
        const robotsP = document.createElement('p');
        robotsP.classList.add('robot-email');
        robotsP.textContent = element.email;
        robotsDiv.appendChild(robotsP);
    });
}

let inputBox = document.getElementById('search-box')
inputBox.addEventListener('input', changeInput)


function changeInput(e) {
    const inputElement = e.target.value.toLowerCase();
    const filteredRobots = robots.filter(element => {
        return element.name.toLowerCase().includes(inputElement);
    })
    displayRobots(filteredRobots);
}


displayRobots(robots)
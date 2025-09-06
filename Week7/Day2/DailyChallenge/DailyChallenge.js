planets = [
    {
     name:'Mercury',
     color: 'grey',
     moons: 0
    },
    {
    name: 'Venus',
    color: 'yellow',
    moons:0
    },
    {
    name: 'Earth',
    color:'blue',
    moons: 1
    },
    {
    name: 'Mars',
    color: 'red',
    moons: 2
    },
    {
    name: 'Jupiter',
    color: 'orange',
    moons: 95
    },
    {
    name: 'Saturn',
    color: 'gold',
    moons: 146
    },
    {
    name: 'Uranus',
    color:'lightblue',
    moons: 27
    },
    {
    name: 'Neptune',
    color: 'darkblue',
    moons: 14
    },
    {
    name: 'Pluto',
    color: 'brown',
    moons: 5
    }
]

let section = document.getElementsByClassName("listPlanets")[0]

for (let i = 0; i < planets.length; i++) {
    let newDiv = document.createElement('div')
    newDiv.classList.add('planet')
    newDiv.classList.add(`${planets[i].name}`)
    newDiv.style.backgroundColor = `${planets[i].color}`
    for (let j = 0; j < planets[i].moons; j++) {
        let newDiv2 = document.createElement('div')
        newDiv2.classList.add('moon')
        newDiv.appendChild(newDiv2)
    }
    section.appendChild(newDiv)

}
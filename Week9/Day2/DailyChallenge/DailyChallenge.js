//Daily challenge  Go Wildcats

const gameInfo = [
    {
        username: "john",
        team: "red",
        score: 5,
        items: ["ball", "book", "pen"]
    },
    {
        username: "becky",
        team: "blue",
        score: 10,
        items: ["tape", "backpack", "pen"]
    },
    {
        username: "susy",
        team: "red",
        score: 55,
        items: ["ball", "eraser", "pen"]
    },
    {
        username: "tyson",
        team: "green",
        score: 1,
        items: ["book", "pen"]
    },
];


const usernames_array = []

const usernames = gameInfo.forEach((username) => {
    usernames_array.push(username.username + "!")
})

console.log(usernames_array)


const winners_array = []

const winners = gameInfo.forEach((winner) => {
    if (winner.score > 5){
        winners_array.push(winner.username)
    }
})

console.log(winners_array)


const total_score = gameInfo.reduce((acc, score) => {
    return acc + score.score
})

console.log(total_score)
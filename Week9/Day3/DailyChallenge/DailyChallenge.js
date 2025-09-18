//Daily challenge : Creating Objects


class Video {
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }



watch() {
    return `${this.uploader} watched all ${this.time} of ${this.title}!`
}
}


const first_video = new Video("First Video", "Matteo", 50)
console.log(first_video.watch())
const second_video = new Video("Second Video", "Gal", 30)
console.log(second_video.watch())

object_array = [
    {
    title:"First Video",
    uploader:"Matteo",
    time: 50
    },
    {
    title: "Second Video",
    uploader: "Gal",
    time: 30
    },
    {
    title: "Third Video",
    uploader: "Davide",
    time: 40
    },
    {
    title: "Fourth Video",
    uploader: "Julian",
    time: 20
    },
    {
    title: "Fifth Video",
    uploader: "Andrea",
    time: 15
    }   
]


const new_instances = []

for (item of object_array) {
    new_instances.push(new Video(item.title, item.uploader, item.time))
}

console.log(new_instances)
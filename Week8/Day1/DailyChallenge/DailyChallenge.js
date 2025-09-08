//Daily challenge: Tell the story


let user_inputs = {}

const button_element = document.getElementById("lib-button")
const content_story = document.getElementById("story")
const form_element = document.getElementById("libform")

const new_button = document.createElement("button")
new_button.textContent = "Shuffle Story"
new_button.id = "shuffle"
form_element.appendChild(new_button)

button_element.addEventListener("click", fillForm)
new_button.addEventListener("click", shuffleStory)

function fillForm(e){
    e.preventDefault()
    const noun_element = document.getElementById("noun").value
    const adjective_element = document.getElementById("adjective").value
    const name_element = document.getElementById("person").value
    const verb_element = document.getElementById("verb").value
    const place_element = document.getElementById("place").value
    if (noun_element === '' || adjective_element === '' || name_element === '' || verb_element === '' || place_element === ''){
        alert("Please fill out all the inputs")
    } else {
        const story = `Many years ago, ${name_element} ${verb_element} a ${adjective_element} ${noun_element} in ${place_element}`
        content_story.textContent = story
        user_inputs.noun = noun_element;
        user_inputs.adjective = adjective_element;
        user_inputs.person = name_element;
        user_inputs.verb = verb_element
        user_inputs.place = place_element
    }
}

function shuffleStory(e){
    e.preventDefault()
    list_of_stories = [
        `Many years ago, ${user_inputs.person} decided to ${user_inputs.verb} a very ${user_inputs.adjective} ${user_inputs.noun} in the middle of ${user_inputs.place}.`,
        `The most ${user_inputs.adjective} ${user_inputs.noun} in the world was discovered in ${user_inputs.place}. The only person who knows how to ${user_inputs.verb} it is ${user_inputs.person}.`,
        `We thought that ${user_inputs.person} was trying to ${user_inputs.verb} a ${user_inputs.noun} at the local library. It was the most ${user_inputs.adjective} thing we had ever witnessed in ${user_inputs.place}!`
    ]

    const random_story_index = Math.floor(Math.random() * list_of_stories.length);
    const random_story = list_of_stories[random_story_index];
    content_story.textContent = random_story
}
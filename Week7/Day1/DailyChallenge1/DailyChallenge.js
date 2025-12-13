//Daily challenge: Not Bad

const sentence = "The movie is not so bad, I like it"

const wordNot = sentence.indexOf("not")

const wordBad = sentence.indexOf("bad")


if (wordBad > wordNot) {
    first_part = sentence.slice(0, wordNot)
    middle_part = "good"
    last_part = sentence.slice(wordBad + 3)
    new_sentence = first_part + middle_part + last_part
    console.log(new_sentence)
}
else {
    console.log(sentence)
}


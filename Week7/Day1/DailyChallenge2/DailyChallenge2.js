//Daily challenge: Stars

let stars = ''

for (let i = 0; i < 6; i++) {
    stars = stars + '* '
    console.log(stars)
}


for (let i = 0; i < 6; i++) {
    let nested_stars = ''
    for (let j = 0; j <= i; j++) {
        nested_stars = nested_stars + '* '
    }
    console.log(nested_stars)

}
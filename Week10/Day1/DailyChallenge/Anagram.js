function checkAnagram (firstWord, secondWord){
    let replaceFirst = firstWord.replaceAll(' ','').toLowerCase();
    let replaceSecond = secondWord.replaceAll(' ','').toLowerCase();
    let arrayFirst = replaceFirst.split('');
    let arraySecond = replaceSecond.split('');
    let sortedFirst = arrayFirst.sort();
    let sortedSecond = arraySecond.sort();
    let newStringFirst = sortedFirst.join('');
    let newStringSecond = sortedSecond.join('');
    if (newStringFirst === newStringSecond){
        console.log(`"${replaceFirst.charAt(0).toUpperCase() + replaceFirst.slice(1)}" is an anagram of "${replaceSecond.charAt(0).toUpperCase() + replaceSecond.slice(1)}"`)
    } else {
        console.log(`"${replaceFirst.charAt(0).toUpperCase() + replaceFirst.slice(1)}" is not an anagram of "${replaceSecond.charAt(0).toUpperCase() + replaceSecond.slice(1)}"`)
    }
}


checkAnagram('   Hello   ', 'Text     ')
checkAnagram('Astronomer', 'Moon starer')
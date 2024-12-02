// Dynamically-typed language
let a = 'Duy';
console.log(typeof a);

a = 1;
console.log(typeof a);

a = true;
console.log(typeof a);


console.log('"\'\'"')

// \^o^/

let myName = 'Bach Duy';
console.log(myName[0]);

let vowels = 0, consonants = 0;
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);

    if (myName[i].charCodeAt(0) === 97) {
        vowels++;
    }
}

// || OR
// && AND 

// ===
// !==

console.log(vowels, consonants);

'radar'

function checkPalindrome(word) {
    // return true/false
    
    for (let head = 0; head < word.length / 2; head++) {
        let tail = word.length - 1 - head;
        if (word[head] !== word[tail]) return false;
    }

    return true;
}

let isPal = checkPalindrome('radar');

console.log(isPal);

console.log(checkPalindrome('raddar'));
console.log(checkPalindrome('racdar'));


function checkPalindromeSentence(sentence) {
    // return true/false
    // sentence.charCodeAt(head)
    // while

    sentence.
}
    
// Ternary operator
let age = 21;
let ageType = age > 18 ? 'adult' : 'children';


console.log(ageType);

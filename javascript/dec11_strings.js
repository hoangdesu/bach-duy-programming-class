// arrow function
/*
 * description for the function
 * @return {string} msg
 */
const randomRGB = () => {
    return `rgb(${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)}, ${Math.ceil(Math.random() * 256)})`;
};

console.log(randomRGB()); // "rgb(15, 2, 254)"; 0-255

let fname = "Duy";
let lname = "Loi";

// Li Bo Wei

// String template: literal backtick ``
// let fullName = `${lname} ${fname}`;

let fullName = "";
fullName += lname;
fullName += " ";
fullName += fname;

// Math.random(): 0.0 -> 0.9999


function total(a, b) {
    return a + b;
}

// function getRandomHexColor() {
//     char options: 0-9, a-f => 16 hexa == 16

//     '#rrggbb'
// }


// return a string
// support vietnamese
function slugify(title) {

}


// hà nội -> ha-noi
// Hồ Chí Minh city -> ho-chi-minh-city

// "Atehea - Disposable and Waterproof Hygienic Pillow Cases"
// -> "atehea-disposable-and-waterproof-hygienic-pillow-cases"

// switch case: if either one of these characters: ó ò ỏ õ ọ ố ồ ổ ỗ ộ ơ ớ ờ ở ỡ ợ => o


// const o = 'óòõọốồổỗộơớờởỡợ'

// let name1 = 'abco'
// name1.

const randomHex = () => {
    let color = '#'
    const chars = '0123456789abcdef';

    for (let i = 0; i < 6; i++) {
        let randIndex = Math.ceil(Math.random() * (chars.length - 1));
        color += chars[randIndex];
    }

    return color;
}


console.log(randomHex());

const duy = 'Atehea - Disposable and Waterproof Hygienic Pillow Cases';

const splitted = duy.split(' ').filter((el) => el !== '');
console.log(splitted);

const joined = splitted.join('-');
console.log(joined);



console.log(duy[0]);

console.log(duy.includes('D'));

const a = 'áàảãạấầẩẫậắằẳẵặăâ';

// Normalize
let normalized = ''
for (let i = 0; i < duy.length; i++) {
    if (a.includes(duy[i])) {
        normalized += 'a'
    } else {
        normalized += duy[i]
    }
}

console.log(normalized);

const findFirstIndexOf = (mainString, subString) => {
    let mainPtr = 0;
    while (mainPtr < mainString.length) {
        if (mainString[mainPtr] === subString[0]) {
            const tempSeen = mainPtr;
            let allMatched = true;
            for (let smallPtr = 1; smallPtr < subString.length; smallPtr++) {
                mainPtr++;
                // console.log(mainString[mainPtr], subString[smallPtr]);
                if (subString[smallPtr] !== mainString[mainPtr]) {
                    allMatched = false;
                    mainPtr--;
                    break;
                }
            }
            if (allMatched) return tempSeen;
        }
        mainPtr++;
        log
    }
    return -1;

}


console.log(findFirstIndexOf("/vai/vayne/", "vayne")); // -> int
console.log(findFirstIndexOf('hehelloxyz', "hello")); // -> int
console.log(findFirstIndexOf('ahehelloxyz', "hello"));

console.log('ahehelloxyz'.indexOf("hello")); // -> int
console.log('hellhelloxyz'.indexOf("hello")); // -> int



"abc/vayne/def/vayne" =>
[4, 14]
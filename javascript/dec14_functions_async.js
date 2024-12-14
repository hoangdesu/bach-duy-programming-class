// Asynchronous programming: lập trình bất đồng bộ

// Promise
setTimeout(() => {
    console.log(1)
}, 1000);

setTimeout(() => {
    console.log(2)
}, 1000); // miliseconds

setTimeout(() => {
    console.log(3)
}, 1000);


const sayHello = () => console.log('hello');
setTimeout(sayHello, 2000);


setTimeout(() => {
    setTimeout(() => {
        console.log('after 1s => 3s');
    }, 1000);
    console.log('after 2s');
}, 2000);


let counter = 1;

const myClock = setInterval(() => {
    console.log(counter);
    counter++;
    // if (counter === 5) break;
    if (counter === 5) {
        clearInterval(myClock);
    }
}, 1000);

console.log('finish counting!')


setInterval(() => {
    console.log('waiting...');
    setTimeout(() => {
        console.log(counter);
        counter++;
    }, 1000);
}, 1000);


setTimeout(() => {

}, 1000)

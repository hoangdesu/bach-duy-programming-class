// function hello() {
//     console.log('hello')
//     hello();
// }

// hello();

// function b() {
//     console.log('calling func b');
//     a();
// }

// function a() {
//     console.log('calling func a')
//     b();
// }

// a();

function count(start, stop) {
    // base case
    if (start === stop+1) 
        return;

    console.log(start);
    
    count(start + 1, stop);
}

count(5, 10);
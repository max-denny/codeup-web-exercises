

console.log('We are linked');

function wait(number) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {}, number);
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));





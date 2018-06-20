
function counter(){
    for(var number = 1; number<50; number++)
        console.log('Here is a number');
}


 var userNumber = prompt('Enter your odd number between 1 and 50');

for (var number = 1; number < 50; number++) {
    if (userNumber % 2 !== 0) {
        console.log('Here is an odd number: ' + number);
        for (userNumber){
            console.log('Yikes! Skip this one : ' + userNumber);
        }
    } else {
        break;
    }
}




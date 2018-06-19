//Problem 1

function showMultiplicationTable(number){
    for(var m = 1; m <= 10; m++) {
        console.log(number + ' x ' + m + ' = ' + (number * m));
    }
}

showMultiplicationTable(7);

//Problem2

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
Math.floor(Math.random() * 5) + 1;


function oddOrEven() {
    var ranResult = Math.floor(Math.random() * 180) + 20;
    if (ranResult % 2 === 0) {
        return (console.log(ranResult + " is " + " even."));
    } else {
        return (console.log(ranResult + " is " + " odd."))
    }
}

for (var i=0;i<10; i++){
    oddOrEven();
}


for (var concatNumber;
}


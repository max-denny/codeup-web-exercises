var x = 1

while (x < 70000){
    console.log(x);
    x = x * 2
}


//Solution 2


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5



do {
    console.log('Start of the day I have ' + allCones + ' left.');

    var conesToSell = Math.floor(Math.random() * 5) + 1;

    if(conesToSell <= allCones) {
        console.log('I sold ' + conesToSell);
        allCones = allCones - conesToSell;
    } else if (allCones === 0){
        console.log('I can go home');
    } else {
        console.log('I don\'t have ' + conesToSell + ' cones to sell.');
    }



} while(allCones !== 0);











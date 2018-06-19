console.log('Hello from External Javascript');

alert('Welcome to my website!');

var userInput = prompt('Hey, real quick, what\'s your favorite color?');

alert ('Hey, no way! ' + userInput.toUpperCase() + ' is my favorite color, too!');

alert ('So let\'s talk about these movies you rented for the kids. What do you say?');
var dailyMovieCost = confirm('Together, let\'s figure out how much money you spent. I know that that each movie costs three dollars per day to rent. Is that right?');
    console.log(dailyMovieCost);

if (dailyMovieCost == false) {
    alert('Hey, you can\'t fool me! I know those movies costs $3 a day.');
}

var pricePerDay = 3;
var littlemDays = 3;
var bbearDays = 5;
var hercDays = 1;

var totalPaid = (littlemDays + bbearDays + hercDays) * pricePerDay

alert('The total cost of the movies is: ' + totalPaid);

var rateGoogle = 400;
var rateAmazon = 380;
var rateFacebook = 350;

var googleHours = 6;
var amazonHours = 4;
var facebookHours = 10;

var weekPay = (rateGoogle * googleHours) + (rateAmazon * amazonHours) + (rateFacebook * facebookHours)

alert('Your pay for the week is: ' + weekPay);

var classOpen = true;
var scheduleOpen = true;
var eligibleStudent = classOpen + scheduleOpen;
var numberOfStudents;

confirm('Let\'s find out if you can take our class? Are you available Tuesday and Thursday?');

prompt('Awesome! How many people are in the class right now?');

confirm("Great news. Look's like we can get you in. Now that that is out of the way, I think I can even get you a good deal on our newest product. What say you?");

var isPremiumMember = true;
var minItemPurchased = true;
var offerExpired = false;
var offerAvailable = (isPremiumMember && offerExpired) || (offerExpired && minItemPurchased);

prompt('Sounds good. So how many products have you purchased from us so far?');

confirm('Good deal. And are you a Premium Member with us?');

confirm('Alright. So everything looks good here. Finally, I just have one more question. This offer actually expires tomorrow, so is it today right now?');



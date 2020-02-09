/*// == : check the value
//  === : check value and data type

var x = 20;
var y = '20';
if(x === y)
{
    console.log('both are same');
}
else{
    console.log('both are not same');
}*/

var firstName = 'john';
var age = 14;

// ternary operator
// age <= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice');


// switch statement
var job = 'instructor1';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        // break;
    case 'driver':
        console.log(firstName + ' drives an uber.');
        // break;
    case 'designer':
        console.log(firstName + ' desings beautiful website.');
        break;
    default:
        console.log(firstName + ' does  something else.');
}

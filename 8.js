// function tipsCalculator(bill){
//     var percentage;
//     if(bill < 50){
//         percentage = .2;
//     }
//     else if(bill >= 50 && bill < 200){
//         percentage = .15;
//     }
//     else{
//         percentage = .1;
//     }
// return percentage * bill;

// }

// var bills = [124, 48, 268];
// var tips = [tipsCalculator(bills[0]),
// [tipsCalculator(bills[1])],
// [tipsCalculator(bills[2])]];

// var finalValue = [bills[0] + tips[0],
// bills[1] + tips[1],
// bills[2] + tips[2]];


// // defining Object

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// };

// console.log(john.firstName);
// var x = 'birthYear';
// console.log(john);

// // changing the value of an object keys
// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);


// //  New object syntax

// var jane = new Object();
// jane.firstName = 'Jane';

// console.log( tips, finalValue);

//   */*************** */
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    calcAge: function(){
    this.age = 2018 - this.birthYear;
    }
};
john.calcAge();
console.log(john);




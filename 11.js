// var john ={
//  bills: [124,48,268,180,42],
// calcTips: function(){
//     var percentage;
//     for(var i=0; i< this.bills.length; i++){
//         if(this.bills < 50){
//                     percentage = .2;
//                 }
//                 else if(this.bills >= 50 && this.bills < 200){
//                     percentage = .15;
//                 }
//                 else{
//                     percentage = .1;
//                 }
//     }
// }

// }
// john.calcTips();
// console.log(john);



// function calculateAge(year){
//     console.log(2016-year);
// }
// calculateAge(2010);
// var retirement = function(year){
//     console.log(65-(2016-year));
// }
// // retirement(1990);

// retirement(1995);
// var retirement = function(year){
//     console.log(65-(2016-year));
// }
// console.log(age);
// var age = 23;
// function foo(){
//     // console.log(age);
//     var age =65;
//     console.log(age);
// }
// foo();
// console.log(age);


var john = {
    name: 'John',
    dob: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2016-this.dob);
        function innerFunction(){
            console.log(this);

        }
        innerFunction()
    }
}
john.calculateAge();
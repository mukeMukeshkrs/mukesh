// defining  a function

function funName(){
    console.log("Hello world");
}
funName();

function calculateAge(birthYear){ 
    console.log(2018 - birthYear);
    // "return" will take out the value outside which is generated within function
    // it will silply, return 
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
console.log(ageJohn);


// reusing the function
function calculateAge(birthYear){
    return 2018 - birthYear;
 }
    var ageJohn = calculateAge(1990);
    var ageMike = calculateAge(1994);
    var ageJane = calculateAge(1998);
    console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    
    if (retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years.'); 
    }
    else{
        console.log(firstName + ' is already retired. ');
    }
}

yearsUntilRetirement(1990,'john');
yearsUntilRetirement(1989, 'mike');
yearsUntilRetirement(1995, 'jany');


// function expression 
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'driver':
            return firstName + ' drives a cab in london';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('driver', 'john'));
console.log(whatDoYouDo('designer', 'jane'));
console.log(whatDoYouDo('retired', 'mark'));



// initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[0]);
console.log(names.length);


// mutate array
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);
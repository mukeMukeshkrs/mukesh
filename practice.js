var johnMass ;
var johnHeight;
var markMass;
var markHeight;
var johnBMI;
var markBMI;
johnBMI = johnMass / (johnHeight * johnHeight);
markBMI = markMass / (markHeight * markHeight);
console.log(johnBMI, markBMI);


var BMI = johnBMI > markBMI;
console.log("is  mark's BMI is higher than john' BMI? " +BMI);
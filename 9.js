var mark = {
    firstName: 'Mark',
    mass: 50,
    height: 5.4,
calcBmi: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
}
}
var john = {
    firstName: 'John',
    mass:  60,
    height: 5.5,
    calcBmi: function(){
        this.bmi = this.mass / (this.height * this.height);
    }   
}
mark.calcBmi();
console.log(mark);


if( john.calcBmi() > mark.calcBmi()) {
    console.log(john.fullName + 'has a higher BMI of '+ john.bmi);

}
else if( mark.bmi > john.bmi){
    console.log(mark.fullName + 'has a higher BMI of '+ mark.bmi);

}
else{
    console.log(mark.fullName + 'has a higher BMI of '+ mark.bmi);
}
// truthy and falsy values and equality operator
var height ;
height = 20;
if (height){
    console.log("defined");
}
else{
    console.log("not defined");
}

if (height || height === 0){
    console.log('variable is defined');
}
else{
    console.log('variable is not defined');
}
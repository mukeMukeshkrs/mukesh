var johnTeam;
var mikeTeam;
var maryTeam;
var average1 = (116 + 150 + 94) / 3;
var average2 = (116 + 94 + 120) / 3;
var average3 = (97 + 134 + 105) / 3;
console.log('johnTeam average is ' + average1 );
console.log('mikeTeam average is ' + average2 );
console.log('maryTeam average is ' + average3 );

if(average1 > average2 && average3){
    console.log("johnTeam is winner");
}
else if(average2 > average1 && average3){ 
    console.log("mikeTeam is winner");
}
else if(average3 > average1 && average2){ 
    console.log("maryTeam is winner");
}
else {
    console.log("draw");
}



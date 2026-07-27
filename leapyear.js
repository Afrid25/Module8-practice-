// Take a year variable and check whether it is a leap year (hint: year % 4 === 0).

let year = 2024; 

if(year % 4 == 0 || year % 100 == 0 || year % 400 == 0){
    console.log("Leap Year ");

}
else {
    console.log('Its not leap year');
}
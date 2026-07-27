// Using a bmi variable, determine the category — Underweight, Normal, Overweight, Obese (use if-else if).

let weight = 57;
height = 1.74;

 bmi = (weight / (height * height)) ; 

if(bmi < 18.5){
    console.log('Underweight');
}
else if (bmi >= 18.5 && bmi<=24.9){
    console.log('Normal');
}

else if(bmi>= 25.00 && bmi<=29.9){
    console.log('Overweight');
}

else if(bmi>30){
    console.log('obese');
}
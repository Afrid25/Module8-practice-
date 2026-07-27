// Build a grading system using a marks variable (A+, A, B, C, F) — it must have at least 5 condition branches.

let marks = 65;

if (marks >= 90) {
    console.log('Golden A+');
}
else if (marks >= 80) {
    console.log('A+');

}
else if (marks >= 70){
    console.log('A');
}
else if (marks >= 60){
    console.log('A-');
}
else if (marks >= 50){
    console.log('B');
}
else if (marks >= 40){
    console.log('C');
}
else if (marks < 33){
    console.log('Fail');
}
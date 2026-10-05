// -----------IF COMDITIONS-------------

//  1.Check whether a given number is a 3-digit number or not.
// let n=234566
// if(n>=100 && n<=999){
//     console.log(" given number is a 3-digit number");
// }
// else{
//         console.log(" given number is a not  3-digit number");

// }

// 2.Check whether a given number is divisible by both 3 and 5 or not.
// let n=9876
// if(n%3==0 && n%5==0){
//     console.log("given number is divisible by both 3 and 5");

// }
// else{
//     console.log("given number is divisible by both are not 3 and 5");

// }
// 3.Check whether a given triangle is a valid triangle or not.
//  hint :The sum of any two sides should be greater than the third side.

// let a=2
// let b=8
// let c=7
// let sum=a+b
// if(sum>c){
//     console.log("greater than the third side");

// }
// else{
//     console.log("not a greater not a traiangle");

// }

// 4.Check whether a given number is a multiple of 10 or not.
// let n=9
// if(n%10==0){
//     console.log(" multiple of 10");

// }
// else{
//     console.log("not  multiple of 10");
// }

// ---------------------
// if-elif-else
// -----------------------
// 1.Check the type of triangle based on its sides.
// Equilateral, Isosceles, or Scalene.
// let a=20
// let b=60
// let c=67

// if(a==b==c){
//     console.log("Equilateral");

// }
// else if(a==b  || b==c || c==a ){
//     console.log("Isosceles");
// }
// else{
//     console.log("scalence");
// }

//  2.Calculate the electricity bill based on units consumed.
//  0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit
// let n=900
// if(n>=0 && n<=100){
//     console.log("₹2/unit,");

// }
// else if(n>=101 && n<=200){
//      console.log("₹3/unit,");
// }
// else if(n>=201 && n<=300){
//      console.log("₹5/unit,");
// }
// else{
//     console.log( "avbove is ₹7/unit");

// }

// 3.Display the age category.
// Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.

// let n=67;
// if(n<=13){
//     console.log("child");

// }
// else if(n>13 && n<=19){
//     console.log("teenagers");
// }
// else if(n>20 && n<=59){
//     console.log("adult");
// }
// else{
//     console.log("senior");

// }

// 4.Calculate the discount based on shopping amount.
// Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.
// let n=5000;
// if(n<1000){
//     console.log("no descount");
// }
// else if(n<1000 && n>4999){
//     console.log("10% descount");

// }
// else if(n<5000 && n>9999){
//     console.log("20% descount");

// }
// else{
//     console.log("30%descount");

// }

// 5. Display the season based on the month number.
// 3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.
// n=5;
// if(n<3 && n>5){
//     console.log("spring");

// }
// else if(n<6 && n<8){
//     console.log("summer");

// }
// else if(n<9 && n<11){
//     console.log("autum");

// }
// else{
//     console.log("winter");

// }

// 6.Check whether a given year is a Leap Year or not.
// Condition 1: year % 400 == 0
// Condition 2: year % 4 == 0 and year % 100 != 0

// let n=2002

// if(n%400==0 ||(n%4==0 && n%100!==0)){
//     console.log("loop year");
// }
// else {
//     console.log("not a loop year");

// }

// 1.Check whether a person is eligible to donate blood.
// Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.
// let n=55;
// let weight=0
// if(n<=18 && n>=90){
//     if(weight>50){
//         console.log("elible");

//     }
//      else{
//         console.log("not eliganle");
//     }
// }
//  else{
//         console.log("not");
//     }

//  2. Display the grade based on average only if the
//  student has passed in all 4 subjects

// let n1=85;
// let n2=50;
// let n3=48;
// let n4=38;
// if(n1>=35 && n2>=35 && n3>=35 && n4>=35){
// let avg=n1+n2+n3+n4/4
//        if (avg >= 90) {
//         console.log("Grade A");
//     } else if (avg >= 75) {
//         console.log("Grade B");
//     } else if (avg >= 60) {
//         console.log("Grade C");
//     } else if (avg >= 50) {
//         console.log("Grade D");
//     } else {
//         console.log("Grade E");
//     }
// }
// else{
//     console.log("fail");

// }

// Check whether a student is eligible for a scholarship.
// Age should be above 18. If eligible by age, score should be above 86.

// 3.Check whether a student is eligible for a scholarship.
// Age should be above 18. If eligible by age, score should be above 86.
// let age=40;
// let score=67;
// if(age>=18){
//     if(score>=86){
//         console.log("eligible ");
//     }
//     else{
//          console.log(" noteligible ");

//     }
// }
// else{
//          console.log(" noteligible ");

//     }

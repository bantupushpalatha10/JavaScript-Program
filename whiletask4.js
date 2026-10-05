// ----------while---------


// Find the sum of digits in a given number.
// Example: 738 → 7 + 3 + 8 = 18
// let n=738
// sum=0
// while(n>0){
//     s=n%10
//     sum=sum+s
//     n=parseInt(n/10);
// }
//  console.log(sum);


// Find the average of digits in a given number.
// Example: 624 → (6 + 2 + 4) / 3 = 4
// let n=624;
// let sum=0;
// let count=0;
// while(n>0){
//     s=n%10;
//     sum=sum+s;
//     count=count+1
//     n=parseInt(n/10)
// }
// avg=sum/count
// console.log(avg);


// Find the sum of the first digit and the last digit of a given number.
// Example: 936 → 9 + 6 = 15
// let n=936;

// let last=n%10;
// let first=n;

// while (first>=10) {
//     first=parseInt(first/10);
// }

// let sum=first+last;

// console.log(sum);


// Find the difference between the largest digit and the smallest digit in a given number.
// Example: 58321 → Largest = 8, Smallest = 1 → Difference = 8 - 1 = 7


// let n=5678921

// let large=0;
// let small=9;

// while (n>0) {
//     let digit = n%10

//     if (digit>large) {
//         large=digit
//     }

//     if (digit<small) {
//         small=digit
//     }

//     n=parseInt(n/10);
// }

// console.log(large-small);


// Find the average of digits that are divisible by 5 in a given number.
// Example: 12575 → Divisible by 5 digits:
//  5, 5, 5 → Average  = (5 + 5 + 5) / 3 = 5

// let n=12575;
// let sum=0;
// let count=0;
// while(n>0){
//     d=n%10
//     if(n%5==0){
//         sum=sum+d
//         count++
//         n=parseInt(n/10)
//     }
// }
// avg=sum/count
// console.log(avg);


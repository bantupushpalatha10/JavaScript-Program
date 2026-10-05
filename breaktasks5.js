
//---------------- BREAK AND CONTINUE----------------

// Find the first even digit from the left in 753914286.
// let n=7539148;
// while(n>0){
//     id=n%10;
//     if(n%2==0){
//         console.log(id);
//         break
        
//     }
//      n=parseInt(n/10)
// }

// Find the first prime number between 50 and 100.
// let n=100;

// for(let i=50;i<=n;i++){
//     let count=0;

//     for (let j=1;j<=i;j++) {
//     if(i%j==0){
//         count++
//     }
// }
//     if(count===2){
//         console.log(i);
//         break
//     }
// }

// Find the first number whose digit sum is 10.
// let sum=0;
//  for (let i=1;i<=100;i++) {
//     sum=parseInt(i/10)+i%10;
//     if(sum==10){
//         console.log(i);
//         break
        
//     }
//   }
    // Find the first number with exactly 3 divisors between 1 and 100.

// for(let i=1;i<=100;i++){
//     let count=0;
//     for(j=1;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==3){
//         console.log(i);
//         break;
        
//     }
// }

// Stop when 3 consecutive odd numbers occur between 1 and 50.
//   let count=0
// for(let i=1;i<=50;i++){
  
//     if(i%2!=0){
//         count++
//     }
//     else{
//         count=0;
//     }
//      if(count==3){
//         console.log(i-4,i-2,i);
//         break;
        
//     }

// }


// for(let i=10;i<=50;i++){
// let temp=i;
// let rev=0;
//     while(temp>0){
//         id=temp%10;
//         rev=rev*10+id
//         temp=parseInt(temp/10);
//     }
//     if(i==rev){
//         console.log(i);
//         break;
        
//     }
// }


// Find the first perfect number between 1 and 1000.
// for(let i=1;i<=1000;i++){
//     let sum=0;
//     for(j=1;j<i;j++){
//         if(i%j===0){
//             sum=sum+i
//         }
//     }
//     if(sum===i){
//         console.log(i);
//         break;
        
//     }
// }
// Print the first 5 even numbers.
// let n=10
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         console.log(i);
//         while(n<=10){
// break;
//         }
            
//         }
//     }

// Print th first 5 prime numbers

// let count=0;
// let num=2;

// while (count<5) {
//     let factors=0;

//     for (let i=1; i<=num;i++) {
//         if (num%i==0) {
//             factors++;
//         }

//         if (factors>2) {
//             break;
//         }
//     }

//     if (factors==2) {
//         console.log(num);
//         count++;
//     }

//     num++;
// }
// Print the first 3 numbers divisible by 7.

// let count=0
// let n=100;
// for(let i=1;i<=n;i++){
//     if(i%7==0){
//             console.log(i);
//                count++
          
//         }
//         if(count==3){
//               break;
//         }
// }

// continue
// Print 1–30, skipping even numbers.
// for(let i=1;i<=30;i++){
//     if(i%2==0){
//         continue;
//     }
//     console.log(i);
    
// }
// Print 1–40, skipping multiples of 4.
// for(let i=1;i<=40;i++){
//     if(i%4==0){
//         continue
//     }
//     console.log(i);
    
// }

// Print 1–30, skipping numbers from 10–20.
// for(let i=1;i<=30;i++){
//     if(i>=10 && i<=20){
//         continue;
//     }
//     console.log(i);
    
// }

// Print 1–50, skipping multiples of 3.
// for(let i=1;i<=50;i++){
//     if(i%2!=0){
//         continue;
//     }
//     console.log(i);
    
// }
// Extract 502304, skipping digit 0.

// let n=502304;
// while(n>0){
//     id=n%10
//     n=parseInt(n/10)
//     if(id==0){
//          continue
//     }
//     console.log(id);
// }

// Extract 5832461, printing only even digits

// let n=1432578;
// while(n>0){
//      id=n%10;
//       n=parseInt(n/10)
//        if(id%2!=0){  
//         continue;

//     }

//     console.log(id);
    
// }

// Extract 1432578, skipping odd digits.
// let n=1432578;
// while(n>0){
//      id=n%10;
//       n=parseInt(n/10)
//        if(id%2==0){  
//         continue;

//     }

//     console.log(id);
    
// }

// Print 1–200, skipping multiples of 3 or 5.

// for(let i=1;i<=200;i++){
//     if(i%3==0 || i%5==0){
//         continue;
//     }
//     console.log(i);
    
// }

// Print 1–500, skipping numbers with odd digit sum.
// for (let i =1;i<=500;i++) {
//     let n=i;
//     let sum=0;

//     while (n > 0) {
//         let digit = n % 10;
//         sum = sum + digit;
//         n = parseInt(n / 10);
//     }

//     if (sum % 2 != 0) {
//         continue;
//     }

//     console.log(i);
// // }

// Print 1–500, skipping numbers containing digit 0.

// 
// for (let i=1;i<=500;i++) {
//     let n=i;
//     while(n>0) {
//         let id=n%10;
//         n=parseInt(n/10);
//         if(id==0) {
//             break;
//         }
//     }
//     if(id==0) {
//         continue;
//     }
//     console.log(i);
// }
    

// brack and continue
// Print 1–50, skip multiples of 3, stop at 40.

// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue;
//     }
//     if(i==40){
//         break;
//     }
//     console.log(i);
    
// }
// Print odd numbers, skip evens, stop at the first multiple of 7.
// for(let i=1;i<=100;i++){
//     if(i%2!=0){
//         continue;
//     }
//     if(i%7==0){
//         break;
//     }
//     console.log(i);
// }
// Extract 5830421, skip odd digits, stop at 0.
// let n=5830421;
// while(n>0){
//     id=n%10;
//     n=parseInt(n/10);
//     if(id%2!=0){
//         continue;
//     }
     
//     if(id==0){
//         break;
//     }
//     console.log(id);
// }

// Extract 8325147, print digits until 5.
// let n=8325147
// while(n>0){
//     id=n%10
//     n=parseInt(n/10)
//     if(id==5){
//         break;
//     }
//     console.log(id);
    
// }
// Search from 51, skip non-multiples of 9, stop at the first multiple of 9

// for(i=1;i<=100;i++){
//     if(i==51){
//         break;
//     }
//     if(i%9==0){
//         continue;
//     }
//     console.log(i);
    
// }

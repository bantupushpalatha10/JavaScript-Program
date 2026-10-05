// -------------Arrow function-----------

// 1.Arrow function without input and without return
// 1. Print even numbers using for loop
// let even=()=>{
//     for(let i=1;i<=10;i++){
//         if(i%2==0){
//             console.log(i);
            
//         }
//     }
// }
// even()

//2. Print numbers divisible by 3 range 10 to 50
// let divi=()=>{
//     for(let let i=10;i<=50;i++){
//         if(i%3==0)
//             console.log(i);
            
//     }
// }
// divi()

//  3.check given number is perfect number or not

// let prefect=()=>{
//     let n=6
//     let sum=0
//     for(let let i=1;i<n;i++){
//         if(n%i==0){
//             sum=sum+i
//         }
//     }
//     if(sum==n){
//         console.log("perfect number")
//     }else{
//         console.log("not a perfect number")
//     }
// }
// prefect()

// 4.check given three sides can form a triangle or not

// let triangle=()=>{
//     let s1=10
//     let s2=10
//     let s3=20
//     if(s1+s2>s3 && s2+s3>s1 && s1+s3>s2){
//         console.log("valid triangle")
//     }else{
//         console.log("Invalid triangle")
//     }
// }
// triangle()

// 5. Print positive numbers
// let positiveNumbers = () => {
//     for (let i = -3; i <= 3; i++) {
//         if (i > 0) {
//             console.log(i);
//         }
//     }
// };
// positiveNumbers();


//2. Arrow function with input and without return

// 1. Check positive or negative
// let value=(n)=>{
//     if(n>0){
//         console.log("postive");
//     }
//     else{
//         console.log("negitive");   
//     }
// }
// value(5)

// 3.find smallest digit in a number
// let min=(n)=>{
//     let min=9
//     while(n>0){
//         if(n%10<min){
//             min=n%10
//         }
//         n=parseInt(n/10)
//     }
//     console.log(min)
// }
// min(64386)


// 4.multipy first and last digit of a number

// let multi=(n)=>{
//     let temp=n
//     let rev=0
//     while(n>0){
//         rev=rev*10+(n%10)
//         n=parseInt(n/10)
//     }
//     a=rev%10
//     b=temp%10
//     console.log(a*b)
// }

// multi(463885)


//5. Print multiples of a number
// let multiples=(n)=> {
//     for (let i=1;i<=10;i++) {
//         let value=n*i;
//         if (value%2===0) {
//             console.log(value+"is Even");
//         } else {
//             console.log(value+"is Odd");
//         }
//     }
//     console.log("Multiplication completed");
// };

// multiples(3);


//3. Arrow function without input and with return4

// 1.Find the largest and smallest digit and calculate their difference.
//  let diff=()=>{
//     let n=4537568
//     let min=9
//     let max=0
//     while(n>0){
//         if(n%10>max){
//             max=n%10
//         }
//         if(n%10<min){
//           min=n%10
//         }
//         n=parseInt(n/10)
//     }
//     return (min-max)

//  }
//  console.log(diff())


// 2.count of zeros in a given number

// let zero=()=>{
//     let n=608043050
//     let count=0
//     while(n>0){
//         a=n%10
//         if(a==0){
//             count++
//         }
//         n=parseInt(n/10)
//     }
//     return count
// }
// console.log(zero())

// 3.mutlipleof two numbers
// const multiply=()=>{
//     let a=5;
//     let b=4;
//     return (a*b);
// };

// console.log(multiply());


//4. sum of number in the range of 10,20

// const sumNumbers=()=>{
//     let sum=0;
//     for (let i=10;i<=20;i++) {
//         sum=sum+i;
//     }
//     return (sum);
// };
// console.log(sumNumbers());


//5. positive/negative message
// const checkNumber=()=>{
//     let num=-10;
//     if (num>0) {
//         return("Positive");
//     } else if (num<0) {
//         return("Negative");
//     } else {
//         return("Zero");
//     }
// };
// console.log(checkNumber());


//  4.Arrow function with input and with return


// 1.check given number is palindrome or not

// let palindrome=(n)=>{
//     let temp=n
//     let rev=0
//     while(n>0){
//         rev=rev*10+(n%10)
//         n=parseInt(n/10)
//     }
//     if(temp==rev){
//         return ("palindrome")
//     }
// }
// console.log(palindrome(654794))




// 2.find factors of given number

// let fact=(n)=>{
//     let res=""
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             res=res+i+" "
//         }
//     }
//     return (res)
// }
// console.log(fact(6))



// 3.skip even numbers in the given range
// let numbers=(a,b)=>{
//     let res=""
//     for(let i=a;i<=b;i++){
//         if(i%2==0){
//             continue
//         }
//         res=res+i+" "
//     }
//     return (res)
// }
// console.log(numbers(10,30))


// 4.Reverse a number
// const reverseNumber=(num)=>{
//     let reverse=0;
//     while(num>0){
//         let digit=num%10;
//         reverse=reverse*10+digit;
//         num=Math.floor(num / 10);
//     }
//     return (reverse);
// };
// console.log(reverseNumber(12345));

// 5.find factorial in the range if 1 to num
// const factorial=(num)=>{
//     let fact=1;

//     for (let i=1;i<=num;i++) {
//         fact=fact*i;
//     }

//     return (fact);
// };

// console.log(factorial(5));
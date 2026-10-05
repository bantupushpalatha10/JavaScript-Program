// --------------Annonymous function------------

// 1.Annonymous function without input and without return
// even numbers in range of 20 to 10
// let even=function(){
//     let n=20;
//     for(i=10;i<=n;i++){
//         if(i%2==0){
//             console.log(i);
            
//         }
//     }
// }
// even()

// 2.Print prime digits in a number
// let prime=function(){
// let n=163526
// while(n>0){
//  a=n%10
// let count=0
//  for(let i=1;i<=a;i++){
//         if(a%i==0){
//             count++
//         }
//     }
//     if(count==2){
//     console.log(a)
//     }
//     n=parseInt(n/10)
    
// }
// }
// prime()


//3.Find the product of all digits except zero.
// let product=function(){
//     let n=10203050
//     let product=1
//     while(n>0){
//         id=n%10
//         if(id==0){
//             n=parseInt(n/10)
//             continue
//         }
//         product=product*id
//          n=parseInt(n/10)
//     }
//     console.log(product); 
// }
// product()

//4.Reverse the digits of a given number.

// let reverse=function(){
// let n=3451
// let rev=0
// while(n>0){
//     a=n%10
//     rev=rev*10+a
//     n=parseInt(n/10)
// }
// console.log(rev)
// }
// reverse()


// 5.Sum of digits
// let sumDigits = function() {
//     let n = 12345;
//     let sum = 0;

//     while (n > 0) {
//         let digit = n % 10;
//         sum = sum + digit;
//         n = parseInt(n / 10);
//     }

//     console.log("Sum:", sum);
// };

// sumDigits();


// 2.Annonymous function with input and without return---------


//1. check even or odd
// let checkNum=function(n) {
//     if (n%2===0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// };

// checkNum(10);

//2. factorial of number
// let facts=function(n){
//     let fact=1;
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     console.log(fact);
// }
// facts(5)

// 3.Find sum of numbers
// let sumNumbers=function(n) {
//     let sum=0;
//     for (let i=1;i<=n;i++) {
//         sum=sum+i;
//     }
//     console.log("Sum:",sum);
// };
// sumNumbers(10);


// 4.find maximum number in range 1 to n that is divisible by 7

// let max=function(a,b){
// let max=0
// for(let i=a;i<=b;i++){
//     if(i%7==0){
//         if(i>max){
//             max=i
//         }
//     }
// }
// console.log(max)
// }
// max(50,100)


// 5)product of digits in a number

// let product=function(n){
//     product=1
//     while(n>0){
//         product=product*(n%10)
//         n=parseInt(n/10)
//     }
//     console.log(product)
// }
// product(123)


//  Annonymous function without input and with return
// 1.Return sum of digits
// let digitSum=function() {
//     let n=12345;
//     let sum=0;
//     while (n>0) {
//         sum=sum+(n%10);
//         n=parseInt(n/10);
//     }
//     return (sum);
// };
// console.log(digitSum());

// 2.check given number is even or odd

// let result=function(){
//     let n=56
//     if(n%2==0){
//         return "even"
//     }else{
//         return "odd"
//     }
// }
// console.log(result())


// 3.count the digits in a number which are divisible by 3
// let digit=function(){
//     let n=3126397936
//     let count=0
//     while(n>0){
//         a=n%10
//         if(a%3==0){
//             count++
//         }
//         n=parseInt(n/10)
//     }
//     return count
// }
// console.log(digit())

//4. Return largest number
// let largest=function() {
//     let a=25;
//     let b=40;
//     if (a>b) {
//         return a;
//     } else {
//         return (b);
//     }
// };
// console.log(largest());


// 5.Return reverse of a number
// let reverse=function(){
//     let n=12345;
//     let rev=0;

//     while(n>0){
//         let digit=n%10;
//         rev=rev*10+digit;
//         n=parseInt(n/10);
//     }

//     return (rev);
// };

// console.log(reverse());



// Annonymous function with input and with return------
// 1.skip the numbers that are divisible by 2,5,6 in given range 

// let result=function(a,b){
//     let res=""
//     for(let i=a;i<=b;i++){
//         if(i%2==0 || i%5==0 || i%6==0 ){
//             continue
//         }
//         res=res+i+" "
//     }
//     return res
// }
// console.log(result(10,20))


// 2.check given number is palindrome or not

// let palindrome=function(n){
//     let temp=n
//     let rev=0
//     while(n>0){
//         rev=rev*10+(n%10)
//         n=parseInt(n/10)
//     }
//     if(temp==rev){
//         return temp+" is palindrome"
//     }else{
//         return temp+" is not palindrome"
//     }
// }
// console.log(palindrome(1231))


// 3. add two numbers
// let add=function(a,b){
//     return a+b;
// }
// console.log(add(10,20));

// 4. Check even or odd
// let checkEven = function(n) {
//     if (n % 2 === 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// };

// console.log(checkEven(12));

//5.pirnt first and last digit of a given number

// let digit=function(n){
//     let temp=n
//     let rev=0
//     while(n>0){
//         rev=rev*10+(n%10)
//         n=parseInt(n/10)
//     }
//     a=rev%10
//     b=temp%10
//     return (a+","+b)
// }
// console.log(digit(2356))

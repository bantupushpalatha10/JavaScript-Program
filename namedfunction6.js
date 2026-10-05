// ---------------NAMED FUNCTIONS-----------------------


//  1. Named Function – Without Input & Without Return
// 1.Count the even numbers from 10 to 50.
// function even(){
//     let count=0;
//     for(i=10;i<=50;i++){
//         if(i%2==0){
//             count++
//         }
//     }
//     console.log(count);
    
// }
// even();

// 2.Count the odd numbers from 1 to 70.
// function odd(){
//     let count=0;
//     for(i=1;i<=70;i++){
//         if(i%2!=0){
//             count++
//         }
//     }
//     console.log(count);
// }
// odd();


//3.Print the squares of numbers from 10 to 20
// function squre(){
//     let n=20;
//     for(i=10;i<=n;i++){
//         console.log(i*i);   
//     }
// }
// squre();

// 4.Print the cubes of numbers from 1 to 7.
// function cube(){
//     let n=5;
//     for(i=1;i<=n;i++){
//         console.log(i**i);
        
//     }
// }
// cube();

// 5. Print the first 10 multiples of 3
// function tree(){
//     let n=3;
//     for(i=1;i<=3;i++){
//         console.log(n*i);
        
//     }
// }
// tree();
// 6.Find the largest of tree numbers.
// function two(){
//     let a=30;
//     let b=60;
//     let c=50;
//     if(a>b && b>a){
//         console.log("a is grater");
//     }
//     else if(b>a && b>c){
//         console.log("b is greater"); 
//     }
//     else{
//         console.log("c is greter");
//     }
// }
// two();

// 7. Find the sum of even numbers from 1 to 60.
// function sumeven(){
//     let sum=0;
//     for(i=1;i<=60;i++){
//         if(i%2==0){
//             sum=sum+i
//         }
//     }
//     console.log(sum);
    
// }
// sumeven()
//8. Print numbers divisible by 5 from 1 to 50
// function divisible(){
//     let n=50;
//     for(i=1;i<=n;i++){
//         if(i%5==0){
//             console.log(i);
            
//         }
//     }
// }
// divisible();


// 9. Find the sum of odd numbers from 1 to 50.
// function sumodd(){
//     let n=50;
//     let sum=0
//     for(i=1;i<=n;i++){
//         if(i%2!=0){
//             sum=sum+i
//         }   
//     }
//     console.log(sum);
    
// }
// sumodd();

// 10.Reverse the digits of a given number
// function revs(){
//     let n=64397
//     let rev=0
//     while(n>0){
//         a=n%10
//         rev=rev*10+a
//         n=parseInt(n/10)
//     }
//     console.log(rev);
// }
// revs();

//11. average of numbers from 1 to N
// function avg(){
//     let n=4
//     let sum=0
//     let count=0
//     for(i=1;i<=n;i++){
//         sum=sum+i
//         count++
//     }
//     console.log(sum/count);
// }
// avg()

// 12.um of odd digits in given number 8524163
// function odd(){
//     let n=8524163;
//     let sum=0
//     while(n>0){
//         id=n%10
//         if(id%2!=0){
//             sum=sum+id
//         }
//         n=parseInt(n/10)
//     }
//     console.log(sum);   
// }
// odd()
// 13.find number of zeros in given number 7080605100
// function zeros(){
//     let n=7080605100
//     let count=0
//     while(n>0){
//         id=n%10
//         if(id%10==0){
//             count++
//         }
//         n=parseInt(n/10)
//     }
//     console.log(count);
// }
// zeros()
//14.skip multiples of 6 in range of 1 to 50
// function range(){
//     for(let i=1;i<=50;i++){
//         if(i%6==0){
//             continue
//         }else{
//             console.log(i);
            
//         }
//     }
// }
// range()
// 15.product of digits in given number 342
// function product(){
// let n=342
// let mul=1
// while(n>0){
//     mul=mul*(n%10)
//     n=parseInt(n/10)
// }
// console.log(mul)
// }
// product()



// Named functions with input and without return---------------
// 1.Find the largest digit in a given number
// function high(n){
//     let max=0
//     while(n>0){
//         if(n%10>max){
//            max=n%10
//         }
//           n=parseInt(n/10)
//     }
//     console.log(max);
// }
// high(87445)

// 2.find count even digits in a given number 65434267
// function even(){
//     let count=0
//     let n=65434267
//     while(n>0){
//         id=n%10;
//         if(id%2==0){
//             count++
//         }
//         n=parseInt(n/10)
//     }
//     console.log(count);
// }
// even()

// 3.sum of odd digits in given number 8524163
// function odd(n){
//     let sum=0
//     while(n>0){
//         id=n%10
//         if(id%2!=0){
//             sum=sum+id
//         }
//         n=parseInt(n/10)
//     }
//     console.log(sum);
// }
// odd(8524163)

// 4.Find the last digit of a given number.
// function last(n){
//     while(n>0){
//         console.log(n%10);
//         break
//     }
// }
// last(56789876)


// 5.Find the sum of all digits in a given number.
// function sumof(n){
//     let sum=0
//     while(n>0){
//     sum=sum+n%10
//     n=parseInt(n/10)
//     }
//     console.log(sum);
    
// }
// sumof(345678)


// 6.Find the difference between the sum of even digits and the sum of odd digits in a number.

// function diff(n){
// let even_sum=0
// let odd_sum=0
// while(n>0){
//     a=n%10
//     if(a%2==0){
//         even_sum=even_sum+a
//     }else{
//         odd_sum=odd_sum+a
//     }
//     n=parseInt(n/10)
// }
// console.log(even_sum-odd_sum)
// }
// diff(98765)


// 7.Print all numbers between 1 and 100 that are divisible by 3 but not by 5.

// function num(a,b){
// for(let i=a;i<=b;i++){
//     if(i%3==0 && i%5!=0){
//         console.log(i)
//     }
    
// }
// }
// num(1,100)

// 8.Print numbers from 1 to 50, skipping even numbers.

// function even(a,b){
//     for(let i=a;i<=b;i++){
//         if(i%2==0){
//             continue
//         }
//         console.log(i)
//     }
// }
// even(1,50)

//  9.print first 10 prime numbers between 100 to 200
// function prime_num(a,b){
// let c=0
// for(i=a;i<=b;i++){
//     let n=i
//     let count=0
//     for(j=1;j<=n;j++){
//         if(n%j==0){
//             count++
//         }
//     }
//     if(count==2){
//         c++
//         console.log(n)
//         if(c==10){
//             break
//         }
//     }

// }
// }
// prime_num(100,200)


// 10.Check whether a number is a strong number.

// function strong(n){
// let temp=n
// let sum=0
// while(n>0){
//     a=n%10
//     res=1
//     for(let i=1;i<=a;i++){
//         res=res*i
//     }
//     n=parseInt(n/10)
//     sum=sum+res
// }
// if(temp==sum){
//     console.log("strong number")
// }
// }
// strong(145)

// 11.Print all numbers between 1 and 100 that are divisible by 3 but not by 5.

// function num(a,b){
// for(let i=a;i<=b;i++){
//     if(i%3==0 && i%5!=0){
//         console.log(i)
//     }
    
// }
// }
// num(1,100)


// 12. Return the largest of three numbers.
// function larof3(a, b, c) {
//     if (a > b && a > c) {
//         return "A is largest";
//     } else if (b > a && b > c) {
//         return "B is largest";
//     } else {
//         return "C is largest";
//     }
// }
// console.log(larof3(39, 45, 25));




// 13. Return the smallest of three numbers.
// function smallof3(a,b,c) {
//     if (a<b && a<c) {
//         return "A is smallest";
//     } else if (b<a && b<c) {
//         return "B is smallest";
//     } else {
//         return "C is smallest";
//     }
// }
// console.log(smallof3(40, 15, 23));

// 14.Return the sum of odd numbers within a given range.
// function sumodd(a,b) {
//     let sum=0;
//     for (let i=a;i<=b;i++) {
//         if (i%2!=0) {
//             sum=sum+i
//         }
//     }
//     return sum;
// }
// console.log(sumodd(1, 20));




// 15. Return the product of digits of a given number.
// function productdigits(a) {
//     let product=1;
//     while (a!=0) {
//         let ld = a%10;
//         product=product*ld;
//         a=parseInt(a/10);
//     }
//     return product;
// }
// console.log(productdigits(123));




//  ----Named functions without input and with return-----



// 1.Find the first digit of a given number.
// function first(){
//     let n=678987
//     let num=0
//     while(n>0){
//         id=n%10
//         num=num*10+id
//         n=parseInt(n/10)
//     }
//     return num%10
// }
// console.log(first());


// 2.sum of numbers from 1 to N
// function sum(){
//     let sum=0
//     let n=5
//     for(i=1;i<=n;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log(sum());

// 3.Find the sum of all factors of a number excluding the number itself.

// function sumFact(){
// let n=6
// let sum=0
// for(let i=1;i<=n;i++){
//     if(n%i==0){
//         sum=sum+i
//     }
// }
// return sum
// }
// console.log(sumFact())


// 4.Find the smallest digit in a given number.
// function min(){
// let n=74556
// let min=9
// while(n>0){
//     if(n%10<min){
//         min=n%10
//     }
//     n=parseInt(n/10)
// }
// return (min)
// }
// console.log(min())


// 5.product of digits in given number 564
// function product(){
// let n=564
// let mul=1
// while(n>0){
//     mul=mul*(n%10)
//     n=parseInt(n/10)
// }
// return mul
// }
// console.log(product())

// 6.Find the smallest odd digit in a given number.

// function odd_min(){
// let n=745235
// let min=9
// while(n>0){
//     a=n%10
//     if(a%2!=0){
//         if(a<min){
//             min=a
//         }
//     }
//     n=parseInt(n/10)
// }
// return (min)
// }
// console.log(odd_min())

// 7.Find the sum of all numbers between 1 and 80 that are divisible by 7.
// function sums(a,b){
//     let sum=0;
//     for(i=a;i<=b;i++){
//         if(i%7==0){
//             sum=sum+i
//         }
//     }
//     return(sum)
// }
// console.log(sums(1,80));




// 8.Find the number between 1 and 80 that has the maximum number of factors.

// function maxFact(){
// let maxFact=0
// let num=0
// for(let i=1;i<=80;i++){
//     let n=i
//     let count=0
//     for(let j=1;j<=n;j++){
//         if(n%j==0){
//             count++
//         }
//     }
//     if(count>maxFact){
//         maxFact=count
//         num=i
//     }
// }
// return (num)
// }
// console.log(maxFact())


// 9. Return the count of odd numbers within a given range.
// function countodd(a,b) {
//     let count = 0;

//     for (let i=a;i<=b;i++) {
//         if (i%2!=0) {
//             count +=1;
//         }
//     }
//     return (count);
// }
// console.log(countodd(1,20));

// 10 Return the sum of odd numbers within a given range.
// function sumodd(a,b) {
//     let sum=0;
//     for (let i=a;i<=b;i++) {
//         if (i%2!=0) {
//             sum=sum+i;
//         }
//     }
//     return (sum);
// }
// console.log(sumodd(1,20));



//  11. Return the sum of cubes from 1 to N.
// function sumcubes(n) {
//     let sum=0;

//     for (let i=1;i<=n;i++) {
//         sum=sum+i**3;
//     }

//     return sum;
// }
// console.log(sumcubes(5));

// 12. Return the sum of squares from 010 to N.
// function sumsquares(n) {
//     let sum=0;
//     for (leti=10;i<=n;i++) {
//         sum=sum+i**2;
//     }
//     return sum;
// }
// console.log(sumsquares(5));



// 13. Return the count of numbers divisible by 4 within a range.
// function countdiv4(c, d) {
//     let count = 0;

//     for (let i=c;i<=d;i++) {
//         if (i%4==0) {
//             count++;
//         }
//     }

//     return count;
// }
// console.log(countdiv4(1, 40));


// 14. Return whether a number is positive, negative, or zero.
// function checknum(n) {
//     if (n>0) {
//         return "Positive";
//     } else if (a<0) {
//         return "Negative";
//     } else {
//         return "Zero";
//     }
// }
// console.log(checknum(-8));


//15. Return the smallest of two numbers.
// function smallof2(a,b) {
//     if (a<b) {
//         return "A is smaller";
//     } else {
//         return "B is smaller";
//     }
// }
// console.log(smallof2(7,12));



// ---- Named functions with input and with return-----------
// 1. Add two numbers

// function add(a,b) {
//     return (a+b);
// }

// console.log(add(10, 20));


// 2.print reverse of a number

// function reverse(n){
// let rev=0
// while(n>0){
//     a=n%10
//     rev=rev*10+a
//     n=parseInt(n/10)
// }
// return rev
// }
// console.log(reverse(123))


// 3.Multiply two numbers

// function multiply(a,b) {
//     return (a*b);
// }
// console.log(multiply(5, 4));



// 4.Find the first digit of a given number.

// function first(n){
// let rev=0
// while(n>0){
//     rev=rev*10+(n%10)
//     n=parseInt(n/10)
// }
// return (rev%10)
// }
// console.log(first(562863))

//  5.Find square of a number
// function square(n) {
//     return (n*n);
// }
// console.log(square(6));


// 6.Find cube of a number

// function cube(n) {
//     return (n*n*n);
// }
// console.log(cube(3));


// 7.Check even number
// function isEven(n) {
//     return (n % 2 === 0);
// }
// console.log(isEven(8));


// 8.Check odd number
// function isOdd(n) {
//     return (n%2!==0);
// }
// console.log(isOdd(7));


//9. Find maximum of two numbers
// function maximum(a,b) {
//     return (a>b?a:b);
// }
// console.log(maximum(15,25));


// 10.Find the sum of the first 10 prime numbers after 50.

// function primeSum(n){
// let count2=0
// let sum=0
// while(n>0){
//     let count=0
//     for(i=1;i<=n;i++){
//         if(n%i==0){
//             count++
//         }
//     }
//     if(count==2){
//         count2++
//         sum=sum+n
//         if(count2==10){
//             break
//         }
//     }
//     n++
// }
// return sum
// }
// console.log(primeSum(50))


// 11.Find area of a rectangle

// function rectangleArea(length, width) {
//     return (length * width);
// }
// console.log(rectangleArea(10, 5));



// 12.find odd digits in a given number 8574263

// function odd_digit(n){
// let res=""
// while(n>0){
//     a=n%10
//     if(a%2!=0){
//         res=res+a+" "
//     }
//     n=parseInt(n/10)
// }
// return res
// }
// console.log(odd_digit(8765456))



// 13.Find factorial of a number
// function factorial(n) {
//     let result = 1;

//     for (let i = 1; i <= n; i++) {
//         result = result * i;
//     }

//     return result;
// }
// console.log(factorial(5));

// 14.find number of one's in given number

// function zero(n){
// let count=0
// while(n>0){
//     if(n%10==1){
//         count++
//     }
//     n=parseInt(n/10)
// }
// return count
// }
// console.log(zero(711210511))


// 15.print first armstrong after 100

// function armstrong(i){
// while(i>0){
// let n=i
// let temp=n
// let temp2=n
// let count=0
// let sum=0
// while(n>0){
//     count++
//     n=parseInt(n/10)
// }
// while(temp>0){
//     sum=sum+(temp%10)**count
//     temp=parseInt(temp/10)
// }
// if(temp2==sum){
//     return (temp2)
//     break
// }
// i++
// }
// }
// console.log(armstrong(200))
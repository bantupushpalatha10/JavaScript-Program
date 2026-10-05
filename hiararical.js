// ------------------Hierarchical Inheritance------------------

// EX-- - Payment → CreditCard, UPI

// class Payment{
//     constructor(amount,date){
//         this.amount=amount
//         this.date=date
//     }
//     display(){
//         console.log("amount : ",this.amount)
//         console.log("date : ",this.date)
//     }
// }

// class CreditCard extends Payment{
//     constructor(amount,date,cardNumber,bank){
//         super(amount,date)
//         this.cardNumber=cardNumber
//         this.bank=bank
//     }
//     displayCredit(){
//         super.display()
//         console.log("card number : ",this.cardNumber)
//         console.log("bank name : ",this.bank)
//     }
// }

// class UPI extends Payment{
//     constructor(amount,date,upi_id,app){
//         super(amount,date)
//         this.upi_id=upi_id
//         this.app=app
//     }
//     displayUpi(){
//         super.display()
//         console.log("upi id : ",this.upi_id)
//         console.log("upi app : ",this.app)
//     }
// }

// console.log("credit card ---->")
// let credit=new CreditCard(6000,"06-10-2026",2354267,"canara")
// credit.displayCredit()
// console.log("upi ----->")
// let upi=new UPI(7000,"09-03-2026","ramu@upi","Phone pay")
// upi.displayUpi()





// EX---2 Building → Apartment, Office

// class Building{
//     constructor(name,location){
//         this.name=name
//         this.location=location
//     }
//     display(){
//         console.log("building name : ",this.name)
//         console.log("building location :",this.location)
//     }
// }

// class Apartment extends Building{
//     constructor(name,location,flats,floors){
//         super(name,location)
//         this.flats=flats
//         this.floors=floors
//     }
//     displayApart(){
//         super.display()
//         console.log("number of flats : ",this.flats)
//         console.log("number of floors : ",this.floors)
//     }
// }

// class Office extends Building{
//     constructor(name,location,companies,employees){
//         super(name,location)
//         this.companies=companies
//         this.employees=employees
//     }
//     displayOff(){
//         super.display()
//         console.log("number of companies : ",this.companies)
//         console.log("number of employees : ",this.employees)
//     }
// }
// console.log("apartment--->")
// let apart=new Apartment("Srinivas building","Kukatpally",20,10)
// apart.displayApart()

// console.log("office--->")
// let office=new Office("Cyber towers","Hitech city",30,500)
// office.displayOff()
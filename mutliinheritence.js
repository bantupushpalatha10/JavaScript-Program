
//---------------- MULTI INHERITENCE------------------
// EX----1
// class transpost{
//     constructor(name,speed){
//         this.name=name
//         this.speed=speed
//     }
//     display(){
//         console.log("trasnporst:",this.name);
//         console.log("speed:",this.speed)
//     }
// }
// class bus extends transpost{
//     constructor(name,speed,capacity){
//         super(name,speed)
//         this.capacity=capacity
//     }
//     displaybus(){
//         super.display()
//         console.log("capacity",this.capacity);
// }
// }
// class electricity extends bus{
//     constructor(name,speed,capacity,battery,range){
//         super(name,speed,capacity,)
//         this.battery=battery
//         this.range=range
// }
// displayele(){
//     super.displaybus()
//     console.log("electricity",this.battery);
//     console.log("range",this.range);
// }
// }
// let ele=new displayele("Electric bus","80km/hr",45, "KWH","250km")
// ele.displayele()

// EX---2

// class Person{
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     display(){
//         console.log("name of person : ",this.name)
//         console.log("age of person : ",this.age)
//     }
// }

// class Doctor extends Person{
//     constructor(name,age,specialization,experience){
//         super(name,age)
//         this.specialization=specialization
//         this.experience=experience
//     }
//     displayDoc(){
//         super.display()
//         console.log("specialization : ",this.specialization)
//         console.log("experience : ",this.experience)
//     }
// }
// class Surgeon extends Doctor{
//     constructor(name,age,specialization,experience,surgeryType,hospital){
//         super(name,age,specialization,experience)
//         this.surgeryType=surgeryType
//         this.hospital=hospital

//     }
//     displaySur(){
//         super.displayDoc()
//         console.log("surgery type : ",this.surgeryType)
//         console.log("hospital : ",this.hospital)
//     }
// }

// let sur=new Surgeon("koushik","33","Cardiology","7 years","Heart sugery","Apollo hospital")
// sur.displaySur()
//------------------ SINGLE INHERITENCE-------------------

// EX----1
// class platform{
//     constructor(movie,user){
//         this.p_movie=movie;
//         this.p_user=user;
//     }
//     display(){
//         console.log("movie name:",this.p_movie);
//         console.log("user name:",this.p_user);
//     }
// }
// class netflix extends platform{
//     constructor(movie,user,ratings){
//         super(movie,user);
//         this.p_ratings=ratings
//     }
//     display_rating(){
//         super.display();
//         console.log("rating:",this.p_ratings);
        
//     }
// }
// let plat=new netflix("mahabharatham","200menubar",99)
// plat.display_rating();



// EX----2
// class person{
//     constructor (names,age){
//         this.p_name=names;
//         this.p_age=age;
//     }
//     display(){
//         console.log("name of the person:",this.p_name);
//         console.log("age:",this.p_age);
//     }
// }
// class teacher extends person{
//     constructor(names,age,salary){
//          super(names,age)
//          this.p_salary=salary;
        
//     }
//     display_tech(){
//         super.display();
//         console.log("salery:",this.p_salary);
        
//     }
// }
// let tt=new teacher("pushpa",21,60000)
// tt.display_tech();


// EX---3
// class game{
//     constructor(name, player){
//         this.g_name=name;
//         this.g_player=player;
//     }
//     display(){
//         console.log("name;",this.g_name);
//         console.log("player",this.g_player);    
//     }
// }
// class cricte extends game{
//     constructor(name,player,overs){
//         super(name,player);
//         this.g_overs=overs
//     }
//     display_g(){
//         super.display()
//         console.log("overs",this.g_overs);
        
//     }
// }
// let g = new cricte("hardik",33,17);
// g.display_g()



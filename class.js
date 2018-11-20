class User {
 constructor (name,age){
   this.name = name;
   this.age = age;
 }
 static getClassName (){
     return "User";
 }
 changeName (name){
  this.name = name;
 }
 changeName (age){
    this.age = age;
   }
   get info(){
     return "name="+this.name+"\tgae="+this.age;
   }
}
class Manager extends User{
    constructor (name,age,password){
        super(name,age);
        this.password = password;
    }

    changePassword (password){
      this.password = password;
    }

}
//console.log(typeof User,typeof Manager);
var manager = new Manager("测试",25,"111");
console.log(manager.info);

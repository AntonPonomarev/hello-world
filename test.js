
// - - - метод bind - - -

//обзначим начальную функцию
var checkNumericRange = function(value){
    if(typeof value !== 'number')
        return false;
    else
        console.log("min: "+this.minimum+" max: "+this.maximum);
        return value >= this.minimum && value <= this.maximum;
};

//The range value will become the this value in the callback function
var range = {minimum : 10, maximum : 20};

//Bind the checkNumeric function
var boundCheckNumericRange = checkNumericRange.bind(range);

//Use the new function to check whether 12 is in the numeric range
var result = boundCheckNumericRange(12);
console.log("result: "+result);

range.maximum = 11;
result = boundCheckNumericRange(12);
console.log("result: "+result);

// - - -


var originalObject = {
    minimum : 50,
    maximum : 100,

    checkNumericRange : function(value){
        if (typeof value !== 'number')
            return false;
        else
            return value >= this.minimum && value <= this.maximum;
    }
};

var result = originalObject.checkNumericRange(10);
console.log(result);

var range = {
    minimum : 10,
    maximum : 25
};

var boundObjectWithRange = originalObject.checkNumericRange.bind(range);

result = boundObjectWithRange(10);
console.log(result);


var Person = function(firstName){
    this.firstName = firstName;
};

function hello(){
    console.log("hello, I am "+this.firstName);
};

Person.prototype.sayHello = hello   ;

var person1 = new Person("Bob");
var person2 = new Person("Ann");

person1.sayHello();
person2.sayHello();

var helloFunction = person2.sayHello;

helloFunction();

var myPerson = {firstName : 'Steve'};
helloFunction.call(myPerson);



// - - - наследование - - -

//определяем конструктор person
//Person - суперкласс
var Person = function(firstName){
    this.firstName = firstName;
};

//добавляем методы суперкласса
Person.prototype.walk = function(){
    console.log('I am walking');
};

Person.prototype.sayHello = function(){
    console.log('Hi, I am '+this.firstName);
};

//конструктор подкласса Student
function Student(firstName, subject){

    //вызываем конструктор суперкласса
    Person.call(this, firstName);

    this.subject = subject;
};

//подкласс расширяет суперкласс
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

//переопределяем метод
Student.prototype.sayHello = function(){
    console.log('hello, I am '+this.firstName+" I am studying "+this.subject);
};

//вызываем конструктор подкласса
var student1 = new Student("Bill","Applied Sypher");

student1.sayHello();
student1.walk();

console.log(student1 instanceof Person);
console.log(student1 instanceof Student);

// - - -

var person1 = {name : 'Bob'};
var person2 = {name : 'Sully'};

function sayName(){
    console.log(this.name);
}

sayName.call(person1);
sayName.call(person2);



// Create Objects

// composite value, aggregates multiple values
// primitive values or other objects
// store and retreive values by name
// unordered collection of properties
// properties names are USUALLY strings, symbols***
// "objects map strings to values"
// hash, hashtable, dictionary, associative array***
// maintains its own set of properties
// inherits properties from another object / its prototype
// methods of an object are typically inherited
// properites + prototypal inheritance*
// objects are mutable, dynamic
// manipulated by reference
// properties can be added, removed, modified
// objects can also be used to represents sets of strings (key w/out value)
// any value that is not a string, symbol, number, true, false, null, undefined is an object
// 


// Object Constructor (Constructor Function)

function Person (name, age, favoritecolor) {
    this.name = name;
    this.age = age;
    this.favoritecolor = favoritecolor;
}

const person1 = new Person("Carmen", 44, "green");
const person2 = new Person("Valentina", 22, "red");

// Constructor functions are used to create objects. They are similar to classes in other languages.
// Constructor functions are rarely used in modern JavaScript.

// This constructor function may be converted to a class in ES6, as follows:

class PersonClass {
    constructor(name, age, favoritecolor) {
        this.name = name;
        this.age = age;
        this.favoritecolor = favoritecolor;
    }
}

const person3 = new PersonClass("Carmen", 44, "green");
const person4 = new PersonClass("Valentina", 22, "red");

// Define a class with the properties and methods you want the object to have and instantiate it with the "new" keyword.

// Object.create() Method + Object Literal

const Shoe = {
    size: 8,
    color: "black",
    material: "leather",
    style: "boot"
};

const shoe1 = Object.create(Shoe);

// Shoe is the prototype object. shoe1 is the object that inherits the properties from the prototype object.
// Properties are inherited from the existing object (Shoe).

// Singleton Object

const Singleton = (function() {
    let instance;

    function createInstance(){
        const object = new Object({name: "Louise"});
        return object;
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Creates an object with a single method, getInstance(), which returns an instance of the object.
// This method is used when you want to ensure that only one instance of an object is created and used throughout the lifetime of the application. The object is instatiated only once, and the same instance is used every time.
// This object can be shared by multiple parts of the application. The object can coordinate actions between different parts of the application.
// The getInstance() method checks if an instance of the object already exists, and if not, creates one. It's the only way to access the object.
// The object is stored in a variable called instance, which is private to the Singleton object.
// The Singleton pattern is used to restrict the instantiation of a class to one object.
// This pattern can define a class or function that encapsulates the creation of an object.
// Closure, static methods, and private variables are used to restrict the instantiation of a class to one object.
// A common implementation of the Singleton pattern is the Module pattern. The Module pattern is used to encapsulate public and private methods and variables. It uses closures to create private scopes. Only necessary parts of the object are exposed to the public.

// Object Literal with the new keyword

// The object literal is the simplest way to create an object. It's used when you want to create a single object.
// The object literal is not used to create multiple objects. It's not used to create objects with methods. It's used to create objects with simple properties.
// The Object Literal only allows you to create simple key-value pairs, whereas creating objects with methods typically involves defining functions as object properties.

const myObject = new Object();
myObj.name = "Carmen";
myObj.age = 44;
myObj.favoritecolor = "green";

// This is a way to create an object without using a constructor function or class. The constructor function is called with the new keyword.
// The properties are added to the object with dot notation.
// The variable is an object reference. The object reference returned by new Object() is assigned to a variable, myObject, which is used to access the object.

// Object Literal without the new keyword

const myObj1 = Object();
myObj1.name = "Carmen";
myObj1.age = 44;
myObj1.favoritecolor = "green";

// Instead of creating a new object, this code is actually invoking the Object() function as a function, not as a constructor.
// The return value of the function is assigned to the variable myObj1.
// Because this is created without the new keyword, the return value is not an object reference, but a primitive value - a new empty object, assigned to the variable myObj1.
// Then the properties are added to the object with dot notation. Note that the properties are added to the primitive value, not to the object.
// In other words, the return value of Object() without 'new' is a primitive value, but this value is still an object. The properties are added to this object using dot notation, rather than to a copy of the object

// Object Literal with curly brace syntax

const myObj2 = {
    name: "Carmen",
    age: 44,
    favoritecolor: "green"
};

// This is a way to create an object without using a constructor function or class.

/* This is the most common way to create an object literal in JavaScript, since it's the most concise and readable. 
When we use curly braces to define an object literal, JavaScript automatically creates a new object for us and assigns the properties we specify. */

// Weird Ways to Create Objects

// With Statement (Deprecated)

with ({}) {
    name = "Carmen";
    age = 44;
    favoritecolor = "green";
    myObj = { name, age, favoritecolor };
}

// In this example, we're using with to create a new object and add properties to it.
// The properties are defined as variables within the with block, and then we create a new object using an object literal and assign it to the myObj variable
// The with statement is deprecated and should not be used!

// Function Call

function myFunction() {
    name = "Carmen";
    age = 44;
    favoritecolor = "green";
    myObj = { name, age, favoritecolor };
}

myFunction();

// In this example, we're using a function to create a new object and add properties to it.
// The properties are defined as variables within the function, and then we create a new object using an object literal and assign it to the myObj variable.
// 'name' is flagging deprecated and should not be used! It's a global property that can conflict with other variables and functions.
// The variables are global variables, and they are not properties of the object myObj.

/* The properties name, age, and favoritecolor are not defined as variables within the function.
Instead, they are implicitly defined as global variables when they are first assigned values.
This is not recommended, as it can lead to unintended side effects and makes the code harder to reason about. */

// Instead, you should use the var, let, or const keywords to explicitly define variables within the function scope.

// Wow, CoPilot did me wrong with those global variables!

// Updated

function myFunction() {
    const name = "Carmen";
    const age = 44;
    const favoritecolor = "green";
    const myObj = { name, age, favoritecolor };
}

myFunction();

// now it's working!

// Function Call with this

function myFunction2() {
    this.name = "Carmen";
    this.age = 44;
    this.favoritecolor = "green";
    myObj = { name, age, favoritecolor };
}

myFunction2();

// name is still deprecated, but it's not a global variable anymore!
// you're a troll, CoPilot.

// In this example, we're using a function to create a new object and add properties to it.
// The properties are defined as variables within the function, and then we create a new object using an object literal and assign it to the myObj variable.
// Variables in the function are defined as properties of the object.

// Updated

function myFunction3() {
    this.name1 = "Carmen";
    this.age = 44;
    this.favoritecolor = "green";
    this.myObj = { name1, age, favoritecolor };
}

myFunction3();

// thanks for nothing

// The properties name, age, and favoritecolor are defined as properties of the object myFunction3.
// The properties are defined as variables within the function, and then we create a new object using an object literal and assign it to the myObj variable.

// Function Call with this and new

function myFunction4() {
    this.name2 = "Carmen";
    this.age = 44;
    this.favoritecolor = "green";
    myObj = { name2, age, favoritecolor };
}

const myObj4 = new myFunction4();

// In this example, we're using a function to create a new object and add properties to it.


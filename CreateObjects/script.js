// Create Objects

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

// Object.create() Method

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



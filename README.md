# additionaltopics

//DIFFERENCE B/W SETTIMEOUT AND SETINTERVAL

- setTimeout(<function>,<time duration in ms>); // executes once after the time duration passed
- setInterval(<function>,<time duration in ms>); //keeps on executing after the time duration every sec h


//CLOSURE
-very similar to object oriented prog in js almost like packing a function
-closure is a func being enclosed in another func, but each time the func runs we want it to be called differently
-its basically oops but thing is we should use more closure,functions within functions, makes easier to reuse variables rather than declaring each and every one globally. i get what closure means


//PROTOTYPES

-every function is same same same, but when "new" keyword is used, certain functions are executed differently!!
-new keyword tells js to execute it as a constructor function i.e. create an object 
-instead of creating function in object constructor for every new object created, we can add function in the prototype using <OBJECT>.prototype.<func. name>
p;
Object { x: 90, y: 100 }

//log
p.z;
undefined
p.hasOwnProperty('z');
false
p.hasOwnProperty('x');
true
p.hasOwnProperty('show');
false
why did i get false? show is a property thats in the prototype and not in the object instance;
this is a way by which you can check if the property is specific to only that, like an individual object instance or something else
*****************PROTOTYPE=CLASS IN ES6
REFER to ES6 playlist, comeback again on this
​


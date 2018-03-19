//Problem1: check if number is int
function is_Integer(variable){
    return typeof(variable)=="number" && Math.floor(variable)==variable;  
}
console.log(is_Integer(5));
console.log(is_Integer("abc"));


//Problem2: sum of array
function add_All(arr){
    var sum=0;
    arr.forEach(function(element){
        sum = sum + element;
    })
    return sum;
}
var array=[1,4,2,6,4,7,5];
console.log(add_All(array));


//Problem3: Celcius to Fahrenheit
function temp_Convert(from,temp){
    if(from == "F"){
        return ((5*temp)-32)/9 + "degree C";
    }
    else if(from == "C"){
        return ((9*temp)+32)/5 + "degree F";
    }
    else return "Incorrect argument";
}
console.log(temp_Convert("F",32));
console.log(temp_Convert("C",32));

//Pronlem4: Factorial of a number
function factorial(number){
    if(number==0) return 1;
    else return number*factorial(number-1);
}
console.log(factorial(5));


// Problem5: Convert to coins
function convert_Coins(cents){
    var coin_Denom = [100,50,25,10,5,1];
    var coins = []
    var index = 0;
    while (cents > 0){
        while(cents < coin_Denom[index]){
            index++;
        }
        cents = cents - coin_Denom[index];
        coins.push(coin_Denom[index]);
    }
    return coins.toString();
}
console.log(convert_Coins(154));



//Problem6: Reverse a string
function str_Reverse(str){
    return str.split('').reverse().join('');
}
console.log(str_Reverse("ankit"));


//Problem7: Sort an array of objects
function radius_comparator(a,b){
    return (a.radius-b.radius);
}
var radii = [{radius: 5}, {radius: 9}, {radius: 2}];
radii.sort(radius_comparator);


//Problem8: Return the number of values in an array. Not the length
function array_Length(arr){
    var length = 0;
    for(var p in arr){
        if(arr.hasOwnProperty(p)){
            length = length+1;
        }
    }
    return length;
}
var rand_arr= [3,6];
rand_arr[4] = undefined;
rand_arr[8] = 10;
console.log(array_Length(rand_arr));


// List Comprehension  
//Filter:    Callback function (elem, index, array) parameter not given is taken undefined. returns boolean
//Problem11: Print all even numbers fron an array
[1,5,2,76,12,98].filter(function(elem){return elem%2 === 0;});

// Map:    Callback function (elem, index, array) parameter not given is taken undefined. return a transformed value.
[1,5,2,76,12,98].map(function(elem){return elem*elem;});


// Reduce:    Callback function (prev, current, index, array) parameter not given is taken undefined. return a reduced value from the array
// like the sum of the array.
[1,5,2,76,12,98].reduce(function(prev, curr){return prev+curr;}, 0);


// Problem9: Return String of max length from an array
function max_String(arr){
    return arr.reduce(function(prev,curr){
       var len = curr.length;
        if (curr.length > prev.length) {
          return curr;
        } else {
          return prev;
        }
      }, "");
}
var arr = ["abc", "bcde", "c"];
console.log(max_String(arr));


//Problem10: Sum of Squares of numbers in an array
function sumOfSquares(arr){
    return arr.reduce(function(prev,curr){
        var squ = curr * curr;
        return prev + squ;
      }, 0);
}
var arr = [5,5,4,2];
console.log(sumOfSquares(arr));


//Problem12: Function taking an input function as filter
function fulfill(arr, criteria){
    return arr.filter(function(elem){
        return !criteria(elem);
    });
}
var arr = [3,6,4,7];
function is_odd(elem){
    return elem%2 !== 0;
}
console.log(fulfill(arr,is_odd));


//Problem13: Constructor function for a Rectangle
function Rectangle(height,weight){
    this.height = height;
    this.weight = weight;
}
Rectangle.prototype.area = function(){
    return this.height * this.weight;
};
Rectangle.prototype.perimeter = function(){
    return (this.height + this.weight) * 2;
};
var rectangle = new Rectangle(3,4);
console.log(rectangle.area());
console.log(rectangle.perimeter());


//Problem14: Point Object
function Point(x,y){
    this.x = x;
    this.y = y;
    this.distance = function(another){
        return Math.sqrt(((another.x-this.x)*(another.x-this.x)) + ((another.y-this.y)*(another.y-this.y)));
    }
}


//Problem15: String is palindrome
String.prototype.isPalindrome = function() {
  return this.split('').reverse().join('') == this;
}
console.log("naman".isPalindrome());




// Prototypical Inheritance: Part of ES5
//parent class Nut 
var Nut = function(color, type) {
  this.color = color;
  this.type = type;
};
Nut.prototype.favNutType = function() {
  return 'Are ' + this.type + 's your favorite type of nut?';
};
Nut.prototype.sayHello = function() {
  return 'Hello, I am a '+ this.type + '!';
};
//now the subclass Almond
var Almond = function(color, type, shape) {
  Nut.call(this, color, type); //get some props set up by Nut
  this.shape = 'teardrop';
};
Almond.prototype = Object.create(Nut.prototype); //set inheritance
Almond.prototype.constructor = Almond; //set Almond constructor func
Almond.prototype.favNutType = function() {
  return 'The' + this.type + ' looks like a ' + this.shape + '.';
};
var peeledAlmond = new Almond('white', 'almond', 'teardrop');
console.log(peeledAlmond.constructor);//Function, Almond constructor
console.log(peeledAlmond.sayHello());  //'Hello, I am a almond!'
console.log(peeledAlmond.favNutType());  //'The almond looks like a teardrop.'
/*In the above code, there are a few things worth taking particular note of. First, inside of the Almond constructor function, the Almond class is getting some of its properties created using the Nut constructor. This is observed on the line Nut.call(this, color, type). Later, the Almond.prototype = Object.create(Nut.prototype) line ensures that all instances created by the Almond constructor inherit the Nut.prototype ‘s methods. Finally, the line with Almond.prototype.constructor = Almond is used to set the Almond as an instance of an Almond. If this had not been done, an almond instance would not be seen as an instance of the Almond constructor. This can cause confusion and therefore should be handled every time.
*/
//pseudoclassical Instantiation: Part of ES6
//parent class Nut
class Nut {
  constructor(color, type) {
    this.color = color;
    this.type = type;
  }
  favNutType() {
    return `Are ${this.type}s your favorite type of nut?`;
  }
  sayHello() {
    return `Hello, I am a ${this.type}!`;
  }
}
//now the subclass Almond
class Almond extends Nut {
  constructor(color, type, shape) {
    super(color, type);
    this.shape = shape;
  }
  favNutType() {
    return `The ${this.type} looks like a ${this.shape}.`;
  }
}
const peeledAlmond = new Almond('white', 'almond', 'teardrop');
console.log(peeledAlmond.constructor);//Function, Almond constructor
console.log(peeledAlmond.sayHello());  //'Hello, I am a almond!'
console.log(peeledAlmond.favNutType());  //'The almond looks like a    teardrop.'



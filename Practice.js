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









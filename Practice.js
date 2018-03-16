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



















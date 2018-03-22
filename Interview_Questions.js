//Problem1: Tripple add
function trippleAdd(num1){
    return function (num2){
        return function (num3){
            return num1+num2+num3;
        }
    }
}
console.log(trippleAdd(10)(20)(30));


// Problem2: Button5
//Sol1: IIFE
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     (function(num) {
       button.onclick = function() {
          alert('This is button ' + num);
       }
     })(i);
     body.appendChild(button);
   }
}
createButtons();

 
// Sol2: Another function
function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;     
     addClickFunctionality(button, i);
     body.appendChild(button);
   }
}
function addClickFunctionality(button, num) {
  button.onclick = function() {
    alert('This is button ' + num);
  }
}
createButtons();

 
// Sol3: use let instead of var
function createButtons() {
   for (let i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     button.onclick = function() {
          alert('This is button ' + i);
     }
     body.appendChild(button);
   }
}
createButtons();


// Sol4: counter function
function myFunc() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}
console.log(myFunc());
const instanceOne = myFunc();
const instanceTwo = myFunc();
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceOne: ', instanceOne());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceTwo: ', instanceTwo());
console.log('instanceOne: ', instanceOne());


//
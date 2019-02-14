 function cal(...p) { 
   let sum = 0;
   for(let elemet of p) {
     sum = sum + elemet
   }
   console.log(sum);
}
//var v1 = cal(3,4,6)
  
//console.log(v1);

// sum of array arguments using spread operator

function arrgu(...ar) {
  return ar.length;
}


var v2 = arrgu(5,7,8,9)

//console.log(v2);

// O/P : 4  

 

 function calcul(a = 10, b) {
   return a+b;
 }
  
  //console.log(calcul(2,5))

  // default parameter function

var myfun = new Function("x", "y", "return x*y"); 

function product () {
  var result;
  result = myfun(20,30);
  //console.log(result); 
}

product();


//Function Constructor

function factorial(num) {
  if( num <= 0) {
    return 1;
  } else {
    return ( num * factorial (num -1) );
  }
}

//console.log(factorial(5));

// Factorial function 

//Lambda Function - Anatomy

//fat arrow notation/lambda notation (=>):

var foo = (x) => x + 10;
//console.log(foo(10));

// Function hoasting

//mycall();
function mycall() {
  console.log('Function hoasting'); 
}

// this will not hoasted
console.log(mycalfun());
var mycalfun = function mycall2() {
    console.log('Hi this will not hoasting')
}


Install Bootstrap and FontAwesome
  
1. npm install bootstrap font-awesome 
2.
@import "~bootstrap/dist/css/bootstrap.css";
@import "~font-awesome/css/font-awesome.css";


  https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/





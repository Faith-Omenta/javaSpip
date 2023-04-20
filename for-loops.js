// Function `printNumbers()` prints numbers from 1 to 10 using for loop.
function numbers(){
    for(let i=1; i<10; i++){
        console.log(i)
    }
}
numbers()

// print even numbers
function evenNumbers(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            console.log(arr[i])
        }
    }
}
let arr=[2,4,3,43,7,12,23,44]
evenNumbers(arr)

// find the laggest number in an array
function largestNumber(arr1){
    for(let i=0; i<arr1.length; i++){
        arr1.sort()
        //   largest=arr1[i]
          console.log(arr1)
        }
       
    }
    
    let arr1=[34,27,84,837,364,823]
    largestNumber(arr1)
    
    // check if the current number is odd or even, and display if its odd or even
    for (var x=0; x<=10; x++) {
        if (x === 0) {
                console.log(x +  " is even");
        }
        else if (x % 2 === 0) {
                console.log(x + " is even");   
        }
        else {
                console.log(x + " is odd");
        }
}

//  program to display text 5 times
const s = 5;
// looping from i = 1 to 5
for (let i=1; i<=s; i++ ){
    console.log("I love my family");
}

// program to display numbers from 1 to 5
// const n = 5;
// looping from i = 1 to 5
// in each iteration, i is increased by 1
// for (let i = 1; i <= n; i++) {
    // console.log(i);     // printing the value of i
// }


//  Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the 
// multiples of five print "Buzz".
//  For numbers which are multiples of both three and five print "FizzBuzz
// for ( var i = 1; i <= 100; i++ )
// {
//   if ( i%3 === 0 && i%5 === 0 )
//   {
//     console.log( i + " FizzBuzz" );
//   }
//   else if ( i%3 === 0 ) 
//   {
//     console.log(i+ " Fizz" );
//   }
//   else if ( i%5 === 0 ) 
//   {
//     console.log(i+ " Buzz" );
//   }
//   else
//   {
//     console.log(i);
//   }
// }




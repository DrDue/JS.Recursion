'use strict'

document.write( `<h1>Assignments</h1>` );

document.write( `<h2>JS.Recursion.0</h2>` );

console.log( fact( 5 ) );

let n = prompt( 'What natural number do you want to calculate the factorial of?' );

document.write( 'The factual number is: ' + fact( n ) );

document.write( `<hr/>` );

document.write( `<h2>JS.Recursion.1</h2>` );

let f = prompt( 'What natural number do you want to calculate the nth fibonacci of?' )

document.write( 'Fibonacci is: ' + fibo( f ) );

document.write( `<hr/>` );

document.write( `<h2>JS.Recursion.2</h2>` );

let r = prompt( 'the first part of the exponent: ' );
let e = prompt( 'the second part of the exponent: ' );

document.write( 'Exponent = ' + pow( r, e ) )


document.write( `<hr/>` );

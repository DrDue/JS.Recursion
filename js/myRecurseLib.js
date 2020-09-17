'use strict'

let fact = function ( n ) {

  if ( n === 0 ) {
    return 1;
  }
  return n * fact( n - 1 );
}

var fibo = function ( n ) {
  if ( n === 1 ) {
    return [ 0, 1 ];
  } else {
    var s = fibo( n - 1 );
    s.push( s[ s.length - 1 ] + s[ s.length - 2 ] );
    return s;
  }
}

var pow = function ( r, e ) {
  if ( e === 0 ) {
    return 1;
  } else {
    return r * pow( r, e - 1 );
  }
};

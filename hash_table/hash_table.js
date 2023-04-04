/* A Hash Table aka Map uses an array to store key value pairs
    
  for every k,v inserted a hash function generates a new index based on k. 
  A basic example is:
  k = "apple"
  hash = sum of charCodes

  for (l in k) sum += charChode(l) => 535

  so we store k at index 535

  SOME MORE INFO!

Resizing

    To ensure efficiency, good implementation shrink/grow array
        Often aiming to keep it ~75% occupied
    This means some .set() and .delete() calls will take longer
        If shrink/grown by proportion (eg, double/halve), will be “amortized O(1)”

Collisions
      for each collision there a few options:
    - we can store a few items in a bucket at the colliding index
    - we can ensure enough space to be able to put a colliding key's index into a different index
    
    Our first implementation made each bin (spot in array) an array
    This is a common implementation; it’s called “chaining”
    There’s another possibility

Open Addressing

    We can make each bin just a single [key, value] pair
    If collision: look at the “next” place
        This can be the next bin (this is “linear probing”)
        Or there are smarter algorithms to reduce clumping
    We should keep array size large enough to minimize when this happens
    If we do and we have a good hash function, we can get amortized O(1)



  * COLLISONS * 

  */

// this hash function is not ideal and is meant foro smaller data sets
function hash(key, arrayLen) {
  hash = Array.from(key).reduce((accum, char) => accum + char.charCodeAt(), 0);

  return hash % arrayLen;
}
// this hash is a little better to prevent collision with a prime number technique
function hashPrime(key) {
  // Prime number to use with Horner's method
  const H_PRIME = 31;

  let numKey = Array.from(key).reduce(
    (accum, char) => accum * H_PRIME + char.charCodeAt(),
    0
  );

  return numKey % array_len;
}

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Complete the sockMerchant function below.
const sockMerchant = (n, oldAr) => {

  let count = 0, ar = [...oldAr];

  for(let i = 0; i < n; i++) {

    // console.log("***index: ", i);
    
    let dup = ar.indexOf(ar[i], i+1);
    
    if(dup !== -1) {
      // console.log("found dup @: ", dup);
      ar.splice(dup, 1);
      // console.log("remove dup @: ", dup);
      
      ar.splice(i, 1);
      // console.log("remove el @: ", i);

      i = 0;
      n -= 1;
      count += 1;
    }
  }
  
  console.log("ar: ", ar);
  
  return count

}

console.log("Output: ", sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));
console.log("Expected Output: 3");
console.log("Output: ", sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]));
console.log("Expected Output: 4");
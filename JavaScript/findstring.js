function findstring(x, y) {
    if (x.length !== y.length) {
      console.log("Strings are different");
      return false;
    }
  
    for (let i of x) {
        if (!y.includes(i)) {
          console.log("Strings are different");
          return false;
        }
      }      
  
    console.log("Two strings are equal!");
  }
  
  findstring("ali", "lia");

  /*************************************************** */
  
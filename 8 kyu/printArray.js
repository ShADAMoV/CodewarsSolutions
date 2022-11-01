/*
*Input: Array of elements

    ["h","o","l","a"]

Output: String with comma delimited elements of the array in th same order.

    "h,o,l,a"
*/

function printArray(array){
    return array.join(',')
  }

// Test casesd
console.log(printArray(["h","o","l","a"]))
console.log(printArray(['h','o','l','a']))
console.log(printArray([`h`,`o`,`l`,`a`]))
console.log(printArray(["f","4","l","-"]))

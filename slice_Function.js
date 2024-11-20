//This helper Function return a portion of an existing array without any modifying the array.
// .slice() take two parameters: begining index and the ending index of the array
/* 
    Note:
        if only the begining index is passed its asssumed to return fully array 
        if nothing passed in parameter its return copy array of original array 
        if you change some thing in a new array its will be reflect in original array also 
        if you compare the .slice array with original array its evaluates to false, beacuse alhrough the content is same but the memory address are different 

*/
let animal = ["dog", "elepant", "Cow", "Goat", "buffole"];
const a = animal.slice();
console.log(a);

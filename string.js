let text = "Hello World!";

let stringtoArray = Array.from(text);

let strMap = stringtoArray.map(
  (currentElement, index) => `${currentElement} - ${index}`
);
console.log(strMap);

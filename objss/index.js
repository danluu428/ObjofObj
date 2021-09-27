const arrayToObject = (array, keyField) =>
   array.reduce((obj, item) => {
     obj[item[keyField]] = item
     return obj
   }, {});

const peopleArray = [
  { id: 123, name: "dave", age: 23},
  { id: 456, name: "chris", age: 23},
  { id: 789, name: "bob", age: 23},
];
const peopleObject = arrayToObject(peopleArray, "id");

console.log(peopleObject)
/*
  Data types in JS
  undefined - when a variable is not assigned to a value 
  null -  no value
  bollean - true or false, 
  string - represents a sequence of characters  
  symbol -  unique identifiers 
  number - can also be a float  
  object - stores keyed collections 
  */

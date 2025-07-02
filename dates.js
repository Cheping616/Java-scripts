let myDate = new Date()
//console.log(myDate.toString());
//console.log(myDate.toDateString());
//console.log(myDate.toLocaleString());

console.log(typeof myDate)
//let myCreatedDate = new Date(2023, 0, 1, 12, 0, 0) // January is month 0

let  myCreatedDate = new Date("01-14-2025") // MM-DD-YYYY format    
console.log(myCreatedDate);

console.log(Date.now()); 
let newDate = new Date();
console.log(newDate)
console.log(newDate.getMonth()+1);
console.log(newDate.getDay())

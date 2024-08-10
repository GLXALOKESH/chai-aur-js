
let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toISOString());

let myDate2 = new Date(2023,0,17)

console.log(myDate2.toString());

let timestamps = Date.now()

console.log(timestamps);

console.log(myDate2.getTime());

console.log(`${Math.floor(myDate2.getTime()/100)} Seconds`);







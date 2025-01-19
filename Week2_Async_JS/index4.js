// console.log("starting time : ");
// console.log(new Date().toISOString());

// setTimeout(() => {
//   console.log("hi");
//   setTimeout(() => {
//    console.log("hello");
//    setTimeout(() => {
//     console.log("hello there");
//     console.log("Ending time");
//     console.log(new Date().toISOString());
//    }, 5000); 
//   }, 3000);
// }, 1000);



function setTimeoutPromisified(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// setTimeoutPromisified(1000)
//   .then(() => {
//     console.log("hi");
//     setTimeoutPromisified(3000)
//     .then(() => {
//       console.log("hello");
//       setTimeoutPromisified(5000)
//       .then(() => console.log("hello there"));
//     })
//   });

  
// setTimeoutPromisified(1000).then(() => {
//   console.log("hi");
//   return setTimeoutPromisified(3000);
// })
// .then(() => {
//   console.log("hello");
//   return setTimeoutPromisified(5000);
// })
// .then(() => {
//   console.log("hello there");
// });

async function solve(){
  setTimeoutPromisified(1000);
  console.log("hi");
  setTimeoutPromisified(3000);
  console.log("hello");
  setTimeoutPromisified(5000);
  console.log("hello there");
}

solve();
console.log("heeellloooo");


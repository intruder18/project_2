
var message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "my";
        resolve(message);
    }, 2000)
})

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " first";
        resolve(message);
    }, 2000)
})

promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " promise";
        //return reject("error")
        resolve(message);
    }, 2000)
})

var printResult = (results) => {console.log("Results = ", results, "message = ", message)}

function main() {
    // See the order of promises. Final result will be according to it
   var abcd=  Promise.all([promise1, promise2, promise3]).then(printResult).catch((abc)=>console.log(abc));
}

main();
  
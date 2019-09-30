function* Add(x) {
   yield x+1;
   let y = 6;
   yield abc(y);
   return x ;
}
var abc = function abc(c){
    new Promise((resolve,reject)=>{ setTimeout(() => {
       return console.log("hello",c);
    }, 5000);})
}
var gen = Add(5);

gen.next();

gen.next(); 
var a = gen.next();
console.log(a);
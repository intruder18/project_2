// call back example to Print Hiiii....This is call back Example
var message = "";
var a = function callback(cb1){
message = message + cb1(callback2);
message = message + " Example"
return message;
}
function callback1(cb2){
message= message + cb2(callback3);
message =message+ "call back"
return message;

}
function callback2(cb3)
{
    message= message + cb3();
    message =message + "This is ";
    return message;
}
function callback3(){
    message = "Hiiii....."
return message;
}
var b= a(callback1);
console.log(b);
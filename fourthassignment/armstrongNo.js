var num = 153
var number = num;
var sum = 0;
while(number>0)
{
    a = number%10;
    console.log(a);
    sum= sum + a*a*a;
    number= parseInt(number/10);

}
if(num=== sum)
{
    console.log("number is armstrong");
}
else{
    console.log("number is not armstong");
}
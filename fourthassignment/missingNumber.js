var arr= [1,2,3,4,5,6,7,8,10,11,12,13,14,15,16,17];
var sum = ((arr.length+1)*(arr.length+2))/2;
var sum1=0;
console.log(sum);
for(var i=0 ;i<arr.length;i++){
sum1=sum1+arr[i];
}
console.log(sum1);
console.log("missing number is ",sum-sum1);
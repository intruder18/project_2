var arr= [-10000,-34,-21,-45,-876,-123,-65,-3,-7,-23,-876];
var firstMax= Number.MIN_SAFE_INTEGER;
var secondMax= Number.MIN_SAFE_INTEGER;
for (var i=1;i<arr.length;i++)
{
    if(arr[i]>firstMax)
    {
        firstMax=arr[i];
    }
    if(arr[i]>secondMax && arr[i]<firstMax)
    {
        secondMax= arr[i];
    }
}
console.log(firstMax,secondMax);
var a= [1,2,3,4,56,7,8,9,10,12,14,16,23,45,65,98];
function binarySearch(arr,i,j,item)
{
var mid = parseInt((i+j)/2);
if(i>j)
{
return null;
}
else if(arr[mid]==item)
{
    return mid ;
}
else if(item<arr[mid])
{
    return binarySearch(arr,i,mid-1,item);
}
else if(item>arr[mid]) {
    return binarySearch(arr,mid+1,j,item);
}

}
var index = binarySearch(a,0,a.length-1,100);
console.log(index);

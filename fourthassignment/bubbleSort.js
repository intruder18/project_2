var arr= [3,2,1,4,6,5,9,8,7];
for(var i=0;i<=arr.length;i++)
{
    for (var j=0;j<arr.length-i;j++)
    {
        if(arr[j]>arr[j+1])
        {
            // var temp= arr[j];
            // arr[j]=arr[j+1];
            // arr[j+1]=temp;
            [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
        }
    }
}
console.log(arr);
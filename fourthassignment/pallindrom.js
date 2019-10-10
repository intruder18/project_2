var str = "abcbad"
var arr = str.split("").reverse().join("");
if(str===arr)
{
    console.log("palindromic sequence ");
    console.log(arr);

}
else
console.log("not a palindromic sequence");
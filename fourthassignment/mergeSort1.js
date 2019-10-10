var arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// Merge Sort Implentation 
function mergeSort(Arr) {

    if (Arr.length <= 1) {
        return Arr;
    }

    const middle = parseInt(Arr.length / 2);


    const left = Arr.slice(0, middle);
    const right = Arr.slice(middle, Arr.length);

    // Using recursion to combine the left and right
    return merge(
        mergeSort(left), mergeSort(right)
    );
}
function merge(left, right) {
    let resultArray = [], lIndx = 0, rIndx = 0;
    while (lIndx < left.length && rIndx < right.length) {
        if (left[lIndx] < right[rIndx]) {
            resultArray.push(left[lIndx]);
            lIndx++; // move left array cursor
        } else {
            resultArray.push(right[rIndx]);
            rIndx++; // move right array cursor
        }
    }

    // We need to concat here because there will be one element remaining
    // from either left OR the right
    return resultArray
        .concat(left.slice(lIndx),right.slice(rIndx));
        
}
arr = mergeSort(arr);
console.log(arr);
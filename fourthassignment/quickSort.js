var arr = [5, 3, 7, 6, 2, 9,745,10,1,90,71,1000];

function partition(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)], 
        i = left,
        j = right; 
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            [arr[i],arr[j]]=[arr[j],arr[i]];
            
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = partition(arr, left, right); 
        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) { 
            quickSort(arr, index, right);
        }
    }
    return arr;
}

var sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray);
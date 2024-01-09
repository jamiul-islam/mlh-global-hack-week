// write a function that takes an array of numbers and returns a sorted array using bubble sort
function bubbleSort(arr) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < arr.length - 1; i++) {
            let j = i + 1;
            if (arr[i] > arr[j]) {
                sorted = false;
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr; 
 
}

console.log(bubbleSort([3, 4, 9, 3, 1]));
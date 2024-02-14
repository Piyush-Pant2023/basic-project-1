function union(arr1, arr2) {
    // Concatenate the arrays and then convert them to a Set to remove duplicates
    const combinedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(combinedArray)];
    // Sort the array in ascending order
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

console.log(union([1, 2, 3], [100, 2, 1, 10]));
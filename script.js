const numbers = [1, 2, 3, 4, 5];
const target = 2;
let start = 0;
let end = numbers.length - 1;

const getAverageValue = (start, end) => ~~((start + end) / 2);

const binarySearch = (data, target, start, end) => {
    if(start > end) return -1;
    const mid = getAverageValue(start, end);
    if(target === data[mid]) return mid;
    if(target > data[mid]) return binarySearch(data, target, mid + 1, end);
    if(target < data[mid]) return binarySearch(data, target, start, mid - 1);
}

console.log(binarySearch(numbers, target, start, end));

// const binarySearch = (arr, target) => {
//     let start = 0;
//     let end = arr.length - 1;
    
//     while(start <= end){
//         let middle = Math.floor((end+start)/2);
//         let currentTarget = arr[middle];

//         if(target === currentTarget){
//             return middle;
//         }
//         else if(target > currentTarget){
//             start = middle + 1;
//         }
//         else{
//             end = middle - 1;
//         }       
//     }
//     return -1;
// }  

// console.log(binarySearch(numbers, target));
// console.log(Math.floor(2.777));
// console.log(~~2.777);

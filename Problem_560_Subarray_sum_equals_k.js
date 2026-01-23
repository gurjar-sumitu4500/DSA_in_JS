// var subarraySum = function (nums, k) {
//     let sums = {};
//     let numOfSubs = 0;
//     let currentSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         currentSum = currentSum + nums[i];
//         if (i !== 0 && currentSum == k) {    //This condition is replaced by the base condition
//             numOfSubs++;
//         }
//         if ((currentSum - k) in sums) {
//             numOfSubs += sums[currentSum - k];
//         } else if (nums[i] == k) {           //This condition also is replaced by the base condition
//             numOfSubs++;
//         }

//         if ((currentSum) in sums) {
//             sums[currentSum] += 1;
//         } else {
//             sums[currentSum] = 1;
//         }
//     }
//     return numOfSubs;
// }

//Improved version

var subarraySum = function (nums, k) {
    let n = nums.length;
    let prefixSumCount = new Map();
    let prefixSum = 0;
    let count = 0;
    prefixSumCount.set(0, 1); // for base case where it looks for prefixSum - k == 0;
    for (let i = 0; i < n; i++) {
        prefixSum += nums[i];
        const remove = prefixSum - k;
        if (prefixSumCount.has(remove)) {
            count += prefixSumCount.get(remove);
        }
        prefixSumCount.set(prefixSum, (prefixSumCount.get(prefixSum) || 0) + 1);
    }
    return count;
}
console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
console.log(subarraySum([1, 1, 1], 1));
console.log(subarraySum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 0));
// var majorityElement = function (nums) {
//     let obj = new Map();
//     let answer = new Set();
//     for (let i = 0; i < nums.length; i++) {
//         obj.set(nums[i], (obj.get(nums[i]) || 0) + 1);
//         if (obj.get(nums[i]) > Math.floor(nums.length / 3)) {
//             answer.add(nums[i]);
//         }
//     }
//     return [...answer];
// }

var majorityElement = function (nums) {
    let c1 = Infinity;
    let c2 = Infinity;
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == c1) {
            count1++;
        } else if (nums[i] == c2) {
            count2++;
        } else {
            if (count1 == 0) {
                c1 = nums[i];
                count1 = 1;
            } else if (count2 == 0) {
                c2 = nums[i];
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }
    }
    count1 = 0;
    count2 = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == c1) {
            count1++;
        }
        if (nums[i] == c2) {
            count2++;
        }
    }
    let majority = Math.floor((nums.length) / 3);
    let result = [];
    if (count1 > majority) result.push(c1);
    if (count2 > majority) result.push(c2);
    return result;
}

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == target) {
            return mid;
        }
        if (nums[mid] >= nums[low]) {             // >= instead of > in order to get through single element or two element cases this ensures correctness when mid == low
            if (nums[low] <= target && target < nums[mid]) {      // why < instead of <= because equality with mid is already checked above
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}
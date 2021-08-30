//second largest element
function getSecondLargest(nums) {
    let firstLargestNum = 0;
    let secondLargestNum = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > firstLargestNum) {
        secondLargestNum = firstLargestNum;
        firstLargestNum = nums[i];
      }
      if (nums[i] > secondLargestNum && nums[i] < firstLargestNum) {
        secondLargestNum = nums[i];
      }
    }
    return secondLargestNum;
}
const numbers = getSecondLargest([4, 5, 6, 8, 9])
console.log(numbers);
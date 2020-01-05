import { isPalindrome, setAnswerText } from '../helpers';

export async function startCalcQuestion4() {
    let largestVal = 0;
    let localSum = 0;

    for (let index = 999; index > 0; index--) {
      for (let innerIndex = index; innerIndex > 0; innerIndex--) {
        localSum = index * innerIndex;
        if (isPalindrome(localSum.toString())) {
          if (localSum > largestVal) {
            largestVal = localSum;
          }
        }
      }
    }

    setAnswerText(largestVal, 4);
  }

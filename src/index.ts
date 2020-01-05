import * as lib from './helperFunctions';
import 'bootstrap/dist/css/bootstrap.min.css';

export function startCalculation(input: Element) {
  var answerInput = input.nextElementSibling as HTMLInputElement;
  var questionNumber: number = Number(answerInput.id.split('-')[2]);
  switch (questionNumber) {
    case 1: {
      break;
    }
    case 2: {
      startCalcQuestion2();
      break;
    }
    case 3: {
      startCalcQuestion3();
      break;
    }
    case 4: {
      startCalcQuestion4();
      break;
    }
    case 5: {
      startCalcQuestion5();
      break;
    }
    case 6: {
      startCalcQuestion6();
      break;
    }
    default: {
      //statements;
      break;
    }
  }
}

export function startCalcQuestion2() {
  let continueCalc = true;
  let startV1 = 1;
  let startV2 = 2;
  let tempSum = 0;
  let answerSum = 0;
  while (continueCalc) {
    // 3 = 1 + 2
    tempSum = startV1 + startV2;
    // swap
    startV1 = startV2;
    startV2 = tempSum;

    if (startV1 === 2) {
      answerSum += startV1;
    }

    //check tempSum for > 4M
    if (tempSum > 4000000) {
      continueCalc = false;
      continue;
    }

    //check number for even
    if (lib.isOdd(tempSum)) {
      continue;
    }

    answerSum += tempSum;
  }

  lib.setAnswerText(answerSum, 2);
}

export function startCalcQuestion3() {
  var integer = 600851475143,
    primeArray = [];

  for (let i = 2; i <= integer; i++) {
    if (integer % i == 0) {
      if (lib.isPrime(i)) {
        //divide integer by prime factor & factor store in array primeArray
        integer /= i;
        primeArray.push(i);
      }
    }
  }

  lib.setAnswerText(primeArray[primeArray.length - 1], 3);
}

export function startCalcQuestion4() {
  var largestVal = 0,
    localSum = 0;

  for (let index = 999; index > 0; index--) {
    for (let innerIndex = index; innerIndex > 0; innerIndex--) {
      localSum = index * innerIndex;
      if (lib.isPalindrome(localSum.toString())) {
        if (localSum > largestVal) {
          largestVal = localSum;
        }
      }
    }
  }

  lib.setAnswerText(largestVal, 4);
}

export function startCalcQuestion5() {
  var stop = false;
  var startVal = 1;
  var allDivisible = true;
  while (!stop) {
    allDivisible = true;

    for (let index = 1; index <= 20 && allDivisible; index++) {
      if (startVal % index !== 0) {
        allDivisible = false;
      }
    }

    if (allDivisible === true) {
      stop = true;
    } else {
      startVal++;
    }
  }

  lib.setAnswerText(startVal, 5);
}

export function startCalcQuestion6() {
  var MAX_NATURAL = 100,
    sumOfNaturalsSquared,
    sumOfNaturalsThenSquared,
    totalDifference;

  const powReducer = (accumulator: number, currentValue: number) =>
    accumulator + Math.pow(currentValue, 2);
  const sumReducer = (accumulator: number, currentValue: number) =>
    accumulator + currentValue;

  var naturalArry = lib.buildNumberArrayFrom1ToN(MAX_NATURAL);

  sumOfNaturalsSquared = naturalArry.reduce(powReducer);
  sumOfNaturalsThenSquared = Math.pow(naturalArry.reduce(sumReducer), 2);

  totalDifference = sumOfNaturalsThenSquared - sumOfNaturalsSquared;

  lib.setAnswerText(totalDifference, 6);
}

export function startCalcQuestion7() {
  // about 8 seconds to run
  var startVal = 1,
    primeArray = [];
  while (primeArray.length !== 10000) {
    if (lib.isOdd(startVal)) {
      if (lib.isPrime(startVal)) {
        primeArray.push(startVal);
      }
    }

    startVal++;
  }

  lib.setAnswerText(primeArray[primeArray.length - 1], 7);
}

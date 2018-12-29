export function isOdd(value: number) {
  return value % 2;
}

export function isPrime(value: number) {
  // Corner cases
  if (value <= 1) return false;

  for (let i = 2; i < value; i++) {
    if (value % i == 0) return false;
  }

  return true;
}

export function isPalindrome(palString: string) {
  var isPal = true;

  var convertedAry = Array.from(palString).map(Number);

  if (isOdd(convertedAry.length)) {
    var midNumFloor = Math.floor(convertedAry.length / 2);
    convertedAry.splice(midNumFloor, 1);
  }

  for (let index = 0; index < convertedAry.length; index++) {
    const firstElement = convertedAry[index];
    const lastElement = convertedAry[convertedAry.length - (index + 1)];

    if (firstElement !== lastElement) {
      isPal = false;
    }
  }

  return isPal;
}

export function buildNumberArrayFrom1ToN(length: number) {
  return Array.from(Array(length), (e, i) => i + 1);
}

export function setAnswerText(answerSum: number, questionNumber: number) {
  const ans2 = document.querySelector(`#answer-question-${questionNumber}`);
  if (ans2) {
    ans2.textContent = answerSum.toString();
  }
}

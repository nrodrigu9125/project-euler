import { isOdd, isPrime, setAnswerText } from "../helpers";

export async function startCalcQuestion7() {
    // about 8 seconds to run
    var startVal = 1,
      primeArray = [];
    while (primeArray.length !== 10000) {
      if (isOdd(startVal)) {
        if (isPrime(startVal)) {
          primeArray.push(startVal);
        }
      }
  
      startVal++;
    }
  
    setAnswerText(primeArray[primeArray.length - 1], 7);
  }
  
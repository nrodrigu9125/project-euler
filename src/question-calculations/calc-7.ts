import { isOdd, isPrime, setAnswerText } from '../helpers';
import { ICalculation } from '../interfaces/calculation';

export class Question7Calculation implements ICalculation {
  public async calculate() {
    // about 8 seconds to run
    let startVal = 1;
    const primeArray: number[] = [];
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
}

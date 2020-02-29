import { setAnswerText } from '../helpers';
import { ICalculation } from '../interfaces/calculation';

export class Question5Calculation implements ICalculation {
  public async calculate() {
    let stop = false;
    let startVal = 1;
    let allDivisible = true;

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

    setAnswerText(startVal, 5);
  }
}

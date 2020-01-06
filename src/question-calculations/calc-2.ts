import { isOdd, setAnswerText } from '../helpers';
import { ICalculation } from '../interfaces/calculation';

export class Question2Calculation implements ICalculation {
  public async calculate() {
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

      // check tempSum for > 4M
      if (tempSum > 4000000) {
        continueCalc = false;
        continue;
      }

      // check number for even
      if (isOdd(tempSum)) {
        continue;
      }

      answerSum += tempSum;
    }

    setAnswerText(answerSum, 2);
  }
}

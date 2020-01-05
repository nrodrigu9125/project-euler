import 'bootstrap/dist/css/bootstrap.min.css';
import { CardState } from './enums';
import {
  startCalcQuestion2,
  startCalcQuestion3,
  startCalcQuestion4,
  startCalcQuestion5,
  startCalcQuestion6,
  startCalcQuestion7
} from './question-calculations';
import { setCardBodyState } from './helpers';

export async function startCalculation(buttonInput: HTMLInputElement) {
  var answerInput = buttonInput.nextElementSibling as HTMLInputElement;
  var questionNumber: number = Number(answerInput.id.split('-')[2]);

  await setCardBodyState(CardState.Busy, buttonInput);

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  await promise;

  switch (questionNumber) {
    case 1: {
      break;
    }
    case 2: {
      await startCalcQuestion2();
      break;
    }
    case 3: {
      await startCalcQuestion3();
      break;
    }
    case 4: {
      await startCalcQuestion4();
      break;
    }
    case 5: {
      await startCalcQuestion5();
      break;
    }
    case 6: {
      await startCalcQuestion6();
      break;
    }
    case 7: {
      await startCalcQuestion7();
      break;
    }
    default: {
      break;
    }
  }

  await setCardBodyState(CardState.NotBusy, buttonInput);
}

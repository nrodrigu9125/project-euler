import 'bootstrap/dist/css/bootstrap.min.css';
import { CardState } from './enums';
import { setCardBodyState } from './helpers';
import {
  startCalcQuestion2,
  startCalcQuestion3,
  startCalcQuestion4,
  startCalcQuestion5,
  startCalcQuestion6,
  startCalcQuestion7,
} from './question-calculations';

export async function startCalculation(buttonInput: HTMLInputElement) {
  const answerInput = buttonInput.nextElementSibling as HTMLInputElement;
  const questionNumber: number = Number(answerInput.id.split('-')[2]);

  await setCardBodyState(CardState.Busy, buttonInput);

  const promise = new Promise((resolve) => {
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

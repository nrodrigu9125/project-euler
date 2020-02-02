import 'bootstrap/dist/css/bootstrap.min.css';
import { CardState } from './enums';
import { setCardBodyState } from './helpers';
import { ICalculation } from './interfaces/calculation';
import { InstanceLoader } from './models/instanceLoader';

export async function startCalculation(buttonInput: HTMLInputElement) {
  const answerInput = buttonInput.nextElementSibling as HTMLInputElement;
  const questionNumber: number = Number(answerInput.id.split('-')[2]);

  setCardBodyState(CardState.Busy, buttonInput);

  const uiUpdatePromise = new Promise((resolve) => {
    setTimeout(() => resolve('done!'), 10);
  });

  await uiUpdatePromise;

  const classString = `Question${questionNumber}Calculation`;

  const loader = new InstanceLoader<ICalculation>();
  let dynamicCalculationStrategy: ICalculation;
  try {
    dynamicCalculationStrategy = loader.getInstance(classString);
  } catch (error) {
    alert('Fatal error running dynamic class creation!');
    setCardBodyState(CardState.NotBusy, buttonInput);
    return;
  }

  await dynamicCalculationStrategy
    .calculate()
    .then(() => setCardBodyState(CardState.NotBusy, buttonInput));
}

import { CardState } from '../enums';

export function setAnswerText(answerSum: number, questionNumber: number) {
  const htmlElement = document.querySelector(
    `#answer-question-${questionNumber}`,
  );
  if (htmlElement && htmlElement instanceof HTMLInputElement) {
    (htmlElement as HTMLInputElement).value = answerSum.toString();
  }
}

export async function setCardBodyState(
  state: CardState,
  buttonInput: HTMLInputElement,
) {
  if (buttonInput.parentElement) {
    // <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>

    const allInputChildren: HTMLInputElement[] = [
      ...buttonInput.parentElement.getElementsByTagName('input'),
    ];
    const allButtonChildren: HTMLButtonElement[] = [
      ...buttonInput.parentElement.getElementsByTagName('button'),
    ];

    if (state === CardState.Busy) {
      const span = document.createElement('span');
      span.setAttribute('class', 'ml-2 spinner-border spinner-border-sm');

      allInputChildren.forEach((childInput) => {
        childInput.disabled = true;
      });
      allButtonChildren.forEach((childButton) => {
        childButton.disabled = true;
        childButton.appendChild(span);
      });
    } else {
      allInputChildren.forEach((childInput) => {
        childInput.disabled = false;
      });
      allButtonChildren.forEach((childButton) => {
        childButton.disabled = false;
        childButton.removeChild(childButton.firstElementChild as Node);
      });
    }
  }
}

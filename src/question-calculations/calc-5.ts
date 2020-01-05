import { setAnswerText } from "../helpers";

export async function startCalcQuestion5() {
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
  
    setAnswerText(startVal, 5);
  }
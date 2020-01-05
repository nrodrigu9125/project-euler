import { buildNumberArrayFrom1ToN, setAnswerText } from "../helpers";

export async function startCalcQuestion6() {
    var MAX_NATURAL = 100,
      sumOfNaturalsSquared,
      sumOfNaturalsThenSquared,
      totalDifference;
  
    const powReducer = (accumulator: number, currentValue: number) =>
      accumulator + Math.pow(currentValue, 2);
    const sumReducer = (accumulator: number, currentValue: number) =>
      accumulator + currentValue;
  
    var naturalArry = buildNumberArrayFrom1ToN(MAX_NATURAL);
  
    sumOfNaturalsSquared = naturalArry.reduce(powReducer);
    sumOfNaturalsThenSquared = Math.pow(naturalArry.reduce(sumReducer), 2);
  
    totalDifference = sumOfNaturalsThenSquared - sumOfNaturalsSquared;
  
    setAnswerText(totalDifference, 6);
  }
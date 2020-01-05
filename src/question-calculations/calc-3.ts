import { isPrime, setAnswerText } from "../helpers";

export async function startCalcQuestion3() {
    var integer = 600851475143,
      primeArray = [];
  
    for (let i = 2; i <= integer; i++) {
      if (integer % i == 0) {
        if (isPrime(i)) {
          //divide integer by prime factor & factor store in array primeArray
          integer /= i;
          primeArray.push(i);
        }
      }
    }
  
    setAnswerText(primeArray[primeArray.length - 1], 3);
  }
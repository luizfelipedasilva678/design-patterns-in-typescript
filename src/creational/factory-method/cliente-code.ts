import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const customersNames = ['Ana', 'Joana', 'Helena', 'João'];

for (let i = 0; i < 10; i++) {
  const car = randomCarAlgorithm();
  const name = customersNames[randomNumbers(customersNames.length)];
  car.pickUp(name);
  car.stop();
  console.log('---');
}

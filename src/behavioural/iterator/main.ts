import { MyDataStructure } from './my-data-structure';

const dataStructure = new MyDataStructure();
dataStructure.addItem('A', 'B', 'C', 'D');

const [a, b] = dataStructure;

console.log('Roubados', a, b);
console.log();

for (const data of dataStructure) {
  console.log(data);
}
console.log();

for (const data of dataStructure) {
  console.log(data);
}

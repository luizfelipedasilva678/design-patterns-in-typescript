import { MainDishBuilder } from './classes/main-dish-builder';
import { MealBox } from './classes/meal-box';
import { Rice, Beans, Meat } from './classes/meals';
import { VeganDishBuilder } from './classes/vegan-builder';

const mainDishBuilder = new MainDishBuilder();
const veganDishBuilder = new VeganDishBuilder();

mainDishBuilder.makeMeal().makeDessert();

console.log(mainDishBuilder.getMeal().getPrice());
console.log(veganDishBuilder.makeMeal().getMeal());

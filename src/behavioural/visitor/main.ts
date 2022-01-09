import { AlcoholicDrink } from './alcoholic-drink';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { Cigarette } from './cigarette';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const alcoholic = new AlcoholicDrink(5);

const brazilTaxVisitor = new BrazilTaxVisitor();

const cart = [food, cigarette, alcoholic];
const totalWithTaxes = cart.reduce(
  (sum, item) => item.getPriceWithTaxes(brazilTaxVisitor) + sum,
  0,
);
console.log(totalWithTaxes);

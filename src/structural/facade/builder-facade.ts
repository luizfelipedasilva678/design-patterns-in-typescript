import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-builder';

export class BuilderFacade {
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal(): void {
    this.mainDishBuilder.makeMeal().makeDessert();
    console.log(this.mainDishBuilder.getMeal().getPrice());
  }

  makeMeal2(): void {
    console.log(this.veganDishBuilder.makeMeal().getMeal());
  }
}

import { SmartHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-ligth';

export class LightIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}

  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(`Intensidade da luz ${this.light.name} é ${intensity}`);
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(`Intensidade da luz ${this.light.name} é ${intensity}`);
  }
}

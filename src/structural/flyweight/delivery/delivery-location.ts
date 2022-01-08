import { DelivaryLocationData } from './delivary-types';
import { DeliveryFlyWeight } from './delivery-flywight';

export class DeliveryLocation implements DeliveryFlyWeight {
  constructor(private readonly intrinsicState: DelivaryLocationData) {}

  deliver(name: string, number: string): void {
    console.log('Entrega para %s', name);
    console.log('Em', this.intrinsicState.street, this.intrinsicState.city);
    console.log('Número:', number);
    console.log('#####');
  }
}

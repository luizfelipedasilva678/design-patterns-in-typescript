import {
  DelivaryLocationData,
  DeliveryLocationDictionary,
} from './delivary-types';
import { DeliveryFlyWeight } from './delivery-flywight';
import { DeliveryLocation } from './delivery-location';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DelivaryLocationData): string {
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLocaleLowerCase())
      .join('_');
  }

  makeLocation(intrinsicState: DelivaryLocationData): DeliveryFlyWeight {
    const key = this.createId(intrinsicState);

    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}

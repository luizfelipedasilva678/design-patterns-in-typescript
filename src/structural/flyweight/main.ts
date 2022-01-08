import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();

deliveryContext(factory, 'Luiz', '20A', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av. Brasil', 'SP');
deliveryContext(factory, 'Helena', '20A', 'Av. Brasil2', 'SP');

console.log();
console.log(factory.getLocations());

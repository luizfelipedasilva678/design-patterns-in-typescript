import { Customer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { AbstractVehicle } from '../vehicle/abstract-vehicle';
import { IndividualCar } from '../vehicle/individual-car';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): AbstractVehicle {
    const customer = this.createCustomer(customerName);
    return new IndividualCar(vehicleName, customer);
  }
}

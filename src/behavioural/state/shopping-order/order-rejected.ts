import { ShoppingOrder } from './shopping-order';
import { ShippingOrderState } from './shopping-order-state';

export class OrderRejected implements ShippingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    console.log('Não posso aprovar o pedido o pedido foi recusado');
  }

  rejectPayment(): void {
    console.log('Não posso recusar o pedido o pedido foi recusado');
  }

  waitPayment(): void {
    console.log(
      'Não posso mover para pendente porque o pedido o pedido foi recusado',
    );
  }

  shipOrder(): void {
    console.log('Pedido recusado');
  }
}

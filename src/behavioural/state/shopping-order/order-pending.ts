import { OrderApproved } from './order-approved';
import { OrderRejected } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { ShippingOrderState } from './shopping-order-state';

export class OrderPending implements ShippingOrderState {
  private name = 'OrderPending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new OrderApproved(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new OrderRejected(this.order));
  }

  waitPayment(): void {
    console.log('O pedido já está no estado pagamento pendente');
  }

  shipOrder(): void {
    console.log('Não posso enviar o pedido pagamento pendente');
  }
}

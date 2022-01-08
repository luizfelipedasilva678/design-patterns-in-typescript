import { OrderPending } from './order-pending';
import { ShippingOrderState } from './shopping-order-state';

export class ShoppingOrder {
  private state: ShippingOrderState = new OrderPending(this);

  getState(): ShippingOrderState {
    return this.state;
  }

  setState(state: ShippingOrderState): void {
    this.state = state;
    console.log(`O estado do pedido agora é ${this.getStateName()}`);
  }

  getStateName(): string {
    return this.state.getName();
  }

  approvePayment(): void {
    this.state.approvePayment();
  }

  rejectPayment(): void {
    this.state.rejectPayment();
  }

  waitPayment(): void {
    this.state.waitPayment();
  }

  shipOrder(): void {
    this.state.shipOrder();
  }
}

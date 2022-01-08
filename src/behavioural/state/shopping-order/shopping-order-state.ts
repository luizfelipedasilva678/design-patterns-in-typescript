export interface ShippingOrderState {
  getName(): string;
  approvePayment(): void;
  rejectPayment(): void;
  waitPayment(): void;
  shipOrder(): void;
}

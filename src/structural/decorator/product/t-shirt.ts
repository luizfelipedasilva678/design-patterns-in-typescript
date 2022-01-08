import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  private price = 10.9;
  private name = 'TShirt';

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}

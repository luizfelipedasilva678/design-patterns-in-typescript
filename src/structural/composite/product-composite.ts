export abstract class ProductComponent {
  abstract getPrice(): number;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  add(product: ProductComponent): void {}
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  remove(product: ProductComponent): void {}
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

export class ProductComposed extends ProductComponent {
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);
    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }

  getPrice() {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
}

const camiseta = new ProductLeaf('Camiseta', 40);
const bicicleta = new ProductLeaf('bicicleta', 40);
const carro = new ProductLeaf('Carro', 40000);
const productBox = new ProductComposed();
productBox.add(camiseta, bicicleta, carro);
console.log(productBox);

const tablet = new ProductLeaf('Tablet', 2000);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposed();
anotherProductBox.add(tablet, kindle);
productBox.add(anotherProductBox);

console.log(productBox);

import { ProductCustomizationDecorator } from './product/product-customization-decorator';
import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithStamp = new ProductStampDecorator(tShirt);
const tShirtWithStampFrontAndBack = new ProductStampDecorator(tShirtWithStamp);
const tShirtCustomization = new ProductCustomizationDecorator(
  tShirtWithStampFrontAndBack,
);
console.log(tShirt.getPrice());

console.log(
  tShirtWithStampFrontAndBack.getPrice() + '\n',
  tShirtWithStampFrontAndBack.getName() + '\n',
  tShirtCustomization.getName(),
);

import { ProductType } from '../types';
import { addStorage, getStorage } from '../services/ProductStorage';
import { ButtonCart } from './ButtonCart';

type ProductProps = {
  product: ProductType;
  showButton: boolean;
};

export function ProductCard({ product, showButton }: ProductProps) {
  const handleClick = (value: ProductType) => {
    addStorage<ProductType>('products', value);
    console.log(getStorage('products'));
  };

  return (
    <div data-testid="product">
      <h5>{product.title}</h5>
      <img src={ product.thumbnail } alt={ product.title } />
      <p>{product.quantity}</p>
      <p>{product.price}</p>
      {showButton && <ButtonCart handleClick={ handleClick } product={ product } />}

    </div>
  );
}

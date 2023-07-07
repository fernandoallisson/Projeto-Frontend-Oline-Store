import { ProductType } from '../types';
import { ProductCard } from './ProductCard';

type ProductListProps = {
  products: ProductType[];
  showButton: boolean;
};

export function ProductList({ products, showButton }: ProductListProps) {
  return (
    <div>
      {
        products.map((product) => (<ProductCard
          key={ product.id }
          product={ product }
          showButton={ showButton }
        />))
      }
    </div>
  );
}

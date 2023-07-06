import { ProductType } from '../types';
import { ProductCard } from './ProductCard';

type ProductListProps = {
  products: ProductType[]
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div>
      {
        products.map((product) => <ProductCard key={ product.id } product={ product } />)
      }
    </div>
  );
}

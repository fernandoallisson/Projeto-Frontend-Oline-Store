import { ProductType } from '../types';

type ProductProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductProps) {
  return (
    <div data-testid="product">
      <h4>{product.title}</h4>
      <img src={ product.thumbnail } alt={ product.title } />
    </div>
  );
}

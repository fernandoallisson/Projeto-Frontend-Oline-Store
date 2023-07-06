import { ProductType } from '../types';

type ProductProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductProps) {
  return (
    <div data-testid="product">
      <h5>{product.title}</h5>
      <img src={ product.thumbnail } alt={ product.title } />
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { ProductType } from '../types';

type ProductProps = {
  product: ProductType;
};

export function ProductCard({ product }: ProductProps) {
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/productDetail/${product.id}`);
  };
  return (
    <>
      <div data-testid="product">
        <h5>{product.title}</h5>
        <img src={ product.thumbnail } alt={ product.title } />

      </div>
      <button data-testid="product-detail-link" onClick={ redirect }>
        Detalhes
      </button>

    </>

  );
}

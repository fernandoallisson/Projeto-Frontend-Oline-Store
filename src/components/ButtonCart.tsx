import { ProductType } from '../types';

type ButtonCartProps = {
  handleClick: (product: ProductType) => void;
  product: ProductType;
};

export function ButtonCart({ handleClick, product }: ButtonCartProps) {
  return (
    <button
      data-testid="product-add-to-cart"
      onClick={ () => handleClick(product) }
    >
      Adicionar ao Carrinho
    </button>
  );
}

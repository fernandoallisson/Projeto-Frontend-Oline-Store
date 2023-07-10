import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ProductType } from '../types';
import { addStorage, removeProduct } from '../services/productStorage';
import { ButtonCart } from './ButtonCart';

type ProductProps = {
  product: ProductType;
  showButton: boolean;
  quantity?: number;
  handleRemoveProduct: () => void
};

export function ProductCard({ product,
  showButton, quantity: propQuantity = 0, handleRemoveProduct }: ProductProps) {
  const navigate = useNavigate();
  const [quantitys, setQuantitys] = useState<number>(propQuantity);

  const handleClick = (value: ProductType) => {
    const { id, title, thumbnail, price } = value;
    const updatedProduct: ProductType = {
      id,
      title,
      thumbnail,
      price,
      quantity: quantitys,
    };
    addStorage<ProductType>('products', updatedProduct);
  };

  const redirect = () => {
    navigate(`/productDetail/${product.id}`);
  };

  const increaseQuantity = () => {
    const updatedQuantity = quantitys + 1;
    setQuantitys(updatedQuantity);
    handleClick({ ...product, quantity: updatedQuantity });
  };

  const decreaseQuantity = () => {
    if (quantitys > 1) {
      removeProduct(product.id, 'products');
      setQuantitys((prevState) => prevState - 1);
    }
  };

  const testId = 'shopping-cart-product-quantity';

  return (
    <div data-testid="product">
      <button
        data-testid="remove-product"
        onClick={ handleRemoveProduct }
      >
        Remover
      </button>
      <h5 data-testid="shopping-cart-product-name">{product.title}</h5>
      <img src={ product.thumbnail } alt={ product.title } />
      {propQuantity > 0 && <p data-testid={ testId }>{ quantitys }</p>}
      <p>{product.price}</p>
      {showButton && <ButtonCart handleClick={ handleClick } product={ product } />}
      <button data-testid="product-detail-link" onClick={ redirect }>
        Detalhes
      </button>
      <button
        data-testid="product-increase-quantity"
        onClick={ increaseQuantity }
      >
        +
      </button>

      <button
        data-testid="product-decrease-quantity"
        onClick={ decreaseQuantity }
      >
        -
      </button>
    </div>
  );
}

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ProductType } from '../types';
import { addStorage, getStorage } from '../services/ProductStorage';
import { ButtonCart } from './ButtonCart';

type ProductProps = {
  product: ProductType;
  showButton: boolean;
  quantity?: number;
};

export function ProductCard({ product,
  showButton, quantity: propQuantity = 0 }: ProductProps) {
  const navigate = useNavigate();

  const handleClick = (value: ProductType) => {
    const { id, title, thumbnail, price, quantity } = value;
    const filterProduct = { id, title, thumbnail, price, quantity };
    addStorage<ProductType>('products', filterProduct);
    console.log(getStorage('products'));
  };

  const redirect = () => {
    navigate(`/productDetail/${product.id}`);
  };

  return (
    <div data-testid="product">
      <h5 data-testid="shopping-cart-product-name">{product.title}</h5>
      <img src={ product.thumbnail } alt={ product.title } />
      {propQuantity > 0 && <p>{propQuantity}</p>}
      <p>{product.price}</p>
      {showButton && <ButtonCart handleClick={ handleClick } product={ product } />}
      <button data-testid="product-detail-link" onClick={ redirect }>
        Detalhes
      </button>
    </div>
  );
}

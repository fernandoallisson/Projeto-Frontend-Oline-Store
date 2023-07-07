import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../types';
import { getStorage } from '../services/productStorage';
import { ProductList } from '../components/ProductList';

export function ShoppingCart() {
  const [products, setProducts] = useState<ProductType[]>();
  const navigate = useNavigate();

  const redirectCheckout = () => {
    navigate('/productDetail/checkout');
  };

  useEffect(() => {
    const storageProducts = getStorage('products');
    if (!storageProducts) return;
    setProducts(storageProducts);
  }, []);

  if (!products) {
    return (
      <p data-testid="shopping-cart-empty-message"> Seu carrinho está vazio</p>
    );
  }

  return (
    <>
      <div>
        <ProductList products={ products } showButton={ false } />
      </div>
      <button
        data-testid="checkout-products"
        onClick={ redirectCheckout }
      >
        Finalizar compra
      </button>

    </>
  );
}

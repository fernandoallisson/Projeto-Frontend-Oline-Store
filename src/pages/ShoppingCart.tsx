import { useEffect, useState } from 'react';
import { ProductType } from '../types';
import { getStorage } from '../services/ProductStorage';
import { ProductList } from '../components/ProductList';

export function ShoppingCart() {
  const [products, setProducts] = useState<ProductType[]>();

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
    <div>
      <ProductList products={ products } showButton={ false } />
    </div>
  );
}

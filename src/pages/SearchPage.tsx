import { useState } from 'react';
import { NotFoundProducts } from '../components/NotFoundProducts';
import { Categories } from '../components/Categories';

export function SearchPage() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <input type="text" />
      <div>
        { products.length === 0
          ? <NotFoundProducts />
          : <p>Sem Produtos</p>}
      </div>
      <Categories />
    </>
  );
}

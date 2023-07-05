import { useState } from 'react';
import { NotFoundProducts } from '../components/NotFoundProducts';

export function SearchPage() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <input type="text" />
      <div>
        { products.length === 0
          ? <NotFoundProducts />
          : <p>teste</p>}
      </div>
    </>
  );
}

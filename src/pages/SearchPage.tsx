import { useState } from 'react';
import { NotFoundProducts } from '../components/NotFoundProducts';

export function SearchPage() {
  const [product, setProducts] = useState([]);
  return (
    <div>
      { product.length === 0
        ? <NotFoundProducts />
        : <p>teste</p>}
    </div>
  );
}

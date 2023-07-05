import { useState } from 'react';
import { NotFoundProducts } from '../components/NotFoundProducts';
import { getCategories } from '../services/api';

export async function SearchPage() {
  const [product, setProducts] = useState([]);

  const searchProduct = async () => {
    const [data] = await getCategories();
    setProducts(data.name);
  };

  return (
    <>
      <input type="text" />
      <div>
        { product.length === 0
          ? <NotFoundProducts />
          : <p>teste</p>}
      </div>
    </>
  );
}

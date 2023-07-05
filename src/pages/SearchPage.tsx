import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundProducts } from '../components/NotFoundProducts';

export function SearchPage() {
  const [product, setProducts] = useState([]); //

  const navigate = useNavigate();

  const redirect = () => {
    navigate('/shoppingCart');
  };
  return (
    <>
      <input type="text" />
      <div>
        { product.length === 0
          ? <NotFoundProducts />
          : <p>teste</p>}
      </div>
      <button
        data-testId="shopping-cart-button"
        onClick={ redirect }
      >
        Carrinho de Compras

      </button>
    </>
  );
}

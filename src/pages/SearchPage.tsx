import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundProducts } from '../components/NotFoundProducts';
import { Categories } from '../components/Categories';

export function SearchPage() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  const redirect = () => {
    navigate('/shoppingCart');
  };
  return (
    <>
      <input type="text" />
      <div>
        { products.length === 0
          ? <NotFoundProducts />
          : <p>Sem Produtos</p>}
      </div>
      <button
        data-testId="shopping-cart-button"
        onClick={ redirect }
      >
        Carrinho de Compras
      </button>
      <Categories />
    </>
  );
}

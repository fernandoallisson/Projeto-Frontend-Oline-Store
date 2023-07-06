import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundProducts } from '../components/NotFoundProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';

export function SearchPage() {
  const [product, setProducts] = useState([]);
  const [productSearch, setProductSearch] = useState('');
  const navigate = useNavigate();

  const redirect = () => {
    navigate('/shoppingCart');
  };

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setProductSearch(value);
  };

  const handleClick = async (search: string) => {
    const result:[] = await getProductsFromCategoryAndQuery(search);
    console.log(result);
  };
  return (
    <>
      <input
        type="text"
        data-testid="query-input"
        value={ productSearch }
        onChange={ handleChange }

      />
      <button
        data-testid="query-button"
        onClick={ () => handleClick(productSearch) }
      >
        Procurar
      </button>
      <div>
        { product.length === 0
          ? <NotFoundProducts />
          : <p>teste</p>}
      </div>
      <button
        data-testid="shopping-cart-button"
        onClick={ redirect }
      >
        Carrinho de Compras
      </button>

    </>
  );
}

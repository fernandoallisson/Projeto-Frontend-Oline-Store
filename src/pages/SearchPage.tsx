import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NotFoundProducts } from '../components/NotFoundProducts';
import { getProductsFromCategoryAndQuery } from '../services/api';
import { ProductList } from '../components/ProductList';
import { Categories } from '../components/Categories';
import { ProductType } from '../types';

export function SearchPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
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
    const dataResponse = await getProductsFromCategoryAndQuery(search);
    setProducts(dataResponse.results);
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
        { products.length === 0
          ? <NotFoundProducts />
          : <ProductList products={ products } />
      </div>
      <button
        data-testid="shopping-cart-button"
        onClick={ redirect }
      >
        Carrinho de Compras
      </button>
      <Categories />
    </>
  );
}

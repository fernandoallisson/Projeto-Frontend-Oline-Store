import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import { ProductType } from '../types';
import { ButtonCart } from '../components/ButtonCart';
import { addStorage } from '../services/productStorage';

const DEFAULT_PRODUCT = {
  id: 'defaultProduct',
  thumbnail: 'defaultProduct',
  title: 'defaultProduct',
  price: 0,
  quantity: 0,
};

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>(DEFAULT_PRODUCT);
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/shoppingCart');
  };

  const handleClick = (value: ProductType) => {
    const { title, thumbnail, price, quantity } = value;
    const filterProduct = { id: value.id, title, thumbnail, price, quantity };
    addStorage<ProductType>('products', filterProduct);
  };

  useEffect(() => {
    getProductById(id ?? '').then((productResult) => {
      setProduct(productResult as ProductType);
    });
  }, [id]);

  return (
    <div>
      <h1 data-testid="product-detail-name">{ product?.title}</h1>
      <h1 data-testid="product-detail-price">
        - R$
        {' '}
        {product?.price}
      </h1>
      <img
        data-testid="product-detail-image"
        src={ product?.thumbnail }
        alt="imagem do produto"
      />
      <button
        data-testid="product-detail-add-to-cart"
        onClick={ () => handleClick(product) }
      >
        Adicionar ao Carrinho
      </button>
      <button
        data-testid="shopping-cart-button"
        onClick={ redirect }
      >
        Carrinho de Compras
      </button>
    </div>
  );
}

import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import { ProductType } from '../types';

export function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType>();
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/shoppingCart');
  };

  useEffect(() => {
    getProductById(id ?? '').then((productResult) => {
      setProduct(productResult as ProductType);
    });
  }, [id]);

  console.log(product);
  return (
    <>
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
        data-testid="shopping-cart-button"
        onClick={ redirect }
      >
        Carrinho de Compras
      </button>

    </>
  );
}

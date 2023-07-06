import { useNavigate } from 'react-router-dom';

export function ProductDetail() {
  const navigate = useNavigate();
  const redirect = () => {
    navigate('/shoppingCart');
  };

  return (
    <button
      data-testid="shopping-cart-button"
      onClick={ redirect }
    >
      Carrinho de Compras
    </button>
  );
}

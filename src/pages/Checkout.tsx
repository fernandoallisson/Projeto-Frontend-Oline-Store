import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getStorage } from '../services/productStorage';
import { ProductType } from '../types';

export function Checkout() {
  const [error, setError] = useState('');
  const [products, setProducts] = useState<ProductType[]>([]);
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const storedProducts = getStorage('products');
    if (storedProducts) {
      setProducts(storedProducts);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = formRef.current;
    if (form && !form.checkValidity()) {
      setError('Campos inválidos');
    } else {
      setError('');
      navigate('/');
      localStorage.clear();
    }
  };
  return (
    <>
      <div>
        <h2>Revise seus Produtos</h2>
        {products.length > 0 ? (
          <ul>
            {products.map((product, index) => (
              <li key={ index }>{product.title}</li>
            ))}
          </ul>
        ) : (
          <p>Nenhum produto encontrado</p>
        )}
      </div>
      <div>
        <h2>Informações do Comprador</h2>

        <form id="clientForm" ref={ formRef }>
          <input
            type="text"
            placeholder="Nome Completo"
            data-testid="checkout-fullname"
            required
          />
          <input
            type="email"
            placeholder="E-mail"
            data-testid="checkout-email"
            required
          />
          <input
            type="text"
            placeholder="CPF"
            data-testid="checkout-cpf"
            required
          />
          <input
            type="text"
            placeholder="Telefone"
            data-testid="checkout-phone"
            required
          />
          <input
            type="text"
            placeholder="CEP"
            data-testid="checkout-cep"
            required
          />
          <input
            type="text"
            placeholder="Endereço"
            data-testid="checkout-address"
            required
          />

          <div>
            <h2>Método de Pagamento</h2>
            <input
              type="radio"
              id="option1"
              name="paymentMethod"
              value="option1"
              data-testid="ticket-payment"
              required
            />
            <label htmlFor="option1">Boleto</label>
            <input
              type="radio"
              id="option2"
              name="paymentMethod"
              value="option2"
              data-testid="visa-payment"
              required
            />
            <label htmlFor="option2">Visa</label>
            <input
              type="radio"
              id="option3"
              name="paymentMethod"
              value="option3"
              data-testid="master-payment"
              required
            />
            <label htmlFor="option3">Mastercard</label>
            <input
              type="radio"
              id="option4"
              name="paymentMethod"
              value="option4"
              data-testid="elo-payment"
              required
            />
            <label htmlFor="option4">Elo</label>
          </div>
          <button
            type="submit"
            onClick={ handleSubmit }
            data-testid="checkout-btn"
          >
            Comprar
          </button>
          {error && <p data-testid="error-msg">{error}</p>}
        </form>
      </div>
    </>
  );
}

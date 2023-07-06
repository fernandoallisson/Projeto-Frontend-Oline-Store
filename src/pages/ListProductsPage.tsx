import { useNavigate } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

function ListProductsPage() {
  const navigate = useNavigate();

  return (
    <div>
      <input type="text" />
      <button onClick={ () => navigate('/products/add') }>Add Product</button>
    </div>
  );
}

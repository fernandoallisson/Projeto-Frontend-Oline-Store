import { Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { ShoppingCart } from './pages/ShoppingCart';
import { ProductDetail } from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ SearchPage } />
      <Route path="/shoppingCart" Component={ ShoppingCart } />
      <Route path="/productDetail/:id" Component={ ProductDetail } />
    </Routes>
  );
}

export default App;

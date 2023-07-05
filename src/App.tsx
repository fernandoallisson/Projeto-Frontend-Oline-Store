import { Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';
import { ShoppingCart } from './components/ShoppingCart';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ SearchPage } />
      <Route path="/shoppingCart" Component={ ShoppingCart } />
    </Routes>
  );
}

export default App;

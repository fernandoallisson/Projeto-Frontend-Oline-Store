import { Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" Component={ SearchPage } />
    </Routes>
  );
}

export default App;

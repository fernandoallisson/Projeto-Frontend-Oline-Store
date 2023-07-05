import { Routes, Route } from 'react-router-dom';
import { SearchPage } from './pages/SearchPage';

import './App.css';

export function App() {
  return (
    <Routes>
      <Route path="/" Component={ SearchPage } />
    </Routes>
  );
}

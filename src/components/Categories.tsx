import { useState, useEffect } from 'react';
import { getCategories } from '../services/api';
import { CategoryType } from '../types';

export function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);

  const searchProduct = async () => {
    const dataCategories = await getCategories();
    setCategories(dataCategories);
  };

  useEffect(() => {
    searchProduct();
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <button
          key={ category.id }
          data-testid="category"
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}

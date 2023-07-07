import { useState, useEffect } from 'react';
import { getCategories, getProductsFromCategory } from '../services/api';
import { CategoryType, ProductType } from '../types';
import { ProductList } from './ProductList';

export function Categories() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');

  const searchCategories = async () => {
    const dataCategories = await getCategories();
    setCategories(dataCategories);
  };

  const searchProducts = async (categoryId: string) => {
    const productsFromCategory = await getProductsFromCategory(categoryId);
    setProducts(productsFromCategory.results);
  };

  useEffect(() => {
    searchCategories();
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      searchProducts(selectedCategoryId);
    }
  }, [selectedCategoryId]);

  const handleClickButtonCategory = (id: string) => {
    setSelectedCategoryId(id);
  };

  return (
    <>
      <div>
        {categories.map((category) => (
          <button
            key={ category.id }
            id={ category.id }
            data-testid="category"
            onClick={ () => handleClickButtonCategory(category.id) }
          >
            {category.name}
          </button>
        ))}
      </div>
      <div>
        <ProductList products={ products } showButton />
      </div>
    </>
  );
}

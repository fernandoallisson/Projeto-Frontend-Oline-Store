import { CategoryType } from '../types';

export const getCategories = async () => {
  const responseApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');

  const dataJson: CategoryType[] = await responseApi.json();
  return dataJson;
};

export const getProductsFromCategoryAndQuery = async (
  categoryId: string,
  query: string,
) => {
  const responseApi = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const responseApiJson = await responseApi.json();

  return responseApiJson;
};

export const getProductById = async (productId: string) => {
  const responseApi = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const responseApiJson = await responseApi.json();

  return responseApiJson;
};

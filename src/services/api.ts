import { CategoryType, ProductType } from '../types';

export const getCategories = async () => {
  const responseApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');

  const dataJson: CategoryType[] = await responseApi.json();
  return dataJson;
};

export const getProductsFromCategoryAndQuery = async (
  query: string,
  categoryId?: string,
) => {
  let response;

  if (categoryId) response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
  else response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);

  const responseJson = await response.json();
  return responseJson as { results: ProductType[] };
};

export const getProductsFromCategory = async (
  categoryId: string,
) => {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);

  const responseJson = await response.json();
  return responseJson as { results: ProductType[] };
};

export const getProductById = async (productId: string) => {
  const responseApi = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const responseApiJson = await responseApi.json();

  return responseApiJson;
};

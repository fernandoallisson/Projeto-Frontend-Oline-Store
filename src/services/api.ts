export const getCategories = async () => {
  const responseApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');

  const dataJson = await responseApi.json();
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

export const getProductById = async () => {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
};

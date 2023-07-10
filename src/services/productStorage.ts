import { ProductType } from '../types';

export const getStorage = (key: string) => {
  const storageData = localStorage.getItem(key);
  if (!storageData) return;
  return JSON.parse(storageData);
};

export const addStorage = <T>(key: string, value: T) => {
  const prevStorage = getStorage(key);
  if (!prevStorage) {
    localStorage.setItem(key, JSON.stringify([value]));
    return;
  }

  localStorage.setItem(key, JSON.stringify([...prevStorage, value]));
};
export const removeProduct = (key: string, id: string, all = false) => {
  const storageProducts: ProductType[] = getStorage(key);

  if (all) {
    const filteredProducts = storageProducts.filter((currProduct) => {
      return currProduct.id !== id;
    });

    localStorage.setItem(key, JSON.stringify(filteredProducts));
    return;
  }

  const foundIndex = storageProducts.findIndex((currProduct) => {
    return currProduct.id === id;
  });

  storageProducts.splice(foundIndex, 1);
  localStorage.setItem(key, JSON.stringify(storageProducts));
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

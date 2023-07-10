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
export const removeProduct = (id: string, key: string) => {
  const storageProducts: ProductType[] = getStorage(key);
  const foundIndex = storageProducts.findIndex((currProduct) => {
    return currProduct.id === id;
  });
  storageProducts.splice(foundIndex, 1);
  removeStorage(key);
  localStorage.setItem(key, JSON.stringify(storageProducts));
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

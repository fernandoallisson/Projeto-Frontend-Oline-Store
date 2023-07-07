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
  const dataJson = JSON.parse(prevStorage);
  localStorage.setItem(key, JSON.stringify([...dataJson, value]));
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

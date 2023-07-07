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
  console.log(prevStorage);
  localStorage.setItem(key, JSON.stringify([...prevStorage, value]));
};

export const removeStorage = (key: string) => {
  localStorage.removeItem(key);
};

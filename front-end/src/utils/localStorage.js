const getLocalStorage = (key) => {
  const items = localStorage.getItem(key);
  return JSON.parse(items);
};

const setLocalStorage = (key, value) => {
  const items = JSON.stringify(value);
  localStorage.setItem(key, items);
};

export {
  getLocalStorage,
  setLocalStorage,
};

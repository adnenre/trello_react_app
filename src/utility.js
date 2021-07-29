// GENERATE A RANDOM UNIQUE ID

const uniqID = () => "_" + Math.random().toString(36).substr(2, 9);

// save to localStorage

const saveToStorage = (COLS) => {
  let COLUMNS = JSON.stringify(COLS);
  localStorage.setItem("COLUMNS", COLUMNS);
};

// LOAD FROM LOCALSTORAGE
const loadFromStorage = () => {
  let columns = localStorage.getItem("COLUMNS");
  return columns ? JSON.parse(columns) : null;
};

export { uniqID, saveToStorage, loadFromStorage };

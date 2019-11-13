const set = (key,value) => 
      localStorage.setItem(key, value);

const remove = (key) =>
      localStorage.removeItem(key);

const get = (key) =>
  localStorage.getItem(key);

// localstore getter/setter for favourites
export const setFavourite = (v) => {
  let storageType='favourite';
  set(`${storageType}`,v);

  let favs =[];
  
};

export const getFavourite = (k) => {
  let storageType='favourite';
  return get(`${storageType}.${k}`);
};

export const removeFavourite = (k) => {
  let storageType='favourite';
  return remove(`${storageType}.${k}`);
};

export const isFavourite = (k) => {
  return !!getFavourite(k);
}

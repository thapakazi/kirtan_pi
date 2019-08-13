const set = (key,value) => 
      localStorage.setItem(key, value);

const remove = (key) =>
      localStorage.removeItem(key);

const get = (key) => 
  localStorage.getItem(key);

// localstore getter/setter for favourites
export const setFavourite = (k,v) => {
  let storageType='favourite';
  set(`${storageType}.${k}`,v);
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
  console.log(!!getFavourite(k))
  return !!getFavourite(k);
}

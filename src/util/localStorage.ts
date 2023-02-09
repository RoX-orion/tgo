export function getKey(key: string) {
  return localStorage.getItem(key);
}

export function setKey(key: string, value: string) {
  return localStorage.setItem(key, value);
}

export function removeKey(key: string) {
  return localStorage.removeItem(key);
}

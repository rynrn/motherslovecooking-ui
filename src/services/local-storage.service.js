import _ from 'lodash';

if (typeof window !== 'undefined') {
  localStorage.setItem('myCat', 'Tom');
}

export const storage = {
  setItem: (key, value) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value);
    }
  },
  getItem: (key) => {
    if (typeof window !== 'undefined') {
      localStorage.getItem(key);
    }
  },
  removeItem: (key) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key);
    }
  }
}

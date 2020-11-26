import _ from 'lodash';
import React, { createContext, useReducer, useContext } from 'react';

const initialState = [];

const productsReducer = (state, action) => {
  let newState = state;
  switch (action.type) {
    case 'add_products':
      newState = action.products
      break
    default: throw new Error('Unexpected action');
  }
  return newState;
};

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const contextValue = useReducer(productsReducer, initialState);
  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export const useProducts = () => {
  const contextValue = useContext(ProductsContext);
  return contextValue;
};

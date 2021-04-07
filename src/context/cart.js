import _ from 'lodash';
import React, { createContext, useReducer, useContext } from 'react';
import { storage } from "../services/local-storage.service"

const initialState = {
  products: {},
  total: 0,
  minimumTotal: 250
};

const isProductExist = (cart, productId) => !_.isEmpty(cart.products[productId]);

const getQuantity = (cart, productId) => {
  let quantity = 0;
  if (!!cart.products[productId]) {
    quantity = cart.products[productId].quantity;
  }
  return quantity;
};

const addToCart = (state, action) => {
  const uid = action.variationId ? action.variationId : action.productId;
  const quantity = isProductExist(state, action.productId) ? (getQuantity(state, action.productId) + 1) : 1
  const newState = {
    ...state,
    products: {
      ...state.products,
      [action.productId]: {
        ...state.products[action.productId],
        id: uid,
        name: action.name,
        price: action.price,
        quantity
      }
    }
  };

  // google conversion
  gtag('event', 'conversion', {
    'send_to': 'AW-1039718244/KfR2CNGljoACEOSu4-8D',
    'value': action.price * quantity,
    'currency': 'ILS'
  });

  return {
    ...newState,
    total: getTotal(newState.products)
  }
};

const increasProductQuantity = (state, action) => {
  const newState = {
    ...state,
    products: {
      ...state.products,
      [action.productId]: {
        ...state.products[action.productId],
        quantity: (getQuantity(state, action.productId) + 1)
      }
    }
  }
  return {
    ...newState,
    total: getTotal(newState.products)
  }
};

const decreasProductQuantity = (state, action) => {
  const decreasLimit = _.isNil(action.decreasLimit) ? 1 : action.decreasLimit;
  if (state.products[action.productId] && state.products[action.productId].quantity > decreasLimit) {
    const newState = {
      ...state,
      products: {
        ...state.products,
        [action.productId]: {
          ...state.products[action.productId],
          quantity: (state.products[action.productId].quantity - 1)
        }
      }
    }

    return {
      ...newState,
      total: getTotal(newState.products)
    }
  } else {
    return state;
  }
};

const removeProductFromCart = (state, action) => {
  delete state.products[action.productId];
  const newState = {
    ...state,
    products: { ...state.products }
  }

  return {
    ...newState,
    total: getTotal(newState.products)
  }
};

const getTotal = (products) => {
  let total = 0;

  for (const index in products) {
    const product = products[index];
    total += Number(product.price) * product.quantity;
  }

  return total;
};

const updateLocalStorage = (state) => {
  storage.setItem('cart', JSON.stringify(state));
  return state;
};

const getCartFromLocalStorage = () => {
  let cart = storage.getItem('cart');
  try {
    cart = JSON.parse(cart);
    if (!cart) {
      cart = initialState;
    }
  } catch (e) {
    cart = initialState;
  }
  return cart;
};

const cartReducer = (state, action) => {
  let newState = state;
  switch (action.type) {
    case 'add':
      newState = addToCart(state, action);
      break
    case 'remove':
      newState = removeProductFromCart(state, action);
      break
    case 'increment':
      newState = increasProductQuantity(state, action);
      break
    case 'decrement':
      if (getQuantity(state, action.productId) === 1) {
        newState = removeProductFromCart(state, action);
      } else {
        newState = decreasProductQuantity(state, action);
      }
      break
    case 'reset':
      newState = { ...initialState }
      break
    default: throw new Error('Unexpected action');
  }
  return updateLocalStorage(newState)
};

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const contextValue = useReducer(cartReducer, getCartFromLocalStorage());
  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const contextValue = useContext(CartContext);
  return contextValue;
};

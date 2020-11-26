import { createStore, applyMiddleware } from 'redux';
import { persistCombineReducers, persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { reducer as toastr } from 'react-redux-toastr';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import config from './config/config';
import categories from './views/Categories/reducer';
import products from './views/Products/reducer';
import reviews from './components/Reviews/reducer';
import cart from './views/Cart/reducer';
import variations from './components/Variations/reducer';
import search from './views/Search/reducer';
import navbar from './components/NavBar/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'navbar',
    'search',
    'toastr',
    'categories',
    'products',
    'reviews',
    'variations',
    'cart',
  ],
  // debug: true,
};

const rootReducer = persistCombineReducers(rootPersistConfig, {
  categories: persistReducer(
    {
      key: 'categories',
      storage,
      blacklist: config.OFFLINE ? ['isFetching', 'hasMore'] : ['isFetching', 'hasMore', 'items'],
    },
    categories,
  ),
  products: persistReducer(
    {
      key: 'products',
      storage,
      blacklist: config.OFFLINE ? ['isFetching', 'hasMore'] : ['isFetching', 'hasMore', 'items'],
    },
    products,
  ),
  reviews: persistReducer(
    {
      key: 'reviews',
      storage,
      blacklist: config.OFFLINE ? ['isFetching'] : ['isFetching', 'items'],
    },
    reviews,
  ),
  variations: persistReducer(
    {
      key: 'variations',
      storage,
      blacklist: config.OFFLINE ? ['isFetching'] : ['isFetching', 'items'],
    },
    variations,
  ),
  cart: persistReducer(
    {
      key: 'cart',
      storage,
    },
    cart,
  ),
  navbar,
  search,
  toastr,
});

const history = createBrowserHistory();

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(thunk, routerMiddleware(history))
  )
);

persistStore(store);

export { history };
export default store;

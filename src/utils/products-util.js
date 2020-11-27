import _ from 'lodash';

export const getQuantity = (cart, id) => {
  let quantity = 0;
  if (!!cart.products[id]) {
    quantity = cart.products[id].quantity;
  }
  return quantity;
};

export const getProductImage = (images = [], placeholder) => {
  let src = _.head(images);
  src = _.isEmpty(src) ? placeholder : src.src;
  return src;
};

export const getProductImages = (images = [], placeholder) => {
  let _images = _.isEmpty(images) ? [placeholder] : images;
  _images = _.map(_images, img => ({ original: _.isString(img) ? img : img.src }));
  return _images;
};

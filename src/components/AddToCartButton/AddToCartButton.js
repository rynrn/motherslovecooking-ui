import React from 'react';
import _ from "lodash"
import { Button, Icon } from 'semantic-ui-react';

const AddToCartButton = ({ center, left, right, quantity, add, decrement }) => {
  let alignClass = center ? 'center' : '';
  alignClass = right ? 'right' : alignClass;
  alignClass = left ? 'left' : alignClass;

  return (
    <div className={`add-to-cart ${alignClass}`}>
      <Button.Group size='large'>
        <Button positive onClick={add}>
          <Icon name='plus' />
        </Button>
        <Button.Or text={quantity} />
        <Button negative onClick={decrement}>
          <Icon name='minus' />
        </Button>
      </Button.Group>
    </div>
  );
};

export default AddToCartButton;

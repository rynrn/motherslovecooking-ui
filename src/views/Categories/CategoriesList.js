import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { categoryPropType } from './reducer';
import CategoryCard from './CategoryCard';
import { Card } from 'semantic-ui-react';

const CategoriesList = ({ name, id, src }) => {
  if (_.isNil(props.categories) || _.isEmpty(props.categories)) {
    return <div> No categories to display </div>;
  }
  const list = props.categories.map(element => (
    <CategoryCard key={element.id} id={element.id} src={_.isEmpty(element.image) ? '' : element.image.src} name={element.name} />
  ));
  return <Card.Group itemsPerRow={2} className="categories-list">{list}</Card.Group>;
};

export default CategoriesList;

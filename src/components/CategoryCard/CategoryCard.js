import React from 'react';
import { Link } from "gatsby"
import { Card, Button, Header, Segment } from 'semantic-ui-react';
import CircularImage from '../../components/CircularImage';

import './styles.css';

const CategoryCard = ({ id, src, name }) => (
  <Card>
    <Card.Content>
      {src !== '' ? (
        <Link to={'/category/' + id}>
          <CircularImage src={src} />
        </Link>
      ) : null}
      <Segment basic className="category-meta-container">
        <Card.Header as={Header} className="break-words">
          {name}
        </Card.Header>
        <Link to={'/category/' + id}>
          <Button color="pink" compact>
            הצג מוצרים &gt;
              </Button>
        </Link>
      </Segment>
    </Card.Content>
  </Card>
);

export default CategoryCard;

import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'semantic-ui-react';

const Breadcrumbs = ({ items = [] }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumbs">
        {items.map((item, i) => {
          if (!!item.to) {
            return <li key={i}><Link to={item.to}>{item.name}</Link><Icon name="angle left"></Icon></li>
          } else {
            return <li key={i}><span>{item.name}</span></li>
          }
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

import React, { useState, useEffect } from "react"
import _ from "lodash"
import Autosuggest from 'react-autosuggest';
import ProductCardContainer from "../../containers/ProductCardContainer/ProductCardContainer"
import { useProducts } from "../../context/products"
import '../../utils/image-util';

const SearchContainer = ({ data }) => {
  const [value, setSearchValue] = useState('');
  const [products, dispatch] = useProducts();

  useEffect(() => {
    dispatch({ type: 'add_products', products: data });
  }, [data]);

  console.log('products:::', products)

  const inputProps = {
    placeholder: 'חיפוש',
    value,
    onChange: this.onChange
  };

  return (
    <div className="products-grid">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      {
        _.map(products, (node) =>
          <ProductCardContainer
            key={node.wordpress_id}
            id={node.wordpress_id}
            name={node.name}
            categories={node.categories}
            price={node.price}
            images={node.images} />
        )
      }
    </div>
  );
}

export default SearchContainer;

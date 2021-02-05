import React, { useState } from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import SEO from '../components/seo';
import ProductCardContainer from '../containers/ProductCardContainer/ProductCardContainer';
import { Header, Input } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"
import * as queryString from "query-string";

const ProductsPage = ({ data, location }) => {
  const { q = '' } = queryString.parse(location.search);

  const [search, setSearch] = useState(q);

  const products = _.filter(data.products.nodes, product => {
    let inCategories = _.find(product.categories, cat => _.includes(cat.name, search));
    inCategories = !!inCategories;

    if (search === '') {
      return true;
    }

    return _.includes(product.name, search) || inCategories;
  });

  return (
    <Layout>
      <SEO title="כל המנות והמוצרים"
        keywords="אוכל ביתי, כל המוצרים, משלוחים עד הבית, אוכל לסופש"
        description="אוכל ביתי לפי הזמנה, עושים הזמנה בוחרים תאריך ונהנים מאוכל מעולה" />
      <Header textAlign="center" className="products-list-header">מוצרים</Header>
      <div className="search-wrapper">
        <Input type="search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="חיפוש"
          aria-label="חיפוש מנות באתר" />
      </div>
      <div className="products-grid">
        {
          _.map(products, (product) =>
            <ProductCardContainer key={product.wordpress_id}
              id={product.wordpress_id}
              name={product.name}
              categories={product.categories}
              price={product.price}
              images={product.images} />
          )
        }
      </div>
    </Layout>
  );
}


export const query = graphql`
  query ProductsPageQuery {
    products: allWcProducts {
      nodes {
        wordpress_id
        name
        price
        categories {
          name
        }
        images {
          src
        }
      }
    }
  }
`

export default ProductsPage

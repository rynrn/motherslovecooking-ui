import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import { Header } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"
import { ProductsProvider } from "../context/products"
import SearchContainer from '../containers/SearchContainer/SearchContainer';

const SearchPage = ({ data }) => {
  return (
    <Layout>
      <Header textAlign="center" className="products-list-header">חיפוש</Header>
      <ProductsProvider>
        <SearchContainer data={data.products.edges} />
      </ProductsProvider>
    </Layout>
  );
}

export const query = graphql`
query SearchProductsPageQuery {
  products: allWcProducts {
    edges {
      node {
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
}
`

export default SearchPage;

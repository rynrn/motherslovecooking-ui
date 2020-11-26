import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import { Header } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"
import ProductCardContainer from '../containers/ProductCardContainer/ProductCardContainer';

const CategoriesPage = ({ data }) => {
  return (
    <Layout>
      <Header textAlign="center" className="products-list-header">{data.category.name}</Header>
      <div className="products-grid">
        {
          _.map(data.category.products, (node) =>
            <ProductCardContainer key={node.wordpress_id}
              id={node.wordpress_id}
              name={node.name}
              categories={node.categories}
              price={node.price}
              images={node.images} />
          )
        }
      </div>
    </Layout>
  );
}


export const query = graphql`
  query CategoryQuery($id: Int!) {
    category: wcProductsCategories(wordpress_id: {eq: $id}) {
      name
      products {
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

export default CategoriesPage

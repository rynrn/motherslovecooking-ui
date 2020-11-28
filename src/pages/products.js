import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import SEO from '../components/seo';
import ProductCardContainer from '../containers/ProductCardContainer/ProductCardContainer';
import { Header } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"

const ProductsPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="כל המנות והמוצרים"
        keywords="אוכל ביתי, כל המוצרים, משלוחים עד הבית, אוכל לסופש"
        description="אוכל ביתי לפי הזמנה, עושים הזמנה בוחרים תאריך ונהנים מאוכל מעולה" />
      <Header textAlign="center" className="products-list-header">מוצרים</Header>
      <div className="products-grid">
        {
          _.map(data.products.edges, ({ node }) =>
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
  query ProductsPageQuery {
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

export default ProductsPage

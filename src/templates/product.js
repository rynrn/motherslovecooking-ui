import React from "react"
import { graphql } from "gatsby"
import ProductDetails from '../components/ProductDetails/ProductDetails';
import { Header } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"

const ProductPage = ({ data }) => {
  return (
    <Layout>
      <Header textAlign="center" className="products-list-header">{data.product.name}</Header>
      <ProductDetails key={data.product.wordpress_id} {...data.product} id={data.product.wordpress_id} />
    </Layout>
  );
}


export const query = graphql`
  query ProductPage($id: Int!) {
    product: wcProducts(wordpress_id: {eq: $id}) {
      wordpress_id
      name
      price
      backorders_allowed
      stock_status
      description
      images {
        src
      }
    }
  }
`

export default ProductPage

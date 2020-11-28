import React from "react"
import { graphql } from "gatsby"
import SEO from '../components/seo';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Layout from "../components/Layout/Layout"

const ProductPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.product.name}
        keywords={`${data.product.name}, אוכל ביתי, מבשלת, עיקריות, תוספות, משלוחים`}
        description={`${data.product.name}, ועוד מנות מחכות לך באתר, פשוט להזמין וזה מגיע אליך עם המון אהבה`} />
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
      categories {
        wordpress_id
        name
      }
      images {
        src
      }
      related_products {
        wordpress_id
        name
        price
        backorders_allowed
        stock_status
        description
        categories {
          wordpress_id
          name
        }
        images {
          src
        }
      }
    }
  }
`

export default ProductPage

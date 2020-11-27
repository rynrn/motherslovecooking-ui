import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Divider } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"
import CartProductContainer from "../containers/CartProductContainer/CartProductContainer"
import CartSummaryContainer from "../containers/CartSummaryContainer/CartSummaryContainer"
import '../utils/image-util';

const CartPage = () => {
  const data = useStaticQuery(graphql`
    query CartCurrencyQuery {
      site {
        siteMetadata {
          currency
        }
      }
      placeholder: file(relativePath: { eq: "placeholder-image.jpg" }) {
        ...squareImage
      }
    }
  `)
  return (
    <Layout>
      <Header as="h1" textAlign="center">עגלת קניות</Header>
      <CartProductContainer placeholder={data.placeholder} currency={data.site.siteMetadata.currency} />
      <CartSummaryContainer currency={data.site.siteMetadata.currency} />
      <Divider hidden />
    </Layout>
  );
}

export default CartPage

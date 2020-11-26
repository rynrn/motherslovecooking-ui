import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"
import CartProductContainer from "../containers/CartProductContainer/CartProductContainer"
import CartSummaryContainer from "../containers/CartSummaryContainer/CartSummaryContainer"

const CartPage = () => {
  const data = useStaticQuery(graphql`
    query CartCurrencyQuery {
      site {
        siteMetadata {
          currency
        }
      }
    }
  `)
  return (
    <Layout>
      <Header textAlign="center">עגלת קניות</Header>
      <CartProductContainer currency={data.site.siteMetadata.currency} />
      <CartSummaryContainer currency={data.site.siteMetadata.currency} />
    </Layout>
  );
}

export default CartPage

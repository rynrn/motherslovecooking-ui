import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Divider } from 'semantic-ui-react';
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import CartProductContainer from "../containers/CartProductContainer/CartProductContainer"
import CartSummaryContainer from "../containers/CartSummaryContainer/CartSummaryContainer"
import { usePageview } from "../hooks/anaytics"
import '../utils/image-util';

const CartPage = () => {
  usePageview();

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
      <SEO title="סל הקניות שלי"
        keywords="סל קניות, מאמא באהבה, משלוחים עד הבית, הזמנה באתר"
        description="כל המוצרים שבחרת להזמין באתר, משלמים ומקבלים מתי שבוחרים, טעים, טרי והכי חשוב כיף" />
      <Header as="h1" textAlign="center">סל הקניות שלי</Header>
      <CartProductContainer placeholder={data.placeholder} currency={data.site.siteMetadata.currency} />
      <CartSummaryContainer currency={data.site.siteMetadata.currency} />
      <Divider hidden />
    </Layout>
  );
}

export default CartPage

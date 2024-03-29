import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import { Header, Button } from 'semantic-ui-react';
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import { back } from '../utils/page-util';
import ProductCardContainer from '../containers/ProductCardContainer/ProductCardContainer';
import { usePageview } from "../hooks/anaytics"

const CategoriesPage = ({ data }) => {
  usePageview();

  return (
    <Layout>
      <SEO title={`אוכל ביתי משלוחים - ${data.category.name}`}
        keywords={`${data.category.name}, אוכל ביתי, מבשלת, עיקריות, תוספות, משלוחים`}
        description={`${data.category.name}, ועוד מנות מחכות לך באתר, פשוט להזמין וזה מגיע אליך עם המון אהבה`} />
      <Header as="h1" textAlign="center" className="products-list-header">{data.category.name}</Header>
      {_.isEmpty(data.category.products) && (
        <div style={{ textAlign: 'center', padding: '100px 0' }}>
          לא קיימים מוצרים לקטגוריה זו
          <br />
          <br />
          <Button onClick={() => back()}>חזור לדף הקודם</Button>
        </div>
      )}
      <div className="products-grid">
        {
          _.map(data.category.products, (node) =>
            <ProductCardContainer key={node.wordpress_id}
              id={node.wordpress_id}
              slug={node.slug}
              name={node.name}
              short_description={node.short_description}
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
        slug
        wordpress_id
        name
        price
        short_description
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

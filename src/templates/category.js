import React from "react"
import _ from "lodash"
import { graphql } from "gatsby"
import { Header, Button } from 'semantic-ui-react';
import SEO from "../components/seo"
import Layout from "../components/Layout/Layout"
import { back } from '../utils/page-util';
import ProductCardContainer from '../containers/ProductCardContainer/ProductCardContainer';

const CategoriesPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.category.name}
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

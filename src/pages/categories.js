import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CategoryCard from '../components/CategoryCard/CategoryCard';
import SEO from '../components/seo';
import { Card } from 'semantic-ui-react';
import Layout from "../components/Layout/Layout"

const CategoriesPage = () => {
  const data = useStaticQuery(graphql`
    query CategoriesQuery {
      categories: allWcProductsCategories {
        edges {
          node {
            id
            wordpress_id
            name
            slug
            image {
              src
            }
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <SEO title={'קטגוריות מוצרים'}
        keywords={`קטגוריות מוצרים, משלוח, אוכל ביתי, בישול ביתי`}
        description={`קטגוריות מוצרים, ועוד מלא סוגי מאכלים עם משלוח עד הבית`} />
      <Card.Group itemsPerRow={2} className="categories-list">
        {
          data.categories.edges.map(({ node }) =>
            <CategoryCard key={node.id} id={node.wordpress_id} name={node.name} image={node.image} />
          )
        }
      </Card.Group>
    </Layout>
  );
}

export default CategoriesPage

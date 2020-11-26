import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import CategoryCard from '../components/CategoryCard/CategoryCard';
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
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Card.Group itemsPerRow={2} className="categories-list">
        {
          data.categories.edges.map(({ node }) =>
            <CategoryCard key={node.id} id={node.wordpress_id} name={node.name} />
          )
        }
      </Card.Group>
    </Layout>
  );
}

export default CategoriesPage

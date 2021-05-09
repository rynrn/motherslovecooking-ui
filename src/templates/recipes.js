import React from "react"
import { graphql } from "gatsby"
import { Divider, Container, Image } from 'semantic-ui-react';
import SEO from '../components/seo';
import Title from '../components/Title/Title';
import Layout from "../components/Layout/Layout"
import { usePageview } from "../hooks/anaytics"
import '../utils/image-util';

const RecipesPage = ({ data }) => {
  const { title, content, featuredImage } = data.wpcontent.post;
  const { sourceUrl } = featuredImage.node;
  usePageview();
  return (
    <Layout>
      <SEO title={title} />
      <div className="recipes" dir="rtl" style={{ height: '100%' }}>
        <Container>
          <Divider hidden />
          <Title text={title} />
          <Divider hidden />
          <Image src={sourceUrl} alt={title} title={title} style={{ maxWidth: '400px', float: 'left', paddingRight: '20px' }} />
          <div
            key={`body`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Divider hidden />
        </Container>
      </div>
    </Layout>
  )
};


export const query = graphql`
  query RecipesPage($id: ID!) {
    wpcontent {
      post(id: $id) {
        title
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`

export default RecipesPage

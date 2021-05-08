import React from "react"
import striptags from "striptags"
import { graphql } from "gatsby"
import SEO from '../components/seo';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import Layout from "../components/Layout/Layout"
import { usePageview } from "../hooks/anaytics"

const ProductPage = ({ data }) => {
  usePageview();

  const categories = data.product.categories.map((cat) => cat.name).join(', ');
  const description = striptags(data.product.description);
  const price = striptags(data.product.price);
  return (
    <Layout>
      <SEO title={`משלוחי אוכל ביתי - ${data.product.name}`}
        keywords={`${data.product.name}, ${categories}, אוכל ביתי, מבשלת, עיקריות, תוספות, משלוחים`}
        description={`${description}, במחיר של ${price}${data.site.siteMetadata.currency}, ${categories}`} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: `
          {
            "@context" : "http://schema.org",
            "@type" : "Product",
            "name" : "${data.product.name}",
            "image" :  "${data.product.images[0].src}",
            "description" : "${data.product.description.replace('<p>', '').replace('</p>', '')}",
            "aggregateRating": {
              "@type": "AggregateRating",
              "reviewCount": "${data.product.total_sales}"
            },
            "offers" : {
              "@type" : "Offer",
              "price" : "${data.product.price}",
              "priceCurrency": "NIS",
              "availability": "https://schema.org/InStock"
            }
          }
        `,
        }}
      />
      <ProductDetails key={data.product.wordpress_id} {...data.product} id={data.product.wordpress_id} />
    </Layout>
  );
}

export const query = graphql`
  query ProductPage($id: Int!) {
    site {
      siteMetadata {
        currency
      }
    }
    product: wcProducts(wordpress_id: {eq: $id}) {
      wordpress_id
      slug
      name
      price
      backorders_allowed
      stock_status
      description
      short_description
      total_sales
      categories {
        wordpress_id
        name
        slug
      }
      images {
        src
      }
      related_products {
        wordpress_id
        slug
        name
        price
        backorders_allowed
        stock_status
        description
        short_description
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

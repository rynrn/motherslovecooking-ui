import React, { useState } from "react"
import { chunk } from "lodash"
import { useStaticQuery, graphql } from "gatsby"
import { Divider, Container } from 'semantic-ui-react';
import SEO from '../components/seo';
import Title from '../components/Title/Title';
import Layout from "../components/Layout/Layout"
import ReactPaginate from 'react-paginate';
import '../utils/image-util';

const chunkCount = 10;

const ManuPage = ({ data }) => {
  const [page, setPage] = useState(0);
  const { wcProductsCategories } = data;
  const { products = [], categoryName } = wcProductsCategories;
  const productsChunks = chunk(products, chunkCount);
  return (
    <Layout>
      <SEO title="תפריט שבועי"
        description="תפריט שבועי להזמנות אוכל ביתי, משלוחים עד הבית" />
      <div style={{ height: '100%' }}>
        {productsChunks[page] && productsChunks[page].map(product => {
          return (
            <div key={product.id}>{product.name}</div>
          );
        })}
        {/* <Divider hidden /> */}
        <ReactPaginate
          previousLabel={'אחורה'}
          nextLabel={'הבא'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={products.length / chunkCount}
          initialPage={page}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={p => setPage(p.selected)}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </div>
    </Layout>
  )
};


export const query = graphql`
query MenuCategoryQuery($id: Int!) {
  wcProductsCategories(wordpress_id: {eq: $id}) {
    categoryName: name
    products {
      name
      id
    }
  }
}
`

export default ManuPage


const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Create Categories pages
  const categoryPageTemplate = path.resolve('./src/templates/category.js')

  const resultCategoriesQuery = await graphql(`
    query CategoriesQuery {
      categories: allWcProductsCategories {
        edges {
          node {
            wordpress_id
            slug
          }
        }
      }
    }
  `)

  if (resultCategoriesQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query (categoryPageTemplate).`)
    return
  }

  resultCategoriesQuery.data.categories.edges.forEach(category => {
    createPage({
      path: `/category/${category.node.wordpress_id}`,
      component: categoryPageTemplate,
      context: {
        id: category.node.wordpress_id,
      },
    })
  })

  // Create Product pages
  const productPageTemplate = path.resolve('./src/templates/product.js')

  const resultCreateProductQuery = await graphql(`
    query CreateProductQuery {
      products: allWcProducts {
        edges {
          node {
            wordpress_id
            slug
          }
        }
      }
    }
  `)

  if (resultCreateProductQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query (productPageTemplate).`)
    return
  }

  resultCreateProductQuery.data.products.edges.forEach(product => {
    createPage({
      path: `/product/${product.node.wordpress_id}`,
      component: productPageTemplate,
      context: {
        id: product.node.wordpress_id,
      },
    })
  });

  // Search page
  // const searchPageTemplate = path.resolve('./src/templates/search.js')
  // createPage({
  //   path: `/search`,
  //   component: searchPageTemplate
  // })
}

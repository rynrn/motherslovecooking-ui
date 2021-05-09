const path = require(`path`);

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-insta-stories/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

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
      path: decodeURIComponent(`/category/${category.node.slug}`),
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
      path: decodeURIComponent(`/product/${product.node.slug}`),
      component: productPageTemplate,
      context: {
        id: product.node.wordpress_id,
      },
    })
  });

  // Create Recipes pages
  const resultCreateRecipesQuery = await graphql(`
    query RecipesPostsQuery {
      wpcontent {
        posts {
          nodes {
            slug
            id
            categories {
              nodes {
                categoryId
              }
            }
          }
        }
      }
    }
  `)

  if (resultCreateRecipesQuery.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query (productPageTemplate).`)
    return
  }

  const allPosts = resultCreateRecipesQuery.data.wpcontent.posts.nodes;
  const allRecipesPosts = allPosts.filter(post => {
    const found = post.categories.nodes.find(cat => cat.categoryId === 47);
    return !!found;
  })
  allRecipesPosts.forEach(post => {
    createPage({
      path: decodeURIComponent(`/recipes/${post.slug}`),
      component: path.resolve('./src/templates/recipes.js'),
      context: {
        id: post.id,
      },
    })
  });

}

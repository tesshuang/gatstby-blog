const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
// create slug for each markdown
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content/blogs/` });

    createNodeField({
      node,
      name: `slug`,
      value: `/blogs${slug}`,
    })

  }
}
// create new pages through graphql data
exports.createPages = async ({ graphql, actions }) => {
  // **Note:** The graphql function call returns a Promise
  // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // console.log(JSON.stringify(result, null, 4))
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    // console.log(node.fields.slug);
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/blog-template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
  // console.log(result.data.allMarkdownRemark.edges);
}

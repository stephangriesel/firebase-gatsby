const path = require('path');

exports.createPages = ({ graphql, actions }) => { // createPages specific to Gatsby: https://www.gatsbyjs.org/docs/node-apis/
  const { createPage } = actions;
  const bookTemplate = path.resolve('src/templates/bookTemplate.js');

  return graphql(`
    {
        allBook {
          edges {
            node {
              summary
              title
              id
              author {
                name
              }
            }
          }
        }
      }
    `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    result.data.allBook.edges.forEach(book => {
      createPage({
        path: `/book/${book.node.id}`, // loop through books & generate id
        component: bookTemplate, // refers to component line 5
        context: book.node // pass in context props, example in bookTemplate line 4
      })
    });
  })
}
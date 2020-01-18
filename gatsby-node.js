exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

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

        result.data.allbook.edges.forEach(book => {
            createPage({
                path: `/book/${book.node.id}`,
                component: null,
                context: book.node
            })
        });
    })
}
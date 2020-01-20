import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookItem from "../components/BookItem";


const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem key={edge.node.id}>
          <h2>{edge.node.title} - </h2>
          <h5>{edge.node.author.name}</h5>
          <div>{edge.node.summary}</div>
          <Link to={`/book/${edge.node.id}`}>Discuss</Link>
        </BookItem>
      ))}
    </Layout>
  );
}

export const query = graphql`
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
`

export default IndexPage

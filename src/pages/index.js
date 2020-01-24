import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BookItem from "../components/BookItem";
import styled from 'styled-components';

const LinkButton = styled.div`
  text-align:right;

  a{
    border-radius:10px;
    color:#FFF;
    padding:8px;
    text-decoration:none;
    background:#272927;
    :hover {
      background:#000;
      transition:2s ease-in-out;
    }
  }
`

const IndexPage = (props) => {
  console.log(props);
  return (
    <Layout>
      {props.data.allBook.edges.map(edge => (
        <BookItem
          bookCover={edge.node.imageUrl}
          bookTitle={edge.node.title}
          bookSummary={edge.node.summary}
          authorName={edge.node.author.name}
          key={edge.node.id}>
          <LinkButton>
            <Link to={`/book/${edge.node.id}`}>Discuss</Link>
          </LinkButton>
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
        imageUrl
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

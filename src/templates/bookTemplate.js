import React from 'react';
import Layout from "../components/layout";

const BookTemplate = (props) => {
    console.log(props.pageContext.title)
    return (
        <Layout>
            Book test page
        </Layout>
    )
};

export default BookTemplate;

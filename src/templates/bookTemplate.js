import React from 'react';

const BookTemplate = (props) => {
    console.log(props.pageContext.title)
    return (
        <div>
            Book test page
        </div>
    )
};

export default BookTemplate;

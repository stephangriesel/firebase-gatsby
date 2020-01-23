import React from 'react';
import styled from 'styled-components';

const BookItemWrapper = styled.section`
border: 1px solid #999;
margin:1em;
padding:1em;
    h2{
        small{
            font-weight:normal;
        }
    }
`;

const BookItem = ({ authorName, bookTitle, bookSummary, children }) => {
    return (
        <BookItemWrapper>
            <h2>
                {bookTitle} - <small>{authorName}</small>
            </h2>
            <p>
                {bookSummary}
            </p>
            <div>
                {children}
            </div>
        </BookItemWrapper>
    )
}

export default BookItem;
import React from 'react';
import Books from './Books';

function RenderingLists() {
    const bookList = [
        'To kill the mockingbird',
        'The great Gatsby',
        'The catcher in the rye'

    ];

    const books = [
        {
            title: 'To kill a mockingbird',
            author: 'Harper Lee',
            pages: 281
        },
        {
            title: 'The great gatsby',
            author: 'F. Scott Fitzgerald',
            pages: 218
        },
        {
            title: 'The catcher in the rye',
            author: 'J.D Salinger',
            pages: 234
        }
    ];
    return (
        <div>
            {bookList.map(book => {
                return <h2>{book}</h2>;
            })}
            <hr />
            {
                books.map(book => {
                    return (
                        <Books book={book} />
                    );
                })
            }
        </div>


    );
}

export default RenderingLists;
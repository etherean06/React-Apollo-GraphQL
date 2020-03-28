import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { BOOKS_BY_ID } from '../../GraphQl/schema';
import { withRouter } from 'react-router-dom';
import {
  BookTitle,
  BookCoverImg,
  BookDivComponent,
  BookDuration,
  BookInfoContainer,
  BookAuthor,
  BookDescription,
  BookSpan
} from './styled';
import Smiley from '../../Assets/Smiley';
import Rating from 'react-rating';

const BookById = props => {
  const { match } = props;
  let { id } = match.params;
  const { loading, error, data } = useQuery(BOOKS_BY_ID, {
    variables: { id: id }
  });
  if (loading)
    return (
      <h2>
        Loading...
        <Smiley desc={'load'} smiley={'👨‍💻'} />
      </h2>
    );
  if (error)
    return (
      <p>
        Something went wrong! <Smiley desc={'sad'} smiley={'😡'} />
      </p>
    );
  const { title, imageUrl, duration, author, description, rating } = data.book;
  console.log(`Here is rating`, data.book);
  return (
    <>
      <BookTitle>{title}</BookTitle>
      <BookDivComponent>
        <BookCoverImg alt="img" src={imageUrl} />
        <BookInfoContainer>
          <BookAuthor>{author}</BookAuthor>
          <BookDuration>
            <BookSpan>Duration: </BookSpan> {duration} Hours (Audio Book)
          </BookDuration>
          <BookDescription>{description}</BookDescription>
          <div style={{ marginTop: 40 }}>
            <p>Rating: </p>
            <Rating initialRating={rating} readonly />
          </div>
        </BookInfoContainer>
      </BookDivComponent>
    </>
  );
};

export default withRouter(BookById);

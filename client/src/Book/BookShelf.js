import React from 'react';
import { Card, CardContainer, BookCover, BookTitle, StyledLink } from "./style"


const BookShelf = (props) => (
    <Card key={props.id}>
        <StyledLink to={`/book/${props.id}`}>
            <CardContainer>
                <BookCover alt="img" src={props.imageUrl} />
                <BookTitle>{props.title}</BookTitle>
            </CardContainer>
        </StyledLink>
    </Card>
)

export default BookShelf
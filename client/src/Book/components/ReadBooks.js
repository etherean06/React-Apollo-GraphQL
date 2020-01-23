import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import BookShelf from "../BookShelf"
import { Container, Loading, HaveRead, BookDiv } from "./styled"
import { BOOKS } from "../../GraphQl/schema"
import Smiley from "../../Assets/Smiley"

const Books = () => {
    const { loading, error, data } = useQuery(BOOKS);
    if (loading) return <Loading>Loading...<Smiley desc={'load'} smiley={'👨‍💻'} /></Loading>;
    if (error) return <p>Something went wrong! <Smiley desc={'sad'} smiley={'😡'} /></p>;

    return (
        <BookDiv>
            <HaveRead>Already Read</HaveRead>
            <ReadBooks
                read={data.read}
            />
            <HaveRead>To Read</HaveRead>
            <ReadBooks
                read={data.notRead}
            />
        </BookDiv>
    )
}

const ReadBooks = (props) => {
    return (
        <Container>
            {props.read.map(book => (
                <BookShelf
                    imageUrl={book.imageUrl}
                    title={book.title}
                    id={book.id} />))}
        </Container>
    )
}

export default Books
import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-family: 'Inconsolata', monospace;
`

export const BookTitle = styled.h2`
color: #9a41f2;
text-align: center;
`
export const BookCoverImg = styled.img`
width: 60%;
`

export const BookInfoContainer = styled.div`
width: 100%;
`

export const BookDivComponent = styled.div`
display: grid;
    grid-template-columns: 50% 40%;
    padding: 40px;
`

export const BookDuration = styled.p`
color: rgba(255,255,255,.65)
`

export const Loading = styled.h3`
color: palevioletred
`

export const HaveRead = styled.h3`
color: orange
`

export const BookCover = styled.div`
grid-column-start: 2;
grid-column-end: five;
grid-row-start: row1-start;
grid-row-end: 3;
`

export const BookAuthor = styled.h1`
font-size: 40px;
color: white
`
export const BookDescription = styled.p`
display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

export const BookDiv = styled.div`
width: 100%
`

export const BookSpan = styled.span`
color: rgba(255,255,255,.65)
`
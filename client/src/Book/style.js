import styled from 'styled-components'
import { BrowserRouter as Router, Link } from "react-router-dom"


export const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
display:flex;
justify-content: center;
  transition: 0.3s;
  width: 20%;
  margin: 20px;
  &:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.5);
  }
`
export const CardContainer = styled.div`
    padding: 2px 2px;
`

export const BookCover = styled.img`
width: 100%
`

export const BookTitle = styled.h4`
text-align: center;
font-family: 'Inconsolata', monospace;
`

export const StyledLink = styled(Link)`
  color: palevioletred;
  display: block;
  margin: 0.5em 0;
  font-family: Helvetica, Arial, sans-serif;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    color: red;
  }
`;
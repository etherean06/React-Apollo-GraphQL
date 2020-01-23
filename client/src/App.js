import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import BookById from "./Book/components/BookById"
import Books from "./Book/components/ReadBooks"
import { Title } from "./style"
import Smiley from "./Assets/Smiley"
const App = () => {
  return (
    <>
      <Title>My 2020 Book Shelf Powered By GraphQL and Apollo <Smiley desc='fly!' smiley={'🚀'} /></Title>
      <Router>
        <Route exact path='/' component={Books} />
        <Route exact path='/book/:id' component={BookById} />
      </Router>
    </>
  )
}

export default App;

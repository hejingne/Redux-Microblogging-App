import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { BlogsList } from './features/blogs/BlogsList'
import { Form } from './features/blogs/Form'
import { SingleBlogPage } from './features/blogs/SingleBlogPage'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <Form />
                <BlogsList />
              </React.Fragment>
            )} />

          <Route
            exact path="/blogs/:blogId"
            component={SingleBlogPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

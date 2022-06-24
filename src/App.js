import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { BlogsList } from './features/blogs/BlogsList'
import { AddForm } from './features/blogs/AddForm'
import { SingleBlogPage } from './features/blogs/SingleBlogPage'
import { EditBlogPage } from './features/blogs/EditBlogPage'

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
                <AddForm />
                <BlogsList />
              </React.Fragment>
            )} />

          <Route
            exact path="/blogs/:blogId"
            component={SingleBlogPage} />

          <Route
            exact path="/editBlog/:blogId"
            component={EditBlogPage} />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

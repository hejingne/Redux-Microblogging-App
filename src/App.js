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
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { GlobalStyle } from './GlobalStyle'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Switch>
        <Route path='/'>
          <App />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

import React from 'react'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import ScoreCalc from './pages/score-calc'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/score-calc" />
      </Route>
      <Route path="/score-calc">
        <ScoreCalc />
      </Route>
    </Switch>
  </Router>
)

export default App

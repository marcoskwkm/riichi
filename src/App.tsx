import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import ScoreCalcPage from './pages/score-calc'
import ScoreTablePage from './pages/score-table'

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to="/score-calc" />
      </Route>
      <Route path="/score-calc">
        <ScoreCalcPage />
      </Route>
      <Route path="/score-table">
        <ScoreTablePage />
      </Route>
    </Switch>
  </Router>
)

export default App

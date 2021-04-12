import {
  Router, Switch, Route
} from "react-router-dom";

import { Home } from './map/ComponentMap'
import { history } from './map/UtilsMap'

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

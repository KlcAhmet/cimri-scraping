import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home } from './map/ComponentMap'
import { history } from './map/UtilsMap'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

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

import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home } from './map/ComponentMap'
import { history } from './map/UtilsMap'
/* Components */
import { Container } from 'react-bootstrap';
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Container>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;

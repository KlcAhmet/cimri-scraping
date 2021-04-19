import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage } from './map/ComponentMap'
import { history } from './map/UtilsMap'
/* Components */
import { useSelector } from "react-redux";
import { useEffect } from 'react';
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const Link = useSelector(state => state.searchCimri.link)

  useEffect(() => {
    if (Link) {
      history.push(Link)
    }

  }, [Link])


  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:Link" component={ProductsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

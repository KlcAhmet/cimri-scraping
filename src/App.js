import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage, ProductNotFound } from './map/ComponentMap'
import { history, EventBus, Const } from './map/UtilsMap'
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
          <Route path="/notfound" component={ProductNotFound} />
          <Route path="/:Link" on component={ProductsPage} />
        </Switch>
      </Router>
    </div >
  );
}

EventBus.addListener(Const.events.SearchNotFound.type, () => {
  history.push("/notfound")
})


export default App;

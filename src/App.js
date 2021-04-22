import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage, ProductNotFound } from './map/ComponentMap'
import { history, EventBus, Const, cimriSearch } from './map/UtilsMap'
/* Components */
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
/* localStorage */
import { saveState } from './localStorage'
/* Post */
import Post from './service/Post'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const SearchCimri = useSelector(state => state.searchCimri.link)
  const [page, setPage] = useState()

  useEffect(() => {
    if (SearchCimri) {
      console.log("aa");
      setPage(<Route path="/:SearchCimri" component={ProductsPage} />)
      history.push(SearchCimri)
    }
    else if (window.location.search.length) {
      console.log(window.location);
      const temp = window.location.pathname.substring(1, window.location.pathname.length) + window.location.search
      cimriSearch.searchCimri(window.location.search.substring(2, window.location.search.length))
      setPage(<Route path="/:temp" component={ProductsPage} />)
      history.push(window.location.pathname + window.location.search)
    }
  }, [SearchCimri])

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          {page}
          <Route path="/notfound" component={ProductNotFound} />
        </Switch>
      </Router>
    </div >
  );
}

EventBus.addListener(Const.events.SearchNotFound.type, () => {
  history.push("/notfound")
})


export default App;

import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage, ProductNotFound } from './map/ComponentMap'
import { history,/*  EventBus, Const, */ } from './map/UtilsMap'
/* Components */
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
/* Sercive */
import Post from './service/Post'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';
/* On load */
Post.postCimriHeader()

function App() {
  const SearchCimri = useSelector(state => state.searchCimri.link)
  const [page, setPage] = useState()

  useEffect(() => {
    if (SearchCimri) {
      setPage(<Route path="/:SearchCimri" component={ProductsPage} />)
      history.push(SearchCimri)
    }
    else if (window.location.search.length) {
      // eslint-disable-next-line
      const temp = window.location.pathname + window.location.search
      //  cimriSearch.searchCimri(window.location.search.substring(2, window.location.search.length)) değişecek
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



export default App;

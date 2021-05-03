import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage, ProductNotFound, Login, ProtectedAccount } from './map/ComponentMap'
import { history,/*  EventBus, Const, */Message, LoginEvent, ProductEvent } from './map/UtilsMap'
/* Components */
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react'
/* Sercive */
/* import { postHeader } from './map/ServiceMap' */
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import "@blueprintjs/core/lib/css/blueprint.css"
import "toastr/build/toastr.min.css"
/* On load */
// postHeader()
Message()
LoginEvent()
ProductEvent()


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
          <Route path="/login" component={Login} />
          <Route path="/uyelik/hesabim" component={ProtectedAccount} />
        </Switch>
      </Router>
    </div >
  );
}



export default App;

import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage, ProductNotFound, Login, ProtectedAccount, Page404 } from './map/ComponentMap'
import { history,/*  EventBus, Const, */Message, LoginEvent, ProductEvent, LocalStorageEvent } from './map/UtilsMap'
import { postProductAlarm, postSearch } from './map/ServiceMap'
/* Components */
import { useSelector } from "react-redux"
import { useEffect, useState } from 'react'
/* Sercive */
import { postHeader } from './map/ServiceMap'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css'
import "@blueprintjs/core/lib/css/blueprint.css"
import "toastr/build/toastr.min.css"
import './css/App.css'
import './css/Header.css'
import './css/FirsatlarCard.css'
import './css/ProductsPage.css'
import './css/SearchCard.css'
import './css/PriceAlarm.css'
import './css/Login.css'
/* On load */
postHeader()
Message()
LoginEvent()
ProductEvent()
LocalStorageEvent()
//postProductAlarm()


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
      postSearch(temp.substring(1, temp.length))
      setPage(<Route path="/:temp" component={ProductsPage} />)
      history.push(window.location.pathname + window.location.search)
    }
  }, [SearchCimri])

  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/uyelik/hesabim" component={ProtectedAccount} />
            <Route path="/notfound" component={ProductNotFound} />
            {page}
            <Route component={Page404} />
          </Switch>
        </main>
      </Router>
    </div >
  );
}



export default App;

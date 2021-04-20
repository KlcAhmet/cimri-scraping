import {
  Router, Switch, Route
} from "react-router-dom";
/* Map */
import { Home, Header, ProductsPage, ProductNotFound } from './map/ComponentMap'
import { history, EventBus, Const } from './map/UtilsMap'
/* Components */
import { useSelector } from "react-redux";
import { useEffect } from 'react';
/* localStorage */
import { saveState } from './localStorage'
/* Post */
import Post from './service/Post'
/* CSS */
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const SearchCimri = useSelector(state => state.searchCimri)

  useEffect(() => {
    if (SearchCimri.link) {
      history.push(SearchCimri.link)
      saveState({
        searchCimri: {
          link: SearchCimri.link
        }
      })
      if (!SearchCimri.productsData) {
        console.dir(SearchCimri.link)
        Post.postCimriSearcher(SearchCimri.link)
      }

    }
  }, [SearchCimri])
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notfound" component={ProductNotFound} />
          <Route path="/:SearchCimri" on component={ProductsPage} />
        </Switch>
      </Router>
    </div >
  );
}

EventBus.addListener(Const.events.SearchNotFound.type, () => {
  history.push("/notfound")
})


export default App;

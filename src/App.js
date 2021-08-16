import React from "react"
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from "./components/Header"
import ProductList from './components/ProductListing'
import ProductDetail from './components/ProductDetail'
function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductList} />
          <Route path='/product/:productId' exact component={ProductDetail} />
          <Route>404 Not Found </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

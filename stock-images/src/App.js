import React from 'react';
import Header from './components/bottleShow/menu/main-menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import BottleScreen from './components/bottleShow/bottle-screen';
import Products from './components/Products/products';
import About from './components/About/about';
import Shop from './components/Shop/shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/faqs" component={Shop} />
          <Route path="/" component={BottleScreen} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Products from './components/Main/Products';
import ProductScreen from './components/ProductScreen'
import CartScreen from './components/CardScreen'

import {useState} from 'react'

function App() {
  var [test, useTest] = useState(0);
  return (
    <BrowserRouter>
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <div className="main-container">
        {test}
        <Route path="/" exact={true} component={Main} />
        <Route path="/products" component={Products} />
        {/* <Route path="/product/:id" component={ProductScreen} /> */}
        <Route path="/product/:id" component={() => <ProductScreen />} />
        <Route path="/cart" component={() => <CartScreen props={test}/>} />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
   </BrowserRouter>
  );
}

export default App;

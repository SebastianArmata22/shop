import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Products from './components/Main/Products';
import ProductScreen from './components/ProductScreen'
import CartScreen from './components/CardScreen'
import {useState} from 'react'
import CardScreen from './components/CardScreen';

function App() {

  return (
    <BrowserRouter>
    <div className='container'>
      <header>
        <Header />
      </header>
      <main>
        <div className="main-container">
        <Route path="/" exact={true} component={Main} />
        <Route path="/products" component={Products} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart" component={CardScreen} />

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

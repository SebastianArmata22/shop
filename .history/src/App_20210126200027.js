import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Products from './components/Main/Products';
import ProductScreen from './components/ProductScreen'
import CardScreen from './components/CardScreen';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import CartContextProvider from './context/CartContext';
import Item from './components/Item';

function App() {

  return (
    <CartContextProvider>
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
        <Route path="/signin" component={SignInScreen} />
        <Route path="/signup" component={SignUpScreen} />
        <Item />

        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
   </BrowserRouter>
   </CartContextProvider>
  );
}

export default App;

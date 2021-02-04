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
import AccountContextProvider from './context/AccountContext';
import OrderContextProvider from './context/OrderContext'
import AccountScreen from './components/main/AccountScreen';
import Order from './components/Order';
import OrderSummary from './components/OrderSummary';

function App() {

  return (
    <AccountContextProvider>
      <CartContextProvider>
        <OrderContextProvider>
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
                    <Route path="/signin/:order" component={SignInScreen} />
                    <Route path="/signup" component={SignUpScreen} />
                    <Route path="/account" component={AccountScreen} />
                    <Route path="/order" component={Order} />
                    <Route path="/sumarry" component={OrderSummary} />

                  </div>
                </main>
                <footer>
                  <Footer />
                </footer>
              </div>
          </BrowserRouter>
        </OrderContextProvider>
      </CartContextProvider>
   </AccountContextProvider>
  );
}

export default App;

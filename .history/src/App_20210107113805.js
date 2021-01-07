import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'
import Main from './components/Main/Main'


function App() {
  return (
    <BrowserRouter>
    <div className='container'>
      <header>
        <Header />

      </header>
      <main>
        <Route path="/" exact={true} component={Main} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
   </BrowserRouter>
  );
}

export default App;

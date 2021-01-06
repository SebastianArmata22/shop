import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header'

function App() {
  return (
    <BrowserRouter>
    <div>
      <header>
        <Header />

      </header>
      <main>
        
      </main>
    </div>
   </BrowserRouter>
  );
}

export default App;

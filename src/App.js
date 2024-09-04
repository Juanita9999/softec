import logo from './logo.svg';
import './App.css';
import Hero from './components/hero';
import Payment from './components/payment';
import Service from './components/service';
import Footer from './components/footer';
import Header from './components/header';
import NewsletterPopup from './components/newsletterpopup';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      <Header/>
      </header>
      <Hero/>
      <Payment/>
      <Service/>
      <Footer/>
      <NewsletterPopup/>
    </div>
  );
}

export default App;

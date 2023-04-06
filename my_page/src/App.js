import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <h1>Home page</h1>
      </div>
      <Footer />
    </div>
  );
}

export default App;


import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './view/Home';
import Login from './view/page/Login';
import SignUP from './view/page/SignUp'

function App() {
  return (
    <div className="App">
    
      <Header/>
      {/* <Login/> */}
      {/* <SignUP/> */}
      <Home/>
      <Footer/>
      
    </div>
  );
}

export default App;


import './App.css';
import {BrowserRouter , Routes , Route, Navigate} from 'react-router-dom'
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import AskQuestion from './view/AskQuestion';
import Home from './view/Home';
import Login from './view/page/Login';
import SignUP from './view/page/SignUp'
import QuestionDetail from './view/QuestionDetail';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext()
  return (
    <div className="App">
    
    
      {/* <Login/> */}
      {/* <SignUP/> */}
      {/* <Home/> */}
      {/* <AskQuestion/> */}
      {/* <QuestionDetail/> */}
      
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={ user? <Home/>: <Navigate to="/login" />}/>
        <Route path='/login' element={!user? <Login/>:<Navigate to="/" />}/>
        <Route path='/signup' element={!user? <SignUP/>:<Navigate to="/"/>}/>
  
        <Route path='/askquestion' element={user?<AskQuestion/>:<Navigate to="/login" />}/>
        <Route path='/questiondetail' element={user?<QuestionDetail/>:<Navigate to="/login" />}/>
        
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

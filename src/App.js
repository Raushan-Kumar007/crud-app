import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import CrudApp from './Components/CrudApp';
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import EditUser from './Components/EditUser';
import { BrowserRouter, Routes, RouterProviderProps, Route} from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
 
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route path='/'element={<CrudApp/>}/>
    <Route path='/Add' element={<AddUser/>}/>
    <Route path='/All' element={<AllUser/>}/> 
    <Route path='/edit/:id' element={<EditUser/>}/>
  
    </Routes>
    </BrowserRouter>
  );
}

export default App;

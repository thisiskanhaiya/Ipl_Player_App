import './App.css';
import AddPlayer from './components/AddPlayer';
import Header from './components/Header';
import ShowPlayer from './components/ShowPlayer';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';


function App() {
  return (
    

      <BrowserRouter>
              <Header text="plyerApp"></Header>
        
        <Routes>
          <Route path='/' exact element={<Home></Home>} ></Route>
          <Route path='/add' element={<AddPlayer/>} ></Route>
          <Route path='/show' element={<ShowPlayer/>} ></Route>

        </Routes>
        
      </BrowserRouter>
      
  );
}

export default App;

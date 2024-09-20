import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navigation from './Pages/Navigation';
import NoPage from './Pages/NoPage';


function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element ={<Home/>}/>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
            <Route path='*' element={<NoPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App

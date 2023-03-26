import './App.css'
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';
import Health from './components/Health';
import Science from './components/Science';
import Technology from './components/Technology';
import LoadingBar from 'react-top-loading-bar'
import { useGlobal } from './components/Context';
// import { useGlobal } from './components/Context'

function App() {
  const { loading } = useGlobal();
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={4}
          progress={loading}
        />
        <div className="heading my-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px'}}>
          <h1>BREAKING NEWS</h1>
          <span style={{fontSize: 'small', fontWeight:'100'}}>NEWSCATCH.com</span>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/sports' element={<Sports />} />
          <Route path='/health' element={<Health />} />
          <Route path='/science' element={<Science />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

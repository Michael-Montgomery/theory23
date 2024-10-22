// import logo from './logo.svg';
import './App.css';

import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/home/home';
import OurMission from './pages/mission/mission';



function App() {
  return (
    <HashRouter basename='/'>
      <Routes>
        <Route path="/" element={<Home />}>
        <Route path='/mission' element={<OurMission></OurMission>}></Route>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

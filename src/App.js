import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
    {/* <ResponsiveAppBar /> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/home" element={<Home /> } /> 
    </Routes>
  </BrowserRouter>
  )
}

export default App;

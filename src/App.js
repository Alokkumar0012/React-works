import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';
import Header from './Header';
import Home from './Home';
import Gallary from './Gallary';
import Counter from './Counter';
import Dosum from './Dosum';
function App() {
  return (
    <div>
      <Router>
        <Link to='home'>Home</Link>  |
        <Link to='about'>About</Link>  |
        <Link to='header'>Header</Link> |
        <Link to='gallary'>Gallary</Link> |
        <Link to='counter'>Counter</Link>  |
        <Link to='dosum'>Dosum</Link>
          <Routes>
            <Route element={<Home />} path="/home" />
             <Route element={<About />} path="/about" />
             <Route element={<Header />} path="/header" />
             <Route element={<Gallary />} path="/gallary" />   
             <Route element={<Counter />} path="/counter" />   
             <Route element={<Dosum />} path="/dosum" />   

           </Routes>
      </Router>
    </div>
  );
}

export default App;

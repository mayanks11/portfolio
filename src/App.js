import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route exact= "true" path = "/" element = {<Layout />}>
        <Route index element={<Home/>}/>
        <Route exact="true" path = "/about" element = {<About />} />
        <Route exact="true" path="/contact" element = {<Contact />} />
        
        </Route>
        
        
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Example from './components/Example';
import Homepage from './pages/Homepage';
import About from './pages/About';

// HTML + JS => JSX

// JSX => Tüm jsx yapısı tek bir parent'in altında olmalıdır.
// React.Fragment => <> </>

// {} => içerisinde JS kodu yazılacak
// arrow function syntax
function App() {
  let name = "Halit";
  let show = true;
  let list = ["a", "b", "c"]
  let exampleTitle = "Merhaba, Kodlama IO";

  function onClick() {
    console.log("Butona tıklandı")
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

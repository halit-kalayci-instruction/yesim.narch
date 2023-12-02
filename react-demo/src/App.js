import './App.css';

// HTML + JS => JSX

// JSX => Tüm jsx yapısı tek bir parent'in altında olmalıdır.
// React.Fragment => <> </>
function App() {
  return (
    <>
      <div className="App">
        <h3>Merhaba</h3>
      </div>
      <div>
        Merhaba
      </div>
    </>
  );
}

export default App;

import './App.css';
import Example from './components/Example';

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
    <>
      <div className="App">
        <h3>{name}</h3>
      </div>
      {show ? <div>True</div> : <div>False</div>}

      {/* Iterasyon işlemlerinde KEY değeri atanmalıdır. */}
      <ul>
        {/* {list.map(element => <li>{element}</li>)} */}
        {list.map(element => {
          return <li key={element}>{element}</li>
        }
        )}
      </ul>

      <button onClick={() => onClick()}>Gönder</button>

      <Example title={exampleTitle} />
    </>
  );
}

export default App;

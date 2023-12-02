import './App.css';

// HTML + JS => JSX

// JSX => Tüm jsx yapısı tek bir parent'in altında olmalıdır.
// React.Fragment => <> </>

// {} => içerisinde JS kodu yazılacak
// arrow function syntax
function App() {
  let name = "Halit";
  let show = true;
  let list = ["a", "b", "c"]

  return (
    <>
      <div className="App">
        <h3>{name}</h3>
      </div>
      {show ? <div>True</div> : <div>False</div>}

      <ul>
        {/* {list.map(element => <li>{element}</li>)} */}
        {list.map(element => {
          return <li>{element}</li>
        }
        )}
      </ul>
    </>
  );
}

export default App;

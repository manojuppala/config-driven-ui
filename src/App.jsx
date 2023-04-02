import "./App.css";
import logo from "./logo.svg";
import FormA from "./FormA";
import FormB from "./FormB";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div
          style={{
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          <FormA />
          <img src={logo} className="App-logo" alt="logo" style={{ width: "25%" }} />
          <FormB />
        </div>
      </header>
    </div>
  );
}

export default App;

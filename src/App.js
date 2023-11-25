import logo from 'https://pbs.twimg.com/media/FNNVF4TX0BI_SJw.jpg'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          EDITAR <code>src/App.js</code> GRABAR Y MOSTRAR EN PAGINA :).
        </p>
        <a
          className="App-link"
          href="https://www.puce.edu.ec"
          target="_blank"
          rel="noopener noreferrer"
        >
          PUCE
        </a>
      </header>
    </div>
  );
}

export default App;

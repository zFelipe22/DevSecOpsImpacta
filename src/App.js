import logo from './images/impacta.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Atividade final da disciplina DevSecOps SRE & Quality Assurance <br/>
          Para acessar o diretório do Git <a className="Link" href='https://github.com/zFelipe22/DevSecOpsImpacta' target="_blank" without rel="noreferrer">clique aqui</a>.
        </p>        
      </header>
    </div>
  );
}

export default App;

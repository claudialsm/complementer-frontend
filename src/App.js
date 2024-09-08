import maplogo from '../src/map-logo-non-transparent.png';
import './App.css';
import PromptForm from './components/PromptForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={maplogo} className="App-logo" alt="logo" />
        <h1>Mapper</h1>
        <p className="ai-model">Powered by Gemini AI</p>
      </header>
      <PromptForm />
    </div>
  );
}

export default App;

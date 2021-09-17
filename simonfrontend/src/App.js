import { Provider } from 'react-redux';
import './App.css';
import store from './store'
import { Game } from './components/Game';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        <header className="App-header">
          <h1>Simon Game</h1>
          <div style={{ marginTop: "25px" }}>
            <Game />
          </div>
        </header>

      </Provider>
    </div>
  );
}

export default App;

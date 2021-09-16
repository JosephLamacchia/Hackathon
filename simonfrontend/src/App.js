import { Provider } from 'react-redux';
import './App.css';
import store from './store'
import { Game } from './components/Game';

function App() {
  return (
    <div className="App">
      <Provider store={store}>

      <header className="App-header">

        <Game />
      </header>

      </Provider>
    </div>
  );
}

export default App;

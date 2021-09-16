import { Provider } from 'react-redux';
import './App.css';
import { Game } from './components/Game'
import store from './store'

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

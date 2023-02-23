import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter />
      {/*<Message />*/}
      {/*<Greet name='alan' god='god'>
        <p>im a shooter</p>
      </Greet>
      <Greet name='lisa' god='lichu' />
      <button>curly</button>
      <Greet name='ananya' god='babe' />
      <Welcome name='alan' god='god' />
      <Welcome name='ananya' god='babe' />
      <Hello />*/}
    </div>
  );
}

export default App;

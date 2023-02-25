import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';

function App() {
  return (
    <div className="App">
      <Inline />
      {/*<Stylesheet />*/}
      {/*<NameList />*/}
      {/*<UserGreeting />*/}
      {/*<ParentComponent />*/}
      {/*<EventBind />*/}
      {/*<ClassClick />*/}
      {/*<FunctionClick/>*/}
      {/*<Counter />*/}
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

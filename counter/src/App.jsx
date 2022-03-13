import './App.css';
import {Counter} from "./components/counter" ;

function App() {
  return (
     <div className='App'>
      <Counter value={0} />  // value as a prop
     </div>
  );
}

export default App;

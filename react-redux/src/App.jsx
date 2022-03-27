import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/home';
import { TodoItem } from './components/todo_item';

function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/todo/:id' element={<TodoItem/>}></Route>
    </Routes>
    </div>
  );
}

export default App;

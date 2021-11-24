
import './App.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
  
      <Route path='/' exact element={<Home/>} />
     

      </Routes>
    </div>
  );
}

export default App;

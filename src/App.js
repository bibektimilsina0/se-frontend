// import logo from './logo.svg';
import './App.css';
import Campaign from './components/Campaign';
import Home from './components/Home'
import Toggle from './components/Toggle';
import Esewa from './components/esewa/Esewa';


function App() {
  return (
    <div className="App">
      {/* <Toggle/> */}
     <Home/>
     <Campaign/>
     <Esewa/>
    </div>
  );
}

export default App;

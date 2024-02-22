
import './App.css';
import {Main} from "./components/Main"
import { Education } from './components/Education';
import { Technical } from './components/Technical';
import { Code } from './components/Code';
import { Achievements } from './components/Achievements';
import { Project } from './components/Project';
 
function App() {
  return (
    <div className="App">
      <Main/>
      <Technical/>
      <Code/>
      <Achievements/>
      
      <Project/>
      <Education/>
     
      

    
    </div>
  );
}

export default App;

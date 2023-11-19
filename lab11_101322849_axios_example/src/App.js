import './App.css';
import PersonList from './components/PersonList'
import PersonDataRow from './components/PersonDataRow'

function App() {
  return (
    <div>
      <header>
      <center><h1 class='title'>Person List</h1></center>
      </header>
      <PersonList/>
    </div>
  
  );
}

export default App;

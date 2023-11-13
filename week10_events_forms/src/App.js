//import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import UserFormClass from './components/UserFormClass';
import UserFormFunction from './components/UserFormFunction';

function App() {
  return (
    <center>
    <div>
        <UserFormClass />
        <UserFormFunction />
    </div>
    </center>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Student from './components/student/Student';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Student></Student>
    </div>
  );
}

export default App;

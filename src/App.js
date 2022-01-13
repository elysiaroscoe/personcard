import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const janeDoe = {
    firstName: "Jane",
    lastName: "Doe",
    age: 45,
    hairColor: "Black"
  }

  const johnSmith = {
    firstName: "John",
    lastName: "Smith",
    age: 88,
    hairColor: "Brown"
  }

  const fillmoreMillard = {
    firstName: "Fillmore",
    lastName: "Millard",
    age: 50,
    hairColor: "Brown"
  }

  const mariaSmith = {
    firstName: "Maria",
    lastName: "Smith",
    age: 62,
    hairColor: "Brown"
  }

  return (
    <div className="App">
      <PersonCard person = {janeDoe}/>
      <PersonCard person = {johnSmith}/>
      <PersonCard person = {fillmoreMillard}/>
      <PersonCard person = {mariaSmith}/>
    </div>
  );
}

export default App;

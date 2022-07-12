
import './App.css';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <h1>Props And Destructuring</h1>

      <Card card1="This Is Card 1"></Card>
      <Card card1="This Is Card 2"></Card>
      <Card card1="This Is Card 3"></Card>
    </div>
  );
}

export default App;

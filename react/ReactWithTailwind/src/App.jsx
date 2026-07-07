import './App.css'
import Card from './components/card'

function App() {


  return (
    <>
      <h1 className="text-4xl font-bold text-white bg-green-500 ">
        Hello Tailwind
      </h1>
      <div className="flex flex-wrap gap-4 p-4">
        <Card name="John" />
        <Card name="Ava" />
        <Card name="Mia" />
        <Card name="Noah" />
        <Card name="Liam" />
      </div>
    </>
  );
}
export default App; 

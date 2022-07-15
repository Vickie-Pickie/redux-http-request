import './App.css';
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import Filter from "./components/Filter";

function App() {
  return (
    <div className="App">
      <ServiceAdd />
      <Filter />
      <ServiceList />
    </div>
  );
}

export default App;

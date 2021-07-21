import './App.css';

const list = ['fazer alguma coisa', 'fazer outra coisa', 'mais uma coisa'];

const Task = (valor) => {
  return (
   <div> { list.map((item) => <li> {item} </li>)} </div> 
  );
}

function App() {
  return  <Task/>;
}

export default App;

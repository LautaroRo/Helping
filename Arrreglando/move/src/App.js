import './App.css';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  const [Cont,setCont] = useState(0)
  return (
<>
  <NavBar Setgreeting={setCont} Greeting={Cont}/>
  <ItemListContainer Setgreeting={setCont} greeting={Cont}/>
</>
  );
}

export default App;

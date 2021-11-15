import React,{useState} from 'react'
import './App.css';
import StripeContainer from './components/stripeContainer';
import spatula from './assets/spatula.jpg'


function App() {

  const [showItem,setShowItem] = useState(false)

  return (
    <div className="App">
    <h1>The Spatula Store</h1>
    {showItem ? <StripeContainer/> : 
      <React.Fragment> <h3>$10.00</h3> <img src={spatula} alt="spatula" />
      <button onClick= {() => setShowItem(true)}>
        Purchase
      </button>
      </React.Fragment>}
    </div>
  );
}

export default App;

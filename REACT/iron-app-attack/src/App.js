import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome'


const guesses = [
  'pipe wrench',
  'bed spread',
  'popcorn popper',
  'science class',
  'chicken'
]

const stylez = {
  fontSize:'40px',
  color: 'blue',
  background: 'pink',
  padding: '20px'
}

const playerTwo = 'Niko T'

const username = 'J T'

const goodPoint = true;

const numbers = 98142536457;

const passFunAsProp = () => {
  alert('hi our function')
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Welcome 
          theplayerTwo={playerTwo} 
          theUsername={username} 
          theGuesses={guesses}
          theStylez={stylez}
          gorilla={passFunAsProp}
        />


      </header>
    </div>
  );
}

// class App extends React.Component {
//   render(){
//     return(
//       <div className="App">
//       <header className="App-header">

//         CoolBeans should work too
//       </header>
//     </div>
//     )
//   }
// }
export default App;

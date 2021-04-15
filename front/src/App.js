import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Teste from './Teste'
import Head from './Head'
import Home from './Home'
import './Home.css'

function App() {
  return (
    <div className='App'>
        <Router>
          <Switch>
            <Route path="/Teste">
              <Teste className= 'Texto'/>
            </Route>
            <Route path="/">
              <Home className= 'Texto'/>
            </Route>
          </Switch>
        </Router>
        <Head className= 'Texto'/>
    </div>
  );
}

export default App;

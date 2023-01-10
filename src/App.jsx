
import Home from './Home';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Moviedetails from './Moviedetails';
import Addmovie from './Addmovie';
import Updatemovie from './Updatemovie';

function App() 
{
  return(
   <Router>
     <div className='App'>
        <Navbar/>
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route  path="/moviedetails:id">
              <Moviedetails/>
            </Route>
            <Route path="/addmovies">
              <Addmovie/>
            </Route>
            <Route path="/update:id">
              <Updatemovie/>
            </Route>
            
          </Switch>
        
    </div>
   </Router>
  )
}
export default App;
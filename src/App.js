import './App.css';
import Navbar from './components/Navbar'
import Login from './Signup/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cards from './Upcomming/index'

import Welcome from './Welcome/index'



function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        
        
        <Switch>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/home" component={Navbar} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/upcomming" component={Cards} />
        

        </Switch>

        {/* <Login /> */}






      </>
    </Router>
  );
}

export default App;

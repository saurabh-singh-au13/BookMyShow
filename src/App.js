import './App.css';
import Navbar from './components/Navbar'
import Login from './Signup/Login'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home/Index';


function App() {
  return (
    <Router>
      <>
        {/* <Navbar /> */}
        
        
        <Switch>
          <Route exact path="/home" component={Navbar} />
          <Route exact path="/login" component={Login} />

        </Switch>

        {/* <Login /> */}






      </>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MainScreen from './Components/MainScreen';
import FeaturesScreen from './Components/FeaturesSreen';
import Navbar from './Components/Navbar';
import Login from './Components/LoginScreen';
import Register from './Components/RegisterScreen';
import {Switch, Route, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Switch>
          <Route component={MainScreen} path="/" exact/>
          <Route component={FeaturesScreen} path="/Features" exact/>
          <Route component={Login} path="/Login" exact/>
          <Route component={Register} path="/Register" exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

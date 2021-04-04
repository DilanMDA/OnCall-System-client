import './App.css';
import {BrowserRouter as Router, Switch, Route} from  'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import DefaultLayout from './layouts/DefaultLayout';
import UserPage from './modules/User/User';
import AboutUs from './modules/AboutUs/AboutUs';
import HomeLayout from './layouts/HomeLayout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={HomeLayout(Home)} exact />
        <Route path='/signin' component={SigninPage} exact />
        <Route path='/user' component={DefaultLayout(UserPage)} exact />
        {/* <Route path='/user' component={(UserPage)} exact /> */}

        <Route path='/about' component={DefaultLayout(AboutUs)} exact />
      </Switch>
    </Router>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Explore from './Pages/Explore/Explore';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import NotFound from './Pages/NotFound/NotFound';
import CarDetail from './Pages/CarDetail/CarDetail';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      
      <Switch>
      <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <PrivateRoute path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/cars/:id">
          <CarDetail />
        </PrivateRoute>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
   
  </Router>
      </AuthProvider>
    </div>
  );
}

export default App;


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import AuthProvider from './context/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>


            <Route path="/home">
              <Home></Home>
            </Route>


            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>


            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
        </Router>
      </AuthProvider>


    </div>
  );
}

export default App;


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import AuthProvider from './context/AuthProvider';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login/Login';
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

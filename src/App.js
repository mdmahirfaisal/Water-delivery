
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddService from './pages/Dashboard/AddService/AddService';
import ManageOrders from './pages/Dashboard/ManageOrders/ManageOrders';
import Header from './pages/Home/Header/Header';
import Home from './pages/Home/Home/Home';
import PlaceOrder from './pages/Home/PlaceOrder/PlaceOrder';
import Login from './pages/Login/Login/Login';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';

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
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <PrivateRoute path="/addservice">
              <AddService></AddService>
            </PrivateRoute>


            <PrivateRoute path="/order">
              <Orders></Orders>
            </PrivateRoute>

            <PrivateRoute path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
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

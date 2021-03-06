import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import NotFounds from "./components/NotFounts/NotFounds";
import OrderReview from "./components/OrderReview/OrderReview";
import Orders from "./components/Orders/Orders";
import PlaceOrder from "./components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";
import Shop from "./components/Shop/Shop";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>{" "}
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>{" "}
            <Route exact path="/review">
              <OrderReview></OrderReview>
            </Route>{" "}
            <PrivateRoute exact path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>{" "}
            <PrivateRoute exact path="/orders">
              <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute exact path="/placeOrder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>{" "}
            <Route exact path="/register">
              <Register></Register>
            </Route>{" "}
            <Route exact path="*">
              <NotFounds></NotFounds>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;

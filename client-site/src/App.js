import "./App.css";
import Topbar from "./components/Topbar";
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import Navbars from "./components/Navbars";
import HomeScreen from "./screen/HomeScreen";
import CartScreen from "./screen/CartScreen";
import Register from "./screen/Register";
import Login from "./screen/Login";
import OrderScreen from "./screen/OrderScreen";
import AdminScreen from "./screen/AdminScreen";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Notfound from "./components/Notfound";
import Pizzadetails from "./components/Pizzadetails";


function App() {
  const userState = useSelector((state) => state.loginUserReducer);
  const { currentUser } = userState;
  return (
    <BrowserRouter>
        {
        currentUser ? (currentUser.isAdmin === true ? null : (<Topbar />)) : <Topbar />
      }
      
      <Navbars />

      <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/cart" component={CartScreen} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/pizza/:id" component={Pizzadetails} />
        <Route exact path="/orders" component={OrderScreen} />
        {
          currentUser ? (currentUser.isAdmin === true ? (<Route path="/admin" component={AdminScreen} />) : null) : null
        }
        <Route path="*" component={Notfound} />
      </Switch>
      {
        currentUser ? (currentUser.isAdmin === true ? null : (<Footer />)) : <Footer />
      }

    </BrowserRouter>
  );
}

export default App;

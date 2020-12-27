import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Catalog from "./components/pages/Catalog";
import Cart from "./components/pages/Cart";
import Footer from './components/Footer/Footer';
import ItemDetails from "./components/pages/ItemDetails/ItemDetails"
import Checkout from "./components/pages/Checkout/Checkout";
import Success from "./components/pages/Success/Success";
import SignUp from "./components/pages/SignUp/SignUp";
import NotFound from "./components/pages/NotFound/NotFound";
import SignIn from "./components/pages/SingIn/SignIn";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";


function App() {
  
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <ProtectedRoute path='/catalog' component={Catalog} />
          <ProtectedRoute path='/item/:id' component={ItemDetails} />
          <ProtectedRoute path='/cart' component={Cart} />
          <ProtectedRoute path='/checkout' component={Checkout} />
          <ProtectedRoute path='/success' component={Success} />
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/sign-in' exact component={SignIn} />
          <ProtectedRoute path='*' component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
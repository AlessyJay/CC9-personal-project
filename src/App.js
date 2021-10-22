import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Pages/Forms/Login";
import Home from "./components/Home";
import Cart from "./components/Pages/Cart";
import Register from "./components/Pages/Forms/Register";
import Admin from "./components/Pages/Admin/Admin";
import AddandEdit from "./components/Pages/Admin/Add&Edit";
import AddForm from "./components/Pages/Admin/AddForm";
import UserProfile from "./components/Pages/Forms/UserProfile";
import CustomerList from "./components/Pages/Forms/CustomerList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/cart" component={Cart} />
          <Route path="/register" component={Register} />
          <Route path="/admin" component={Admin} />
          <Route path="/addAndEdit" component={AddandEdit} />
          <Route path="/add" component={AddForm} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/customer" component={CustomerList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

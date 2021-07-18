import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/user">
          <UserDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

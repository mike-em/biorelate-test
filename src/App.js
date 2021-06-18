import Layout from "./components/Layout";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/profile" component={Profile} />
          <Route path="/feed" component={Feed} />
          <Route path="/" component={Login} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;

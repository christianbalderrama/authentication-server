import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {First, Second, Third, Fourth, Fifth, Register} from "./components";

function Index() {
  console.log("Index");
  return (
    <h1>{"Hello, World!"}</h1>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/first" component={First} />
        <Route path="/second" component={Second} />
        <Route path="/third" component={Third} />
        <Route path="/fourth" component={Fourth} />
        <Route path="/fifth" component={Fifth} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}

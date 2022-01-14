import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Layout/Header";
import Card from "./components/UI/Card";
import Container from "./components/UI/Container";
import ReactMain from "./pages/React/ReactMain";
import JavaScriptMain from "./pages/JavaScript/JavaScriptMain";

function App() {
  return (
    <Container>
      <Header />
      <Card>
        <Route path="/react">
          <ReactMain />
        </Route>
        <Route path="/javascript">
          <JavaScriptMain />
        </Route>
      </Card>
    </Container>
  );
}

export default App;

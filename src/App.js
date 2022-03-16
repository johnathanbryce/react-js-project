import { Route } from "react-router-dom";
import "./App.css";

import Header from "./components/Layout/Header";
import Card from "./components/UI/Card";
import Container from "./components/UI/Container";
import ReactMain from "./pages/React/ReactMain";
import JavaScriptMain from "./pages/JavaScript/JavaScriptMain";
import Disclaimer from "./components/Disclaimer/Disclaimer";

function App() {
  return (
    <Container>
      <Header />

      <Card>
        <Route path="/">
          <Disclaimer />
        </Route>
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

import { Container } from "@material-ui/core";
import "./App.css";
import Main from "./Sections/Main";
import Roadmap from "./Sections/Roadmap";

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <div className="App">
        <Main />
        <Roadmap/>
      </div>
    </Container>
  );
}

export default App;

import { Container } from "@material-ui/core";
import "./App.css";
import Main from "./Sections/Main";
import Roadmap from "./Sections/Roadmap";
import Tokenomics from "./Sections/Tokenomics";

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <div className="App">
        <Main />
        <Roadmap/>
        <Tokenomics/>       
      </div>
    </Container>
  );
}

export default App;

import { Container, Divider } from "@material-ui/core";
import "./App.css";
import Features from "./Sections/Features";
import Footer from "./Sections/Footer";
import Main from "./Sections/Main";
import Roadmap from "./Sections/Roadmap";
import Tokenomics from "./Sections/Tokenomics";

function App() {
  return (
    <Container maxWidth="xl" disableGutters>
      <div className="App">
        <Main />
        <Roadmap/>
        <Divider/>
        <Tokenomics/>       
        <Divider/>
        <Features/>
        <Footer/>
      </div>
    </Container>
  );
}

export default App;

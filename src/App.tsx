import "./App.css";
import { Article, Div, H1, H2, Header, Main, Section } from "@flexive/core";

function App() {
  return (
    <Article row>
      <Div grow={2} basis={16} />
      <Main f>
        <Header></Header>
        <H1>I'm DesignDefined</H1>
        <Section>
          <H2></H2>
        </Section>
      </Main>
      <Div grow={2} shrink={2} basis={16} />
    </Article>
  );
}

export default App;

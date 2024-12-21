import "./App.css";
import { Article, Div, H1, H2, Header, Hgroup, Main, P, Section } from "@flexive/core";

function App() {
  return (
    <Article row>
      <Div grow={2} basis={16} />
      <Main f>
        <Header>
          <Hgroup>
            <H1>DesignDefined</H1>
            <P>Web Frontend Developer</P>
          </Hgroup>
        </Header>
        <Section>
          <H2></H2>
        </Section>
      </Main>
      <Div grow={2} shrink={2} basis={16} />
    </Article>
  );
}

export default App;

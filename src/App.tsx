import styles from "./App.module.css";
import { Article, Div, H1, H3, Header, Hgroup, Main, P, Section, Ul } from "@flexive/core";
import { Background } from "./component/Background/Background";
import { Divider } from "./component/Divider/Divider";
import { Card } from "./component/Card/Card";
import { Chip } from "./component/Chip/Chip";

function App() {
  return (
    <>
      <Background />
      <Article row className={styles.App}>
        <Div grow={2} basis={16} />
        <Main f pb={160}>
          <Header py={64} g={48}>
            <Hgroup g={8}>
              <H1 className="name">Design Defined</H1>
              <P className={styles.role}>Web Frontend Developer</P>
            </Hgroup>
          </Header>
          <P className={styles.contact} block pb={8}>
            Please contact me via{" "}
            <a className={styles.mail} href="mailto:designdefined.by@gmail.com" target="_blank">
              Email
            </a>
            ,{" "}
            <a href="https://github.com/designDefined" target="_blank">
              Github
            </a>
            , or{" "}
            <a href="www.linkedin.com/in/junyoung-park-b743b9250" target="_blank">
              LinkedIn
            </a>
            .
          </P>
          <P block>v0.2.2 - Dec 27, 2024</P>
          <Section py={64} g={32}>
            <Divider title="Who am I" />
            <Ul row px={24} g={24} wrap>
              <Card
                name="Work as"
                description="Frontend developer of Classday, Education management and communication platform startup."
              />
              <Card
                name="Self-Defined as"
                description="Declarative Programmer, Typescript Enthusiast, Open-source Novice, and UI Architect."
              />
              <Card name="Majored in" description="Communications, Information Science and Culture(ISC)." />
            </Ul>
          </Section>
          <Section py={64} g={32}>
            <Divider title="Project & Library" />
            <Ul row px={24} g={24} wrap>
              <Card name="The Codec" description="My blog." />
              <Card
                name="Flexive Core"
                description="React components to build flexbox based UI and design systems."
                github="https://github.com/designDefined/flexive"
                npm="https://www.npmjs.com/package/@flexive/core"
              />
              <Card
                name="Flexive Operator"
                description="Toolbox for managing in-component states and interactions."
                github="https://github.com/designDefined/flexive"
                npm="https://www.npmjs.com/package/@flexive/operator"
              />
              <Card
                name="VIA"
                description="State management for View - Intent architecture"
                web="https://viajs.vercel.app/"
                github="https://github.com/designDefined/via"
                npm="https://www.npmjs.com/search?q=viajs-core"
              />
            </Ul>
          </Section>
          <Section py={64} g={32}>
            <Divider title="Skill & Hobby" />
            <Section px={24} g={16}>
              <H3 className={styles.chipLabel} px={8}>
                Advanced
              </H3>
              <Ul row px={0} g={12} wrap>
                <Chip name="Typescript" url="https://www.typescriptlang.org/" />
                <Chip name="React" url="https://react.dev/" />
                <Chip name="State Management" />
                <Chip name="Frontend Architecture" />
                <Chip name="CSS" />
                <Chip name="Zod" url="https://zod.dev/" />
                <Div className={styles.vertical} alignSelfC />
                <Chip name="Film Editing" />
              </Ul>
            </Section>
            <Section px={24} g={16}>
              <H3 className={styles.chipLabel} px={8}>
                Medium
              </H3>
              <Ul row px={0} g={12} wrap>
                <Chip name="NextJS" url="https://nextjs.org/" />
                <Chip name="Express" url="https://expressjs.com/" />
                <Chip name="Vite" url="https://vite.dev/" />
                <Chip name="HTML" />
                <Chip name="Git" />
                <Div className={styles.vertical} alignSelfC />
                <Chip name="Color Grading" url="https://www.blackmagicdesign.com/products/davinciresolve" />
                <Chip name="Piano" />
              </Ul>
            </Section>
            <Section px={24} g={16}>
              <H3 className={styles.chipLabel} px={8}>
                Interested in
              </H3>
              <Ul row px={0} g={12} wrap>
                <Chip name="RxJS" url="https://rxjs.dev/" />
                <Chip name="Rollup" url="https://rollupjs.org/" />
                <Chip name="Three.js" url="https://threejs.org/" />
                <Chip name="SVG" />
                <Chip name="Elm" url="https://elm-lang.org/" />
                <Chip name="Haskell" url="https://www.haskell.org/" />
                <Div className={styles.vertical} alignSelfC />
                <Chip name="Philosophy" />
                <Chip name="Aesthetics" />
              </Ul>
            </Section>
          </Section>
          {/* <Section py={64} g={32}>
            <Divider title="Now reading" />
            <Ul row px={24} g={24} wrap>
              <Card name="The Codec" description="My blog." />
            </Ul>
          </Section> */}
        </Main>
        <Div grow={2} shrink={2} basis={16} />
      </Article>
    </>
  );
}

export default App;

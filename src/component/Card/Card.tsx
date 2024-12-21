import styles from "./Card.module.css";
import { A, Div, H3, P } from "@flexive/core";

type CardProps = {
  name: string;
  description?: string;
  web?: string;
  github?: string;
  npm?: string;
};

export const Card = ({ name, description, web, github, npm }: CardProps) => {
  return (
    <Div className={styles.Card} p={16} g={8} rad={16} sizeC={300} sizeM={160}>
      <H3>{name}</H3>
      <P f>{description}</P>
      <Div row alignM="end" g={4} wrap>
        {web && (
          <A href={web} target="_blank" rad={12} px={8} py={3} alignC>
            Web
          </A>
        )}
        {github && (
          <A href={github} target="_blank" rad={12} px={8} py={3} alignC>
            Github
          </A>
        )}
        {npm && (
          <A href={npm} target="_blank" rad={12} px={8} py={3} alignC>
            NPM
          </A>
        )}
      </Div>
    </Div>
  );
};

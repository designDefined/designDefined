import { Div, H2 } from "@flexive/core";
import styles from "./Divider.module.css";

type DividerProps = {
  title: string;
};

export const Divider = ({ title }: DividerProps) => {
  return (
    <Div className={styles.Divider} row alignC g={8}>
      <Div className={styles.line} basis={24} />
      <H2 className={styles.sectionLabel}>{title}</H2>
      <Div className={styles.line} f />
      <Div />
    </Div>
  );
};

import styles from "./Background.module.css";
import { Div } from "@flexive/core";

export const Background = () => {
  return <Div className={styles.Background} fixed top={0} left={0} />;
};

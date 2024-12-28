import { useWelcomeMessage } from "../../hook/useWelcomeMessage";
import styles from "./Background.module.css";
import { Div } from "@flexive/core";
import { BackgroundIcon } from "./BackgroundIcon/BackgroundIcon";

export const Background = () => {
  const message = useWelcomeMessage();
  return (
    <Div className={styles.Background} fixed top={0} left={0} alignC alignM>
      <Div className={styles.diamond} absolute sizeC={250} sizeM={250} alignC alignM />
      <Div className={styles.white} sizeC={400} sizeM={400} alignC alignM>
        <Div className={styles.black} sizeC={225} sizeM={225} />
      </Div>
      {message && (
        <Div className={styles.message} absolute sizeC={400} sizeM={400} alignC alignM>
          For {message}
        </Div>
      )}
      <BackgroundIcon />
    </Div>
  );
};

import styles from "./Background.module.css";
import { Div } from "@flexive/core";

export const Background = () => {
  return (
    <Div className={styles.Background} fixed top={0} left={0} alignC alignM>
      <Div className={styles.diamond} absolute sizeC={250} sizeM={250} alignC alignM />
      <Div className={styles.white} sizeC={400} sizeM={400} alignC alignM>
        <Div className={styles.black} sizeC={225} sizeM={225} />
      </Div>
      <Div className={styles.message} absolute sizeC={400} sizeM={400} alignC alignM>
        For {lyric}
      </Div>
    </Div>
  );
};

const lyrics = [
  "All that You Touch",
  "All that You See",
  "All that You Taste",
  "All you Feel",
  "All that You Love",
  "All that You Hate",
  "All You Distrust",
  "All You Save",
  "All that You Give",
  "All that You Deal",
  "All that You Buy",
  "All You Create",
  "All You Destroy",
  "All that You Do",
  "All that You Say",
  "All that You Eat",
  "Everyone You Meet",
  "All that You Slight",
  "Everyone You Fight",
  "All that is Now",
  "All that is Gone",
  "All that's to Come",
];

const lyric = lyrics[Math.floor(Math.random() * lyrics.length)];

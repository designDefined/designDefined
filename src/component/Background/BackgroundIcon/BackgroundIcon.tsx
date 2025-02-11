import styles from "./BackgroundIcon.module.css";
import { Div } from "@flexive/core";

export const BackgroundIcon = () => {
  return (
    <Div className={styles.BackgroundIcon} absolute alignC pt={12}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={128} height={128}>
        <path
          stroke="oklch(40% var(--yellow))"
          strokeWidth="1.5"
          d="M0,24.39c0,0,50.79-5.22,62.94,31.82c-20.3,19.7-20.3,19.7-20.3,19.7l-2.52-32l-9.78-5.04l1.19,57.93l9.78,2.37
	L74.2,60.1c0,0-14.15-51.73-74.2-45.47C0,21.47,0,24.39,0,24.39z"
        />
        <path
          stroke="oklch(40% var(--yellow))"
          strokeWidth="1.5"
          d="M84.86,60.23L59.39,92.49c0,0-3.79,5.48,7.14,8.89c10.93,3.41,30.19-0.89,30.19-0.89s0-6.81-1.78-9.33
	c-1.78-2.52-8.89-6.81-8.89-6.81L85.9,91.3l-11.7,0.74l17.33-22.67v-2.67L84.86,60.23z"
        />
        <path
          stroke="oklch(40% var(--yellow))"
          strokeWidth="1.5"
          d="M87.83,38.27l-7.7-2.52l-1.48,5.78c0,0,10.96,16.52,20.89,18.7c0.74,10.04,1.93,19.96,1.93,19.96
	s6.07,4.59,8.44,3.11c0.74-1.84,1.48-4.44,1.48-4.44l-2.07-43.11l-9.04-5.93l-0.44,22.37C99.83,52.19,92.78,48.48,87.83,38.27z"
        />
      </svg>
    </Div>
  );
};

import { useMemo } from "react";
import styles from "./Chip.module.css";
import { A, Li } from "@flexive/core";

type ChipProps = {
  name: string;
  url?: string;
};

export const Chip = ({ name, url }: ChipProps) => {
  const Tag = useMemo(() => (url ? A : Li), [url]);
  return (
    <Tag className={styles.Chip} href={url} target={url ? "_blank" : undefined} px={16} py={12} rad={12}>
      {name}
    </Tag>
  );
};

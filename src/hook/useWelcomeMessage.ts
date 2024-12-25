import { useEffect, useState } from "react";

/**
 * Dynamically generate welcome message on runtime to show random messages in deployed static site.
 */
export const useWelcomeMessage = () => {
  const [msg, setMsg] = useState<string | null>(null);

  useEffect(() => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    setMsg(message);
  }, []);

  return msg;
};

/**
 * From the song "Eclipse" by Pink Floyd.
 */

const messages = [
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
